/** @type { import('@storybook/react').Preview } */

import '../src/styles/globals.scss';

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: ['Base', 'Composants', 'Modèles'],
      },
    },    
  },
};

export default preview;
