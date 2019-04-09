import React, { Component, ChangeEvent } from 'react';
import './App.css';

interface Props {

}

interface State {
  imgUrl: string;
}

class App extends Component<Props, State> {
  reader: FileReader;
  constructor(props: Props) {
    super(props);
    this.state = {
      imgUrl: '',
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
    const { imgUrl } = this.state;
    return (
      <div className="App">
        <input type='file' accept="image/*" onChange={this.onImgChange} />
        {imgUrl && <img src={imgUrl} />}
      </div>
    );
  }
}

export default App;
