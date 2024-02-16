import { useEffect, useState } from 'react';
import './Square.css';

function Square({ index, playSound, currentBeat, isPlaying }) {
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

    if (isPlaying && soundShouldPlay) {
      setActiveClass('square-active');
      if (isSelected) {
        // eslint-disable-next-line no-undef
        playSound();
      }
    } else {
      setActiveClass('');
    }
  }, [currentBeat, index, isPlaying, isSelected, playSound]);

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
