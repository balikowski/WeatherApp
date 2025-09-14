import React from 'react';
import styles from './UnitsList.module.scss'
import UnitsListOption from '../UnitsListOption/UnitsListOption';


const UnitsList = ({isShowed, units, setUnits}) =>{

    const changeUnit = (category,currUnits,isButtonImperial) => {
        let newUnits = {...currUnits};
        if(isButtonImperial === currUnits[category]){
            newUnits[category] = !currUnits[category];
            setUnits(newUnits);
        }
    }

    const setImperials = (currUnits) => {
        let newUnits = {...currUnits};
        newUnits.temperature = true;
        newUnits.windSpeed = true;
        newUnits.precipitation = true;
        setUnits(newUnits);
    }

    if(isShowed){
    return (
        <div className={styles.unitsList}>
            <UnitsListOption onClick={()=>setImperials(units)} isActive={false} value="Switch to Imperial"/>
            <h5 className={styles.category}>Temperature</h5>
            <UnitsListOption onClick={()=>changeUnit('temperature',units,false)} isActive={units.temperature} value="Celsius"/>
            <UnitsListOption onClick={()=>changeUnit('temperature',units,true)} isActive={!units.temperature} value="Fahrenheit"/>
            <h5 className={styles.category}>Wind Speed</h5>
            <UnitsListOption onClick={()=>changeUnit('windSpeed',units,false)} isActive={units.windSpeed} value="km/h"/>
            <UnitsListOption onClick={()=>changeUnit('windSpeed',units,true)} isActive={!units.windSpeed} value="mph"/>
            <h5 className={styles.category}>Precipitation</h5>
            <UnitsListOption onClick={()=>changeUnit('precipitation',units,false)} isActive={units.precipitation} value="Millimeters (mm)"/>
            <UnitsListOption onClick={()=>changeUnit('precipitation',units,true)} isActive={!units.precipitation} value="Inches (in)"/>
        </div>
    )
    }
}

export default UnitsList;