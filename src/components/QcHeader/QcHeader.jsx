import './QcHeader.scss';
import logo from "../../assets/img/quebec-logo.svg";
import logoMobile from "../../assets/img/quebec-logo-mobile.svg";

export const QcHeader = ({ titreTexte, titreUrl }) => {
  return (
    <header className="qc-header">
            <div className='qc-container'>   
                <div className="logo">
                    <a href="https://www.quebec.ca/" title="" target="_blank">
                        <picture>
                            <source media="(max-width:480px)" srcset={logoMobile} />
                            <img src={logo} alt="Site Web du Gouvernement du Québec."  />
                        </picture>                       
                    </a>
                    <a href={titreUrl}>{titreTexte}</a>
                </div>
            <nav>
                <ul>
                    <li><a href="#">English</a></li>
                    <li><a href="#">Nous joindre</a></li>
                </ul>
            </nav>
        </div>
    </header>
  );
};
