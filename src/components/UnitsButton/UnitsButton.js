import React from 'react';
import styles from './UnitsButton.module.scss'
import { ReactComponent as Units} from '../../data/images/icon-units.svg';
import { ReactComponent as Dropdown } from '../../data/images/icon-dropdown.svg';


const UnitsButton = (props) =>{
    return (
        <div {...props} className={styles.unitsButton}>
            <Units />
            Units
            <Dropdown />
        </div>
    )
}

export default UnitsButton;