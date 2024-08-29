import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import SearchComponent from "./components/SearchComponent";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <SearchComponent />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
