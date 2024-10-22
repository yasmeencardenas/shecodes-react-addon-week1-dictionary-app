import React from "react";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfspeech}</h3>
      <p>{props.meaning.definitions[0].definition}</p>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              {definition.definition}
              <br />
              <em>{definition.example}</em>
              {definition.example}
            </p>
          </div>
        );
      })}
    </div>
  );
}
