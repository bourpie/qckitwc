import {QcFormulaireRecherche} from './QcFormulaireRecherche';

export default {
  title: 'Composants/Formulaire de recherche',
  component: QcFormulaireRecherche,
  parameters: {
    layout: 'left',
  },
};

export const Entete = {
    name: 'Dans l\'Entete PIV',
    args: {
        placeholder: 'Rechercher sur ce site',
        titreUrl: 'https://www.quebec.ca/',
    },
};

export const Body = {
    name: 'Dans le corps',
    args: {
        placeholder: 'Rechercher sur ce site',
        titreUrl: 'https://www.quebec.ca/',
        style: 'body',
    },
};