import React from 'react';
import styles from './UnitsListOption.module.scss'
import { ReactComponent as CheckMark} from '../../data/images/icon-checkmark.svg';



const UnitsListOption = ({isActive, value, onClick}) =>{
    if(isActive){
        return (
        <div onClick={onClick} className={`${styles.unitsListOption} ${styles.active}`}>
           <span>{value}</span> <CheckMark />
        </div>
    )
    } else{
        return (
        <div onClick={onClick} className={styles.unitsListOption}>
           <span>{value}</span>
        </div>
    )
    }
    
}

export default UnitsListOption;