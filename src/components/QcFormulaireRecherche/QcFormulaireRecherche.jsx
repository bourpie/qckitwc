import './QcFormulaireRecherche.scss'
import loupeFoncee from "../../assets/img/loupe-piv-fonce.svg";
import loupe from "../../assets/img/loupe-piv-droite.svg";

import PropTypes from 'prop-types';

export const QcFormulaireRecherche = ({formAction, placeholder, style,...props}) => {
    return (
        <form className={['container qc-container qc-form-recherche', `qc-form-recherche--${style}`].join(' ')} action={formAction}>
            <div className='input-group'>
                <label className='visually-hidden' htmlFor="recherchePiv">Rechercher</label>
                <input id="recherchePiv" className='form-control rounded-0  border-end-0' type="text" placeholder={placeholder} name="tx_solr[q]" />
                <span class="input-group-btn">
                    <button type="submit" aria-label="Bouton pour ouvrir la recherche." class="btn btn-link rounded-0">
                        <img src={style === 'body' ? loupe : loupeFoncee} width="24" height="24" alt="" />
                    </button>
                </span>
            </div>
        </form>
    )
}


QcFormulaireRecherche.propTypes = {
    /**
     * Placeholder
     */
    placeholder: PropTypes.string,
    /**
     * action
     */
    formAction: PropTypes.string,      
    /**
     * Style
     */
    style: PropTypes.oneOf(['piv', 'body']),   

};
  
QcFormulaireRecherche.defaultProps = {
    placeholder: 'Rechercher sur ce site',
    formAction: '/',
    style: 'piv',
};