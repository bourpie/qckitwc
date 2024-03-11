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
