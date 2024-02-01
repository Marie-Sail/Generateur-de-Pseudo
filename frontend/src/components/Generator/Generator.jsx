import { useState } from "react";
import PropTypes from "prop-types";
import "./Generator.scss";

function Generator({ subjects, adjectives }) {
  const [newPseudo, setNewPseudo] = useState();
  const [list, setList] = useState([]);
  const [numberStep, setNumberStep] = useState(1);

  function RandArray(array) {
    const rand = Math.floor(Math.random() * array.length);
    const randValue = array[rand];
    return randValue;
  }

  const subject = RandArray(subjects);
  const adjective = RandArray(adjectives);
  const pseudo = `${subject.word} ${adjective.word}`;

  function randomPseudo() {
    setNewPseudo(pseudo);
  }

  function addList(Npseudo) {
    setNumberStep(numberStep + 1);
    const pseudoObj = { id: numberStep, name: Npseudo };
    setList([...list, pseudoObj]);
  }

  return (
    <article className="generator">
      <section className="g__pseudo">
        <h1 className="g__title">Génère ton pseudo:</h1>
        {newPseudo && (
          <>
            <p className="g__pseudo__new">{newPseudo}</p>
            <button
              className="g__pseudo__add"
              type="button"
              onClick={() => addList(newPseudo)}
            >
              liste
            </button>
          </>
        )}
        <button
          className="g__pseudo__alea"
          type="button"
          onClick={randomPseudo}
        >
          alea
        </button>
      </section>
      <ul className="g__list">
        {list &&
          list.map((newPs) => (
            <li className="g__list__element" key={newPs.id}>
              {newPs.name}{" "}
              <button
                className="g__list__element__delet"
                type="button"
                onClick={() => {
                  setList(list.filter((badPs) => badPs.id !== newPs.id));
                }}
              >
                X
              </button>
            </li>
          ))}
      </ul>
    </article>
  );
}
Generator.propTypes = {
  subjects: PropTypes.shape({
    id: PropTypes.number.isRequired,
    word: PropTypes.string.isRequired,
  }).isRequired,
  adjectives: PropTypes.shape({
    id: PropTypes.number.isRequired,
    word: PropTypes.string.isRequired,
  }).isRequired,
};

export default Generator;
