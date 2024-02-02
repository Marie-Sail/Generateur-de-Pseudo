import "./Patatas.scss";

function Patatas() {
  return (
    <section className="patatas">
      <img
        className="patata__3"
        src={`${import.meta.env.VITE_BACKEND_URL}/assets/images/patata3.svg`}
        alt="patata3.svg"
      />{" "}
      <img
        className="patata__2"
        src={`${import.meta.env.VITE_BACKEND_URL}/assets/images/patata2.svg`}
        alt="patata2.svg"
      />
      <img
        className="patata__1"
        src={`${import.meta.env.VITE_BACKEND_URL}/assets/images/patata1.svg`}
        alt="patata1"
      />{" "}
    </section>
  );
}

export default Patatas;
