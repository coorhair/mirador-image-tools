import Mirador from 'mirador/dist/es/src/index';
import { miradorImageToolsPlugin } from '../../src';

const config = {
  id: 'demo',
  window: {
    allowClose: false,
    defaultView: 'single', // Configure which viewing mode (e.g. single, book, gallery) for windows to be opened in
  },
  windows: [{
    imageToolsEnabled: true,
    imageToolsOpen: true,
    thumbnailNavigationPosition: 'far-right',
    manifestId: window.bhBookManifest,
  }],
  theme: {
    palette: {
      primary: {
        main: '#1967d2',
      },
    },
  },
};

Mirador.viewer(config, [
  ...miradorImageToolsPlugin,
]);
