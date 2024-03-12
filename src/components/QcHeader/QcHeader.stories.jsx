import { QcHeader } from './QcHeader';

export default {
  title: 'Composants/Bandeau d\'entête',
  component: QcHeader,
  parameters: {
    layout: 'left',
  },
};

export const Primary = {
  name: 'Entete par défaut',
  args: {
    titreTexte: 'Gouvernement du Québec',
    titreUrl: 'https://www.quebec.ca/',
  },
  parameters: {
    design: {
      type: "figspec",
      url: "https://www.figma.com/file/4qwskmxOzMNgvtHQq6nFNV/SOQUIJ---Guide-de-style-Web?type=design&node-id=1%3A5352&mode=design&t=nL3F0HAoYnk69OvQ-1",
      accessToken: import.meta.env.VITE_STORYBOOK_FIGMA_ACCESS_TOKEN
    },
  },
};

export const LongTitre = {
  name: 'Avec un titre long',
  args: {
    titreTexte: 'Ministère de l\'environnement, de la Lutte contre les changements climatiques, de la Faune et des Parcs',
    titreUrl: 'https://www.quebec.ca/',
  },
};

export const RechercheActive = {
  name: 'Recherche activée',
  args: {
    titreTexte: 'JuridiQc',
    titreUrl: 'https://juridiqc.gouv.qc.ca/',
    recherche: true,
    placeholder: 'Rechercher',
    formAction: '/',
  },
};
