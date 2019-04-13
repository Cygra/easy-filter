export interface Filters {
  grayscale?: string
  blur?: string
  sepia?: string
  saturate?: string
  hueRotate?: string
  invert?: string
  opacity?: string
  brightness?: string
  contrast?: string
  dropOffX?: string
  dropOffY?: string
  dropBlurRad?: string
  dropColor?: string
}

export const filters: { [k: string]: Filters } = {
  Brooklyn: {
    sepia: '0.25',
    contrast: '1.25',
    brightness: '1.25',
    hueRotate: '5',
  },
  LoFi: {
    brightness: '1.5',
    contrast: '0.99',
    grayscale: '0.6',
    invert: '0.23',
    sepia: '0.20',
  },
  'LoFi-2': {
    saturate: '1.1',
    contrast: '1.5',
  },
  Moon: {
    brightness: '1.4',
    contrast: '0.95',
    saturate: '0',
    sepia: '0.35',
  },
  Silver: {
    saturate: '0',
    invert: '0.2',
    brightness: '1.9',
    contrast: '1.6',
  },
}
