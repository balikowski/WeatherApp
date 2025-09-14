import React from 'react';
import styles from './Logobar.module.scss'
import { ReactComponent as Logo } from '../../data/images/logo.svg';
import UnitsButton from '../UnitsButton/UnitsButton';
import UnitsList from '../UnitsList/UnitsList';
import { useState } from 'react';


const Logobar = () =>{
    const [isListShowed, setIsListShowed] = useState(false);

    const toggleList = (currState) => {
        setIsListShowed(!currState);
    }

    const test = () =>{
        console.log("test");
    }
    return (
        <div className={styles.logobar}>
            <Logo className={styles.logo}/>
            <UnitsButton onClick={()=>{toggleList(isListShowed)}} />
            <UnitsList isShowed={isListShowed}/>
        </div>
    )
}

export default Logobar;