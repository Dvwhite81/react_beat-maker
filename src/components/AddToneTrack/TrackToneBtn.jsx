function TrackToneBtn({ setModalVisible }) {
  return (
    <button
      type="button"
      className="btn track-select-btn"
      onClick={() => setModalVisible(true)}
    >
      <p className="track-label">Add Note</p>
    </button>
  );
}

export default TrackToneBtn;
