import React from "react";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfspeech}</h3>
      <p>{props.meaning.definitions[0].definiition}</p>
      <p>{props.meaning.definitions[0].example}</p>
    </div>
  );
}
