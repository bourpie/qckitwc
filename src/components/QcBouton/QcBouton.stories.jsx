import { QcBouton } from './QcBouton';

export default {
  title: 'Composants/Bouton',
  component: QcBouton,
  parameters: {
    layout: 'centered',
  },
};

export const Primary = {
  name: 'Primaire',
  args: {
    label: 'Primaire',
    style: 'primary',
  }
};

export const Secondaire = {
  name: 'Secondaire',
  args: {
    label: 'Secondaire',
    style: 'secondary',
  }
};

export const Tertiaire = {
  name: 'Tertiaire',
  args: {
    label: 'Tertiaire',
    style: 'outline-primary',
  }
};

export const Avertissement = {
  name: 'Avertissement',
  args: {
    label: 'Avertissement',
    style: 'danger',
  }
};