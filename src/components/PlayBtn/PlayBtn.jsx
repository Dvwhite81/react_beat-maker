import './PlayBtn.css';

function PlayBtn({ isPlaying, setIsPlaying, play, stop }) {
  const togglePlaying = () => {
    if (isPlaying) {
      stop();
    } else {
      setIsPlaying(true);
      play();
    }
  };

  return (
    <div id="play-btn-container">
      <button
        type="button"
        id="play-stop-btn"
        className="btn"
        onClick={togglePlaying}
      >
        {isPlaying ? 'Stop' : 'Play'}
      </button>
    </div>
  );
}

export default PlayBtn;
