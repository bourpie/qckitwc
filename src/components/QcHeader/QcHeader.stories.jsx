import { QcHeader } from './QcHeader';

export default {
  title: 'Entete',
  component: QcHeader,
  parameters: {
    layout: 'left',
  },
  tags: ['autodocs'],
};

export const Primary = {
  args: {
    titreTexte: 'Gouvernement du Québec',
    titreUrl: 'https://www.quebec.ca/',
  },
};

export const Secondary = {
  args: {
    titreTexte: 'Ministère de l\'environnement, de la Lutte contre les changements climatiques, de la Faune et des Parcs',
    titreUrl: 'https://www.quebec.ca/',
    primary: false,
  },
};
