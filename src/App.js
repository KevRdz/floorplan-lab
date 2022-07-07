import './App.css';
import Kitchen from './Kitchen';
import LivingRoom from './LivingRoom';
import Bedroom from './Bedroom';
import Bath from './Bath';

function App() {
  return (
    <div>
      <Kitchen />
      <Bedroom bedNum={1}/>
      <LivingRoom/>
      <Bedroom bedNum={3}/>
      <Bath />
      <Bedroom bedNum={2}/>
    </div>
  )
}

export default App;
