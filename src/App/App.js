import './App.css';
import Container from '../components/Container/Container';
import Logobar from '../components/Logobar/Logobar';
import { useState } from 'react';

function App() {
  const [units,setUnits] = useState({temperature: true, windSpeed: true, precipitation: true});
  // true - imperial untis



  return (
   <Container>
    <Logobar units={units} setUnits={setUnits}/>
   </Container>
   
  );
}

export default App;
