function ShowModalBtn({ setModalIsVisible }) {
  return (
    <button
      type="button"
      className="show-length-btn"
      onClick={() => setModalIsVisible(true)}
    >
      <img
        className="icon question-icon"
        src="/images/question-icon.png"
        alt="question icon"
      />
    </button>
  );
}

export default ShowModalBtn;
