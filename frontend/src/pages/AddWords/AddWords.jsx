/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "./AddWords.scss";

function AddWords() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful },
  } = useForm();

  useEffect(() => {
    if (isSubmitSuccessful);
    reset();
  }, [isSubmitSuccessful, reset]);

  const onSubmit = (word) => {
    try {
      fetch(`${import.meta.env.VITE_BACKEND_URL}/api/add/word`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          word,
        }),
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <section className="addw">
      <Link className="g__link" to="/">
        <img
          className="img"
          src={`${import.meta.env.VITE_BACKEND_URL}/assets/images/addListe.svg`}
          alt="page précédente"
        />
      </Link>
      <form className="form" method="post" onSubmit={handleSubmit(onSubmit)}>
        <label className="form__lb" htmlFor="word">
          Choisi ton mot :
          <textarea
            className="form__lb__text"
            id="word"
            required
            size="10"
            rows={1}
            {...register("word")}
          />
        </label>
        <select className="form__select" {...register("type")}>
          <option value="subject">Sujet</option>
          <option value="adjective">Adjectif</option>
        </select>
        <input className="form__sub" type="submit" value="Ajouter" />
      </form>
    </section>
  );
}

export default AddWords;
