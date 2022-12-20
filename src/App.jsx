
import './App.scss';
import Tariff from './components/Tariff';


const tariffs = [
  { price: "300", speed: "10", color: "blue" },
  { price: "450", speed: "50", color: "green" },
  { price: "550", speed: "100", color: "red", isActive: true },
  { price: "1000", speed: "200", color: "black" }
];

function App() {
    return (
      <div className="App">
        {tariffs.map((tariff) => {
        return <Tariff price={tariff.price} speed={tariff.speed} color={tariff.color} isActive={tariff.isActive}/>
        })}
      </div>
  );
}

export default App;



