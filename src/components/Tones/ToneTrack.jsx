function ToneTrack({ option, currentBeat, totalBeats, isPlaying }) {
  return (
    <div className="tone-track">
      <p>{option.displayName}</p>
    </div>
  );
}

export default ToneTrack;
