import React from 'react';
import styles from './Logobar.module.scss'
import { ReactComponent as Logo } from '../../data/images/logo.svg';
import UnitsButton from '../UnitsButton/UnitsButton';
import UnitsList from '../UnitsList/UnitsList';
import { useState } from 'react';


const Logobar = ({units,setUnits}) =>{
    const [isListShowed, setIsListShowed] = useState(false);

    const toggleList = (currState) => {
        setIsListShowed(!currState);
    }

    return (
        <div className={styles.logobar}>
            <Logo className={styles.logo}/>
            <UnitsButton onClick={()=>{toggleList(isListShowed)}} />
            <UnitsList units={units} setUnits={setUnits} isShowed={isListShowed}/>
            
        </div>
    )
}

export default Logobar;