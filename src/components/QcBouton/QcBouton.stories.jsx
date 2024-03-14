import { QcBouton } from './QcBouton';

export default {
  title: 'Composants/Bouton',
  component: QcBouton,
  parameters: {
    layout: 'centered',
  },
};

export const Primary = {
  name: 'Bouton',
  args: {
    label: 'Mon bouton',
    style: 'primary',
  }
};