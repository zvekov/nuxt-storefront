module.exports = {
  mode: 'jit',
  darkMode: 'class',
  plugins: [require('tailwindcss-filters')],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    layers: ['utilities'],
    content: ['./src/**/*.html', './src/**/*.vue', './src/**/*.jsx'],
    options: {
      defaultExtractor: (content) => content.match(/[\w-/:%]+(?<!:)/g) || [],
      safelist: [],
    },
  },
  prefix: '',
  important: false,
  separator: ':',
  theme: {
    boxShadow: {
      xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      default:
        '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
      focus: '0 0 0 3px rgba(66, 153, 225, 0.5)',
      none: 'none',
      pressDefault: '0 2px 43px -4px rgba(0,0,0,.19)',
      pressHover: '0 2px 5px rgba(0,0,0,.1),0 1px 2px rgba(0,0,0,.05)',
    },
    cursor: {
      auto: 'auto',
      default: 'default',
      pointer: 'pointer',
      wait: 'wait',
      text: 'text',
      move: 'move',
      'not-allowed': 'not-allowed',
      crosshair: 'crosshair',
      grab: 'grab',
      'zoom-in': 'zoom-in',
    },
    screens: {
      xxs: '360px',
      xs: '400px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1560px',
      landscape: { raw: '(orientation: landscape)' },
    },
    fontSize: {
      sm: '0.625rem',
      xs: '0.703125rem',
      code: '0.9rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.6rem',
      '2xl': '1.8rem',
    },
    zIndex: {
      0: 0,
      10: 10,
      20: 20,
      30: 30,
      40: 40,
      50: 50,
      60: 60,
      70: 70,
      80: 80,
      90: 90,
      auto: 'auto',
    },
    opacity: {
      0: '0',
      10: '0.1',
      20: '0.2',
      30: '0.3',
      40: '0.4',
      50: '0.5',
      60: '0.6',
      70: '0.7',
      80: '0.8',
      90: '0.9',
      100: '1',
    },
    fontFamily: {
      body: ['"Nunito", sans-serif'],
      monospace: [
        'SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace',
      ],
    },
    filter: {
      none: 'none',
      grayscale: 'grayscale(1)',
      invert: 'invert(1)',
      sepia: 'sepia(1)',
    },
    strokeWidth: {
      0: '0',
      50: '0.5',
      100: '1',
      200: '2',
    },
  },
  variants: {
    backgroundColor: [
      'hover',
      'group-hover',
      'first',
      'even',
      'odd',
      'last',
      'dark',
      'dark-hover',
      'dark-group-hover',
      'dark-first',
      'dark-even',
      'dark-odd',
      'dark-last',
    ],
    filter: ['responsive', 'hover', 'dark'],
    backdropFilter: ['responsive', 'hover', 'focus', 'dark'],
    backdropBlur: ['responsive', 'hover', 'focus', 'dark'],
    borderColor: [
      'focus',
      'focus-within',
      'dark',
      'dark-focus',
      'dark-focus-within',
    ],
    textColor: [
      'responsive',
      'hover',
      'active',
      'focus',
      'group-hover',
      'dark',
      'dark-hover',
      'dark-active',
      'dark-focus',
      'dark-group-hover',
    ],
    translate: [
      'responsive',
      'hover',
      'focus',
      'active',
      'group-hover',
      'motion-safe',
      'motion-reduce',
    ],
  },
}
