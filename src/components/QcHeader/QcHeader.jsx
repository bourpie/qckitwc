import './QcHeader.css';
import logo from "../../assets/img/quebec-logo.svg";

export const QcHeader = ({ titreTexte, titreUrl }) => {
  return (
    <header className="qc-header">
            <div className='qc-container'>   
            <div className="logo">
                <img src={logo} className="logo" alt="Quebec logo" />
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
