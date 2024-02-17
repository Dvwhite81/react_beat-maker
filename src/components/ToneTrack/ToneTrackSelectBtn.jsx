function ToneTrackSelectBtn({
  option,
  useFlats,
  toggleSelected,
  playSound,
}) {
  const { displayName, displayFlatName } = option;

  return (
    <button
      type="button"
      className="btn track-select-btn"
      onClick={() => playSound(8)}
    >
      <p className="track-label">
        {useFlats ? displayFlatName : displayName}
      </p>
      <span
        className="remove-track-span"
        onClick={() => toggleSelected(option)}
      >
        x
      </span>
    </button>
  );
}

export default ToneTrackSelectBtn;
