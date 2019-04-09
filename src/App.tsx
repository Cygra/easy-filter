import React, { Component, ChangeEvent, DragEvent } from 'react';
import './App.css';

interface Props {

}

enum FileStatus {
  DRAG_ENTER,
  NULL,
  UPLOADED,
}

interface State {
  imgUrl: string;
  grayscale: number;
  blur: number;
  sepia: number;
  saturate: number;
  hueRotate: number;
  invert: number;
  opacity: number;
  brightness: number;
  contrast: number;
  dropShadow: [number, number, number, string];
  dragStatus: FileStatus;
}

class App extends Component<Props, State> {
  reader: FileReader;
  constructor(props: Props) {
    super(props);
    this.state = {
      imgUrl: '',
      grayscale: 0,
      blur: 0,
      sepia: 0,
      saturate: 100,
      hueRotate: 0,
      invert: 0,
      opacity: 100,
      brightness: 100,
      contrast: 100,
      dropShadow: [0, 0, 0, '#000'],
      dragStatus: FileStatus.NULL,
    };
    this.reader = new FileReader();
    this.reader.onload = () => this.setState({
      dragStatus: FileStatus.UPLOADED,
      imgUrl: String(this.reader.result),
    });
  }

  onImgChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const files: FileList | null = e.target.files;
    this.handleFile(files);
  }

  onDragEnter = (e: DragEvent<HTMLLabelElement>): void => {
    e.preventDefault();
    this.setState({ dragStatus: FileStatus.DRAG_ENTER });
  }

  onDragOver = (e: DragEvent<HTMLLabelElement>): void => {
    e.preventDefault();
  }

  onDragLeave = () => {
    !this.state.imgUrl && this.setState({ dragStatus: FileStatus.NULL });
  }

  dropImage = (e: DragEvent<HTMLLabelElement>): void => {
    e.preventDefault();
    const files: FileList | null = e.dataTransfer.files;
    this.handleFile(files);
  }

  handleFile = (files: FileList | null): void => {
    files && this.reader!.readAsDataURL(files[0]);
  }

  get labelText(): string {
    switch (this.state.dragStatus) {
      case FileStatus.DRAG_ENTER:
        return 'Drop to upload!';
      case FileStatus.UPLOADED:
        return 'File has been uploaded!';
      case FileStatus.NULL:
      default:
        return 'Drop or click to upload!';
    }
  }

  render() {
    const {
      imgUrl,
      grayscale,
      blur,
      sepia,
      saturate,
      invert,
      opacity,
      brightness,
      contrast,
      hueRotate,
      dropShadow,
    } = this.state;
    const [offX, offY, blurRad, color] = dropShadow;
    return (
      <div className="App">
        <label
          htmlFor="upload-file"
          onDragEnter={this.onDragEnter}
          onDragOver={e => e.preventDefault()}
          onDragLeave={this.onDragLeave}
          onDrop={this.dropImage}>
          {this.labelText}
        </label>
        <input
          id="upload-file"
          type="file"
          accept="image/*"
          onChange={this.onImgChange}
          className="hidden"
        />
        {imgUrl && (
          <img
            src={imgUrl}
            style={{
              filter: [
                `grayscale(${grayscale})`,
                `blur(${blur}px)`,
                `sepia(${sepia}%)`,
                `saturate(${saturate}%)`,
                `hue-rotate(${hueRotate}deg)`,
                `invert(${invert})`,
                `opacity(${opacity}%)`,
                `brightness(${brightness}%)`,
                `contrast(${contrast}%)`,
                `drop-shadow(${offX}px ${offY}px ${blurRad}px ${color})`,
              ].join(' ')
            }}
          />
        )}
      </div>
    );
  }
}

export default App;
