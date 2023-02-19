/** @type {import('tailwindcss').Config} */

module.exports = {
  theme: {
    boxShadow: {
      100: '0px 4px 4px -1px rgba(0, 0, 0, 0.25)',
      200: '0px 8px 8px -2px rgba(0, 0, 0, 0.25)',
      300: '0px 12px 12px -3px rgba(0, 0, 0, 0.25)',
      400: '0px 16px 16px -4px rgba(0, 0, 0, 0.25)',
    },
    backdropBlur: {
      100: '2px',
      200: '4px',
      300: '6px',
      400: '8px',
      500: '10px',
    },
    blur: {
      100: '2px',
      200: '4px',
      300: '6px',
      400: '8px',
      500: '10px',
    },
    fontFamily: {
      'vespa-thai': ['Vespiario Thai', 'Vespiario Condensed Italic', 'system-ui', 'sans-serif']
    },
    fontSize: {
      /** name: [fontSize, lineHeight] */
      'title-large': ['72px', 1.4],
      'title-medium': ['60px', 1.4],
      'title-small': ['48px', 1.4],
      'title-small-alt': ['32px', 1.4],
      'body-large': ['24px', 1.4],
      body: ['16px', 1.4],
      'body-small': ['13px', 1.4],
      caption: ['11px', 1.4],
    },
    fontWeight: {
      light: '300',
      normal: '400',
      'semi-bold': '600',
      bold: '700',
    },
    spacing: {
      0: '0',
      4: '4px',
      8: '8px',
      12: '12px',
      16: '16px',
      20: '20px',
      24: '24px',
      32: '32px',
      40: '40px',
      48: '48px',
      56: '56px',
      60: '60px',
      72: '72px',
      80: '80px',
    },
    colors: {
      transparent: 'transparent',
      blue: {
        100: '#89CAE5',
        200: '#6EBEDF',
        300: '#52B1DA',
        400: '#37A5D4',
        500: '#1C99CE',
        600: '#1987B5',
        700: '#15749D',
        800: '#126284',
        900: '#0F506B',
      },
      green: {
        100: '#98CFBF',
        200: '#80C4B1',
        300: '#68B9A2',
        400: '#50AE94',
        500: '#38A385',
        600: '#318F75',
        700: '#2B7C65',
        800: '#246855',
        900: '#1D5545',
      },
      'light-green': {
        100: '#d0f5c2',
        200: '#c5f3b3',
        300: '#bbf0a5',
        400: '#b0ee97',
        500: '#A5EC89',
        600: '#91d079',
        700: '#7db368',
        800: '#6a9758',
        900: '#567b47',
      },
      yellow: {
        100: '#ffe87a',
        200: '#ffe35c',
        300: '#ffde3d',
        400: '#ffd81f',
        500: '#FFD300',
        600: '#e0ba00',
        700: '#c2a000',
        800: '#a38700',
        900: '#856e00',
      },
      dark: {
        100: '#000000',
        200: '#1f1f1f',
        300: '#3d3d3d',
        400: '#5c5c5c',
        500: '#7a7a7a',
        600: '#999999',
        700: '#b8b8b8',
        800: '#d6d6d6',
        900: '#f5f5f5',
      },
      light: {
        100: '#ffffff',
        200: '#e0e0e0',
        300: '#c2c2c2',
        400: '#a3a3a3',
        500: '#858585',
        600: '#666666',
        700: '#474747',
        800: '#292929',
        900: '#0a0a0a',
      },
      'shade-dark': {
        100: 'rgba(0, 0, 0, 0.1)',
        200: 'rgba(0, 0, 0, 0.2)',
        300: 'rgba(0, 0, 0, 0.3)',
        400: 'rgba(0, 0, 0, 0.4)',
        500: 'rgba(0, 0, 0, 0.5)',
        600: 'rgba(0, 0, 0, 0.6)',
        700: 'rgba(0, 0, 0, 0.7)',
        800: 'rgba(0, 0, 0, 0.8)',
        900: 'rgba(0, 0, 0, 0.9)',
      },
      'shade-light': {
        100: 'rgba(255, 255, 255, 0.1)',
        200: 'rgba(255, 255, 255, 0.2)',
        300: 'rgba(255, 255, 255, 0.3)',
        400: 'rgba(255, 255, 255, 0.4)',
        500: 'rgba(255, 255, 255, 0.5)',
        600: 'rgba(255, 255, 255, 0.6)',
        700: 'rgba(255, 255, 255, 0.7)',
        800: 'rgba(255, 255, 255, 0.8)',
        900: 'rgba(255, 255, 255, 0.9)',
      },
    },
    animation: {
      overlayShow: 'overlayShow 0.25s ease-in-out',
      contentShow: 'contentShow 0.25s ease-in-out',
    },
    keyframes: {
      overlayShow: {
        from: { opacity: 0 },
        to: { opacity: 1 }
      },
      contentShow: {
        from: {
          opacity: 0,
          transform: 'translate(-50%, -48%) scale(0.96)'
        },
        to: {
          opacity: 1,
          transform: 'translate(-50%, -50%) scale(1)'
        }
      }
    }
  }
}