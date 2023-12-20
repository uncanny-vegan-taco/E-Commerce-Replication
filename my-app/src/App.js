import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./Navigation";
import Slideshow from "./Slideshow";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
        <Slideshow />
      </header>
    </div>
  );
}

export default App;
