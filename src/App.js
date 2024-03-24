import "./App.css";
import CardContainer from "./components/CardContainer";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <CardContainer />
      </header>
    </div>
  );
}

export default App;
