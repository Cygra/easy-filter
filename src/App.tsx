import React, { Component, ChangeEvent } from 'react';
import './App.css';

interface Props {

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
      dropShadow: [0, 0, 0, '#000']
    };
    this.reader = new FileReader();
    this.reader.onload = () => this.setState({
      imgUrl: String(this.reader.result),
    })
  }

  onImgChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const files: FileList | null = e.target.files;
    files && this.reader!.readAsDataURL(files[0]);
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
    const [ offX, offY, blurRad, color ] = dropShadow;
    console.log(color)
    return (
      <div className="App">
        <label htmlFor="upload-file">
          Click here to upload!
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
