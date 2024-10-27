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
            This project was coded by Yasmeen Trisa Cardenas and is open-sourced
            on{" "}
            <a
              href="https://github.com/yasmeencardenas/shecodes-react-addon-week1-dictionary-app"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              {" "}
              GitHub and hosted on {" "}
            </a>{" "}
            <a
              href="https://eloquent-meerkat-8b83f1.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              Netlify
            </a>
        </footer>
      </div>
    </div>
  );
}
