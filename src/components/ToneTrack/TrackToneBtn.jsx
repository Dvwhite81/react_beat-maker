function TrackToneBtn({ openModal }) {
  return (
    <button
      type="button"
      className="btn track-select-btn"
      onClick={openModal}
    >
      <p className="track-label">Add Note</p>
    </button>
  );
}

export default TrackToneBtn;
