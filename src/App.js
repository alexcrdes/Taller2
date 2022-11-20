import Navigation from "./components/Navigation";
import FavoriteListScreen from "./screens/FavoriteListScreen";
import PokemonListScreen from "./screens/PokemonListScreen";
//import { BrowserRouter } from "react-router-dom"



import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
 return (
   <BrowserRouter>
     <Navigation />
     <Routes>
       <Route path="/" element={<PokemonListScreen />}/>
       <Route path="/favoritos" element={<FavoriteListScreen />}/>
     </Routes>
   </BrowserRouter>
 );
}

export default App;
