
import r2wc from "@r2wc/react-to-web-component"

import { QcPivHeader } from "./components/QcPivHeader"

const QcPivHeaderWc = r2wc(QcPivHeader, {
    props: {
        titreTexte: "string",
        titreUrl: "string",
        recherche: "boolean"
    }
})

customElements.define("qc-piv-header", QcPivHeaderWc)