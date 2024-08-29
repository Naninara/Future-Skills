import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import SearchComponent from "./components/SearchComponent";
import Cards from "./components/Cards";

function App() {
  return (
    <div>
      <Navbar />
      <SearchComponent />
      <Cards />
    </div>
  );
}

export default App;
