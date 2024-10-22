import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
          <img src="./shecodeslogo.png"></img>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>Coded by Yasmeen Trisa Cardenas</small>
        </footer>
      </div>
    </div>
  );
}
