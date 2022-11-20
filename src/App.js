import Navigation from "./components/Navigation";
import FavoriteListScreen from "./screens/FavoriteListScreen";
import PokemonListScreen from "./screens/PokemonListScreen";
//import { BrowserRouter } from "react-router-dom"



import { BrowserRouter, Route, Routes } from "react-router-dom"
import { FavoriteProvider } from "./components/FavoriteContext";

function App() {
 return (
    <FavoriteProvider>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<PokemonListScreen />}/>
          <Route path="/favoritos" element={<FavoriteListScreen />}/>
        </Routes>
      </BrowserRouter>
    </FavoriteProvider>
 );
}

export default App;
