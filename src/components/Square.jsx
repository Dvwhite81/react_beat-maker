import { useEffect, useState } from 'react';

function Square({ index, soundToPlay, currentBeat, isPlaying }) {
  const [isSelected, setIsSelected] = useState(false);
  const [selectedClass, setSelectedClass] = useState('');
  const [activeClass, setActiveClass] = useState('');

  useEffect(() => {
    if (isSelected) {
      setSelectedClass('square-selected');
    } else {
      setSelectedClass('');
    }
  }, [isSelected]);

  useEffect(() => {
    const soundShouldPlay = currentBeat === index;

    if (isPlaying && isSelected && soundShouldPlay) {
      setActiveClass('square-active');
      // eslint-disable-next-line no-undef
      const sound = new Audio();
      sound.src = soundToPlay;
      sound.play();
    } else {
      setActiveClass('');
    }
  }, [currentBeat, index, isPlaying, isSelected, soundToPlay]);

  const handleClick = () => {
    setIsSelected((prev) => !prev);
  };

  return (
    <div
      className={`square ${selectedClass} ${activeClass}`}
      onClick={handleClick}
    />
  );
}

export default Square;
