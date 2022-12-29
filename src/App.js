import { Route, Routes } from "react-router-dom";
import './App.css';
import HomeComponent from "./pages";
import SingleCocktail from "./pages/SingleCocktail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeComponent />}></Route>
        <Route path="/cocktail/:id" element={<SingleCocktail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
