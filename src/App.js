import './App.css';
import Navbar from './Components/Navbar';
import RoomSelector from './Components/RoomSelector';
import { roomsData } from './Data/roomData';

function App() {
  return (
    <>
      <Navbar />
      <RoomSelector roomsData={roomsData} />
    </>
  );
}

export default App;
