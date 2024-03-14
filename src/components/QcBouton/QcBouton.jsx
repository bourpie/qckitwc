import React from 'react';
import PropTypes from 'prop-types';

import Button from 'react-bootstrap/Button';

import './QcBouton.scss'

export const QcBouton = ({label, style, ...props}) => {
    return (
        <Button variant={style} className={['qc-bouton rounded-0', `btn--${style}`].join(' ')}>
            {label}
        </Button>
    )
}

QcBouton.propTypes = {
    /**
     * Libellé
     */
    label: PropTypes.string,
    /**
     * Style
     */
    style: PropTypes.oneOf(['primary', 'secondary', 'success', 'warning', 'danger', 'info']),      

};
  
QcBouton.defaultProps = {
    label: 'Mon bouton',
    style: 'secondary',
};