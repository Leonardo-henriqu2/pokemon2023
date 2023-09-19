import { searchPokemon } from "./api";
import './App.css';
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';
function App() {

  const onSearchHandler = (pokemon) => {
    console.log("search")
  }
  return (
    <div>
      <Navbar/>
      <Searchbar
      onSearch={onSearchHandler}
      />
        <div className="App"></div>
    </div>
  
      
    
  );
}

export default App;
