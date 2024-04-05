
import r2wc from "@r2wc/react-to-web-component"

import { QcPivHeader } from "./components/QcPivHeader"
import { QcFormulaireRecherche } from "./components/QcFormulaireRecherche"
import { QcBouton } from "./components/QcBouton"

const QcPivHeaderWc = r2wc(QcPivHeader, {
    props: {
        titreTexte: "string",
        titreUrl: "string",
        recherche: "boolean",
        placeholder: "string",
        formAction: "string",
        style: "string"
    }
})
const QcFormulaireRechercheWc = r2wc(QcFormulaireRecherche, {
    props: {
        placeholder: "string",
        formAction: "string",
        style: "string"
    }
})

const QcBoutonWc = r2wc(QcBouton, {
    props: {
        label: "string",
        style: "string"
    }
})

customElements.define("qc-piv-header", QcPivHeaderWc)
customElements.define("qc-formulaire-recherche", QcFormulaireRechercheWc)
customElements.define("qc-bouton", QcBoutonWc)