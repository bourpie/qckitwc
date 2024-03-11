
import r2wc from "@r2wc/react-to-web-component"

import { QcHeader } from "./components/QcHeader"

const QcHeaderWc = r2wc(QcHeader, {
    props: {
        titreTexte: "string",
        titreUrl: "string",
    }
})

customElements.define("qc-piv-header", QcHeaderWc)