import React, { useState } from "react";
import "./App.css";
import BanListSection from "./components/BanListSection/BanListSection";
import InfoCard from "./components/InfoCard/InfoCard";
const API_KEY = import.meta.env.VITE_APP_API_KEY;

const App = () => {
  const [url, setUrl] = useState("");
  const [name, setName] = useState("");
  const [options, setOptions] = useState([]);
  const [bannedOptions, setBannedOptions] = useState([]);

  const makeQuery = () => {
    let query = `https://api.thedogapi.com/v1/images/search?limit=1&has_breeds=1&api_key=${API_KEY}`;
    callAPI(query).catch(console.error);
  };

  const callAPI = async (query) => {
    const response = await fetch(query);
    const json = await response.json();
    if (json && json[0].url == null) {
      alert("Oops! Something went wrong with that query, let's try again!");
    } else {
      setUrl(json[0].url);
      setName(json[0].breeds[0].name);
      setOptions([
        ...[],
        json[0].breeds[0].life_span,
        json[0].breeds[0].breed_group,
      ]);
    }
  };

  const handleShuffleClick = () => {
    makeQuery();
  };

  return (
    <div className="background-image">
      <div>
        <h1 className="title">Pawspedia 🐶</h1>
        <h2>Keeping you in the know about your furry best friend</h2>
        {url && <InfoCard name={name} options={options} image={url} />}
        <button onClick={handleShuffleClick}>🔀 Discover!</button>
      </div>
      <BanListSection bannedOptions={bannedOptions} />
    </div>
  );
};

export default App;
