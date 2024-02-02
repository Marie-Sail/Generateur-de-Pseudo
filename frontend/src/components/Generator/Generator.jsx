import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Patatas from "../Patatas/Patatas";
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
      <Patatas className="patatasss" />
      <section className="g__pseu">
        <h1 className="g__title">Génère ton pseudo :</h1>

        {newPseudo ? (
          <div className="g__pseudo">
            <p className="g__pseudo__new">{newPseudo}</p>
            <button
              className="g__pseudo__add"
              type="button"
              onClick={() => addList(newPseudo)}
            >
              <img
                className="g__pseudo__add__img"
                src={`${
                  import.meta.env.VITE_BACKEND_URL
                }/assets/images/addListe.svg`}
                alt="ajoute à la liste"
              />
            </button>
            <button
              className="g__pseudo__alea"
              type="button"
              onClick={randomPseudo}
            >
              <img
                className="g__pseudo__alea__img"
                src={`${
                  import.meta.env.VITE_BACKEND_URL
                }/assets/images/alea.svg`}
                alt="générer un pseudo"
              />
            </button>
          </div>
        ) : (
          <button
            className="g__pseudo__alea1"
            type="button"
            onClick={randomPseudo}
          >
            <img
              className="g__pseudo__alea__img"
              src={`${import.meta.env.VITE_BACKEND_URL}/assets/images/alea.svg`}
              alt="générer un pseudo"
            />
          </button>
        )}
      </section>
      {/* <Patatas className="patatasss" /> */}
      {list.length !== 0 ? (
        <>
          <ul className="g__list">
            {list.map((newPs) => (
              <li className="g__list__element" key={newPs.id}>
                <img
                  className="g__list__element__point"
                  src={`${
                    import.meta.env.VITE_BACKEND_URL
                  }/assets/images/point.svg`}
                  alt="point"
                />{" "}
                <p className="g__list__element__para">{newPs.name}</p>{" "}
                <button
                  className="g__list__element__delet"
                  type="button"
                  onClick={() => {
                    setList(list.filter((badPs) => badPs.id !== newPs.id));
                  }}
                >
                  <img
                    className="g__list__element__delet__img"
                    src={`${
                      import.meta.env.VITE_BACKEND_URL
                    }/assets/images/delet.svg`}
                    alt="supprimé de la liste"
                  />
                </button>
              </li>
            ))}
          </ul>

          <Link className="g__link" to="/add">
            <img
              className=""
              src={`${import.meta.env.VITE_BACKEND_URL}/assets/images/plus.svg`}
              alt="supprimé de la liste"
            />
          </Link>
        </>
      ) : (
        ""
      )}
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
