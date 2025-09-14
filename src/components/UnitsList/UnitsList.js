import React from 'react';
import styles from './UnitsList.module.scss'
import UnitsListOption from '../UnitsListOption/UnitsListOption';


const UnitsList = ({isShowed}) =>{
    if(isShowed){
    return (
        <div className={styles.unitsList}>
            <UnitsListOption isActive={false} value="Switch to Imperial"/>
            <h5 className={styles.category}>Temperature</h5>
            <UnitsListOption isActive={true} value="Celsius"/>
            <UnitsListOption isActive={false} value="Fahrenheit"/>
            <h5 className={styles.category}>Wind Speed</h5>
            <UnitsListOption isActive={true} value="km/h"/>
            <UnitsListOption isActive={false} value="mph"/>
            <h5 className={styles.category}>Precipitation</h5>
            <UnitsListOption isActive={true} value="Millimeters (mm)"/>
            <UnitsListOption isActive={false} value="Inches (in)"/>
        </div>
    )
    }
}

export default UnitsList;