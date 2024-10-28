import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
          <img src="./shecodeslogo.png" alt=""></img>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <br />
            This project was coded by {" "}
            <a href="https://github.com/yasmeencardenas" target="_blank" rel="noreferrer"> Yasmeen Trisa Cardenas </a> {" "} and is {" "}
            <a
              href="https://github.com/yasmeencardenas/shecodes-react-addon-week1-dictionary-app"
              target="_blank"
              rel="noreferrer"
              className="link"
             >
            open-sourced on GitHub {" "} and {" "}
            </a> {" "}
            <a
              href="https://eloquent-meerkat-8b83f1.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
             hosted on Netlify
            </a>
        </footer>
      </div>
    </div>
  );
}
