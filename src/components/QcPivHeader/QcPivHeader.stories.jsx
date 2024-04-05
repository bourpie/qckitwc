import { QcPivHeader } from './QcPivHeader';

export default {
  title: 'Modèles/Bandeau d\'entête du PIV',
  component: QcPivHeader,
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
      type: "figma",
      url: "https://www.figma.com/file/ThVIuWJsRyRlRARBDzLaed/Untitled?type=design&node-id=1-104&mode=design&t=RAG0GI1AR2ttIpvh-0",
      accessToken: import.meta.env.VITE_STORYBOOK_FIGMA_ACCESS_TOKEN
    },
  },
};

/**
 * La recherche s'active en ajoutant l'attribut `recherche` au composant. 
 */
export const RechercheActive = {
  name: 'Activation de la recherche',
  args: {
    titreTexte: 'JuridiQc',
    titreUrl: 'https://juridiqc.gouv.qc.ca/',
    recherche: true,
    placeholder: 'Rechercher',
    formAction: '/',
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/ThVIuWJsRyRlRARBDzLaed/Untitled?type=design&node-id=1-104&mode=design&t=RAG0GI1AR2ttIpvh-0",
      accessToken: import.meta.env.VITE_STORYBOOK_FIGMA_ACCESS_TOKEN
    },
  },
};
