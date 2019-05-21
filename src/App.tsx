import React, { ChangeEvent, Component, DragEvent } from 'react'
import './App.scss'
import { Header } from './components/Header'
import { Filters, filters } from './constants/filters'

import 'react-dat-gui/build/react-dat-gui.css'
import DatGui, {
  DatNumber,
  DatFolder,
  // DatColor,
  DatString,
} from 'react-dat-gui'

enum FileStatus {
  DRAG_ENTER,
  NULL,
}

interface State {
  imgUrl: string
  dragStatus: FileStatus
  selectedExample: string
  filters: Filters
}

const defaultFilters: Filters = {
  grayscale: '0',
  blur: '0',
  sepia: '0',
  saturate: '1',
  hueRotate: '0',
  invert: '0',
  opacity: '1',
  brightness: '1',
  contrast: '1',
  dropOffX: '0',
  dropOffY: '0',
  dropBlurRad: '0',
  dropColor: '#000',
}

class App extends Component<{}, State> {
  reader: FileReader
  constructor(props: {}) {
    super(props)
    this.state = {
      imgUrl: '',
      dragStatus: FileStatus.NULL,
      selectedExample: '',
      filters: {
        ...defaultFilters,
      },
    }
    this.reader = new FileReader()
    this.reader.onload = () => {
      this.setState({
        imgUrl: String(this.reader.result),
      })
    }
  }

  onImgChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const files: FileList | null = e.target.files
    this.handleFile(files)
  }

  onDragEnter = (e: DragEvent<HTMLLabelElement>): void => {
    e.preventDefault()
    this.setState({ dragStatus: FileStatus.DRAG_ENTER })
  }

  onDragOver = (e: DragEvent<HTMLLabelElement>): void => {
    e.preventDefault()
  }

  onDragLeave = () => {
    !this.state.imgUrl && this.setState({ dragStatus: FileStatus.NULL })
  }

  dropImage = (e: DragEvent<HTMLLabelElement>): void => {
    e.preventDefault()
    const files: FileList | null = e.dataTransfer.files
    this.handleFile(files)
  }

  handleFile = (files: FileList | null): void => {
    files && this.reader!.readAsDataURL(files[0])
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

  resetFilters = () => {
    this.setState({
      selectedExample: '',
      filters: {
        ...defaultFilters,
      },
    })
  }

  setExampleFilter = (i: ChangeEvent<HTMLSelectElement>): void => {
    this.setState({
      selectedExample: i.target.value,
      filters: {
        ...defaultFilters,
        ...filters[i.target.value],
      },
    })
  }

  get labelText(): string {
    switch (this.state.dragStatus) {
      case FileStatus.DRAG_ENTER:
        return 'Drop to load image!'
      case FileStatus.NULL:
      default:
        return 'Drop or click to load image!'
    }
  }

  handleUpdate = (filters: any) => this.setState({ filters })

  render() {
    const {
      imgUrl,
      filters,
      filters: {
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
      },
      dragStatus,
      selectedExample,
    } = this.state

    const filter = [
      `grayscale(${grayscale})`,
      `blur(${blur}px)`,
      `sepia(${sepia})`,
      `saturate(${saturate})`,
      `hue-rotate(${hueRotate}deg)`,
      `invert(${invert})`,
      `opacity(${opacity})`,
      `brightness(${brightness})`,
      `contrast(${contrast})`,
      `drop-shadow(${dropOffX}px ${dropOffY}px ${dropBlurRad}px ${dropColor})`,
    ].join(' ')
    return (
      <div className="App">
        <DatGui data={filters} onUpdate={this.handleUpdate}>
          <DatNumber path="grayscale" label="grayscale" min={0} max={1} step={0.1} />
          <DatNumber path="blur" label="blur" min={0} max={1} step={0.1} />
          <DatNumber path="sepia" label="sepia" min={0} max={1} step={0.1} />
          <DatNumber path="saturate" label="saturate" min={0} max={1} step={0.1} />
          <DatNumber path="hue-rotate" label="hue-rotate" min={0} max={1} step={0.1} />
          <DatNumber path="invert" label="invert" min={0} max={1} step={0.1} />
          <DatNumber path="opacity" label="opacity" min={0} max={1} step={0.1} />
          <DatNumber path="brightness" label="brightness" min={0} max={1} step={0.1} />
          <DatNumber path="contrast" label="contrast" min={0} max={1} step={0.1} />
          <DatFolder title="drop-shadow" closed={false}>
            <DatNumber path="dropOffX" label="x" min={0} max={100} step={1} />
            <DatNumber path="dropOffY" label="y" min={0} max={100} step={1} />
            <DatNumber path="dropBlurRad" label="radius" min={0} max={10} step={0.1} />
            <DatString path="dropColor" label="color" />
            {/* <DatColor path="dropColor" label="color" /> */}
          </DatFolder>
        </DatGui>
        <Header />
        {imgUrl ? (
          <>
            <img src={imgUrl} style={{ filter }} />
            <br />
            <div className="btn-row">
              <button onClick={this.reloadFile}>Reload Image</button>
              <button onClick={this.resetFilters}>Reset Filters</button>
            </div>
          </>
        ) : (
          <label
            htmlFor="upload-file"
            onDragEnter={this.onDragEnter}
            onDragOver={e => e.preventDefault()}
            onDragLeave={this.onDragLeave}
            onDrop={this.dropImage}
          >
            <div className={`label-${dragStatus}`}>{this.labelText}</div>
          </label>
        )}

        <input
          id="upload-file"
          type="file"
          accept="image/*"
          onChange={this.onImgChange}
          className="hidden"
        />

        <div className="filters-container">
          <div>
            <h2>Examples</h2>
            <select onChange={this.setExampleFilter} value={selectedExample}>
              <option value={''}>Default</option>
              {Object.keys(filters).map(i => (
                <option value={i} key={i}>
                  {i}
                </option>
              ))}
            </select>
            <code>filter: {filter};</code>
          </div>
        </div>
      </div>
    )
  }
}

export default App
