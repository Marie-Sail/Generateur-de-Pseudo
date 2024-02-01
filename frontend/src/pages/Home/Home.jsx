import { useEffect, useState } from "react";
import Generator from "../../components/Generator/Generator";
import "./Home.scss";

function Home() {
  const [subjects, setSubjects] = useState();
  const [adjectives, setAdjectives] = useState();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/word/subject`)
      .then((response) => response.json())
      .then((data) => setSubjects(data))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/word/adjective`)
      .then((response) => response.json())
      .then((data) => setAdjectives(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <main className="theGenerator">
      {
        (subjects,
        adjectives && <Generator subjects={subjects} adjectives={adjectives} />)
      }
    </main>
  );
}

export default Home;
