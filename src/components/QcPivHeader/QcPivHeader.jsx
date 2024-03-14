import { useState } from 'react';
import PropTypes from 'prop-types';
import './QcPivHeader.scss';
import {QcFormulaireRecherche} from '../QcFormulaireRecherche/QcFormulaireRecherche';
import logo from "../../assets/img/quebec-logo.svg";
import logoMobile from "../../assets/img/quebec-logo-mobile.svg";
import loupe from "../../assets/img/loupe-piv-droite.svg";

export const QcPivHeader = ({ titreTexte, titreUrl, recherche, placeholder, formAction, ...props }) => {
    const [toggleRecherche, setToggleRecherche] = useState(false);

    function toggleRechercheHandler() {
        setToggleRecherche(!toggleRecherche);  
    }
    return (
        <header className="qc-header">
            <div className='qc-header-container qc-container '>   
                <div className="logo">
                    <a href="https://www.quebec.ca/" title="" target="_blank">
                        <picture>
                            <source media="(max-width:480px)" srcSet={logoMobile} />
                            <img src={logo} alt="Site Web du Gouvernement du Québec."  />
                        </picture>                       
                    </a>
                    <a className='titre-site' href={titreUrl}>{titreTexte}</a>
                </div>
                <nav>
                    { recherche && 
                        <button onClick={toggleRechercheHandler} className="btn-loupe-recherche" aria-label="Bouton pour ouvrir la recherche">
                            <img src={loupe} width="24" height="24" alt="Loupe" />
                        </button>           
                    }
                    <ul>
                        <li><a href="#">English</a></li>
                        <li><a href="#">Nous joindre</a></li>
                    </ul>
                </nav>
            </div>
            { recherche && toggleRecherche &&
                
                <QcFormulaireRecherche formAction={formAction} placeholder={placeholder} />
            }
        </header>
    );
};

QcPivHeader.propTypes = {
    /**
     * La recherche est-elle activé ?
     */
    recherche: PropTypes.bool,
    /**
     * Titre du site
     */ 
    titreTexte: PropTypes.string.isRequired,
    /**
     * URL du site
    */
    titreUrl: PropTypes.string.isRequired,    
    /**
     * Texte du placeholder
     */
    placeholder: PropTypes.string,
    /**
     * URL de l'action du formulaire de recherche
     */
    formAction: PropTypes.string,       

  };
  
  QcPivHeader.defaultProps = {
    recherche: false,
    titreTexte: 'Gouvernement du Québec',
    titreUrl: 'https://www.quebec.ca/',
    placeholder: 'Rechercher sur le site',
  };
  
