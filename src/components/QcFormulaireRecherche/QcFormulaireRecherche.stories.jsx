import {QcFormulaireRecherche} from './QcFormulaireRecherche';

export default {
  title: 'Composants/Barre de recherche',
  component: QcFormulaireRecherche,
  parameters: {
    layout: 'left',
  },
};

export const Primary = {
    name: 'Barre de recherche',
    args: {
        placeholder: 'Rechercher sur ce site',
        formAction: 'https://www.quebec.ca/',
        style: 'body',
    },
    decorators: [
      (Story) => (
          <div style={{
            backgroundColor: '#f2f1f1',
            padding: '1rem 3rem 0'
          }}>
              <Story />
          </div>
      )
  ]
};

export const Entete = {
    name: 'Dans l\'Entete PIV',
    args: {
        placeholder: 'Rechercher sur ce site',
        formAction: 'https://www.quebec.ca/',
        style: 'piv',
    },
    decorators: [
      (Story) => (
          <div style={{
            backgroundColor: '#095797',
            padding: '1rem 3rem 0'
          }}>
              <Story />
          </div>
      )
  ]
};