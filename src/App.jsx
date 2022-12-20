
import './App.scss';
import Tariff from './components/Tariff';
import { useState } from 'react';


const tariffs = [
  { price: "300", speed: "10", color: "blue", id: 1 },
  { price: "450", speed: "50", color: "green", id: 2 },
  { price: "550", speed: "100", color: "red", id: 3 },
  { price: "1000", speed: "200", color: "black", id: 4 }
];

function App() {
  const [activeTariffId, setActiveTariffId] = useState(0);
  
    return (
      <div className="App">
        {tariffs.map((tariff) => {
          
        return <Tariff 
        key={tariff.id}
        price={tariff.price} 
        speed={tariff.speed} 
        color={tariff.color} 
        id={tariff.id}
        isActive={activeTariffId === tariff.id} 
        onCardClick={(id)=> {
          if (id === activeTariffId) {
            id = 0;
          }
          setActiveTariffId(id);
        }}/>
        })}
      </div>
  );
}

export default App;



