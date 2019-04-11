import React, { Component, ChangeEvent, DragEvent } from 'react';
import './App.scss';
import { Header } from './components/Header'

interface Props {

}

enum FileStatus {
  DRAG_ENTER,
  NULL,
}

interface State {
  imgUrl: string;
  grayscale: string;
  blur: string;
  sepia: string;
  saturate: string;
  hueRotate: string;
  invert: string;
  opacity: string;
  brightness: string;
  contrast: string;
  dropOffX: string;
  dropOffY: string;
  dropBlurRad: string;
  dropColor: string;
  dragStatus: FileStatus;
}

class App extends Component<Props, State> {
  reader: FileReader;
  constructor(props: Props) {
    super(props);
    this.state = {
      imgUrl: '',
      grayscale: '0',
      blur: '0',
      sepia: '0',
      saturate: '100',
      hueRotate: '0',
      invert: '0',
      opacity: '100',
      brightness: '100',
      contrast: '100',
      dropOffX: '0',
      dropOffY: '0',
      dropBlurRad: '0',
      dropColor: '000',
      dragStatus: FileStatus.NULL,
    };
    this.reader = new FileReader();
    this.reader.onload = () => this.setState({
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

  updateValue = (val: string, title: string) => {
    this.setState(state => ({ ...state, [title]: val }))
  }

  reloadFile = () => {
    this.setState({
      imgUrl: '',
      dragStatus: FileStatus.NULL,
    })
  }

  get labelText(): string {
    switch (this.state.dragStatus) {
      case FileStatus.DRAG_ENTER:
        return 'Drop to load file!';
      case FileStatus.NULL:
      default:
        return 'Drop or click to load file!';
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
      dropOffX,
      dropOffY,
      dropBlurRad,
      dropColor,
      dragStatus,
    } = this.state;

    const filter = [
      `grayscale(${Number(grayscale)}%)`,
      `blur(${Number(blur)}px)`,
      `sepia(${Number(sepia)}%)`,
      `saturate(${Number(saturate)}%)`,
      `hue-rotate(${Number(hueRotate)}deg)`,
      `invert(${Number(invert)}%)`,
      `opacity(${Number(opacity)}%)`,
      `brightness(${Number(brightness)}%)`,
      `contrast(${Number(contrast)}%)`,
      `drop-shadow(${Number(dropOffX)}px ${Number(dropOffY)}px ${Number(dropBlurRad)}px #${dropColor})`,
    ].join(' ')
    return (
      <div className="App">
        <Header />
        {imgUrl ? (
          <>
            <button onClick={this.reloadFile}>Reload File</button>
            <img src={imgUrl} style={{ filter }} /><br />
          </>
        ) : (
          <label
            htmlFor="upload-file"
            onDragEnter={this.onDragEnter}
            onDragOver={e => e.preventDefault()}
            onDragLeave={this.onDragLeave}
            onDrop={this.dropImage}>
            <div className={`label-${dragStatus}`}>
              {this.labelText}
            </div>
          </label>
        )}

        <input
          id="upload-file"
          type="file"
          accept="image/*"
          onChange={this.onImgChange}
          className="hidden"
        />
        <div>
          <h3>grayscale</h3>
          <input
            type='number'
            onChange={e => this.setState({ grayscale: e.target.value })}
            value={grayscale}
          />
          &nbsp;%<br />

          <h3>blur</h3>
          <input
            type='number'
            onChange={e => this.setState({ blur: e.target.value })}
            value={blur}
          />
          &nbsp;px<br />

          <h3>sepia</h3>
          <input
            type='number'
            onChange={e => this.setState({ sepia: e.target.value })}
            value={sepia}
          />
          &nbsp;%<br />

          <h3>saturate</h3>
          <input
            type='number'
            onChange={e => this.setState({ saturate: e.target.value })}
            value={saturate}
          />
          &nbsp;%<br />

          <h3>hue-rotate</h3>
          <input
            type='number'
            onChange={e => this.setState({ hueRotate: e.target.value })}
            value={hueRotate}
          />
          &nbsp;deg<br />

          <h3>invert</h3>
          <input
            type='number'
            onChange={e => this.setState({ invert: e.target.value })}
            value={invert}
          />
          &nbsp;%<br />

          <h3>opacity</h3>
          <input
            type='number'
            onChange={e => this.setState({ opacity: e.target.value })}
            value={opacity}
          />
          &nbsp;%<br />

          <h3>brightness</h3>
          <input
            type='number'
            onChange={e => this.setState({ brightness: e.target.value })}
            value={brightness}
          />
          &nbsp;%<br />

          <h3>contrast</h3>
          <input
            type='number'
            onChange={e => this.setState({ contrast: e.target.value })}
            value={contrast}
          />
          &nbsp;%<br />

          <h3>drop-shadow</h3><br />
          <span>offset-X</span>
          <input
            type='number'
            onChange={e => this.setState({ dropOffX: e.target.value })}
            value={dropOffX}
          />
          &nbsp;px<br />

          <span>offset-Y</span>
          <input
            type='number'
            onChange={e => this.setState({ dropOffY: e.target.value })}
            value={dropOffY}
          />
          &nbsp;px<br />

          <span>blur-radius</span>
          <input
            type='number'
            onChange={e => this.setState({ dropBlurRad: e.target.value })}
            value={dropBlurRad}
          />
          &nbsp;px<br />

          <span>color</span>
          #&nbsp;
          <input
            type='text'
            onChange={e => this.setState({ dropColor: e.target.value })}
            value={dropColor}
            id='color-input'
          />
        </div>
      </div>
    );
  }
}

export default App;