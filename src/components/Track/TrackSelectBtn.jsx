import { useState } from 'react';

function TrackSelectBtn({ choice, setSoundToPlay }) {
  const { displayName, options } = choice;

  const [selectClass, setSelectClass] = useState(' hidden');

  const toggleSelectOpen = () => {
    if (selectClass === ' hidden') {
      setSelectClass('');
    } else {
      setSelectClass(' hidden');
    }
  };

  const handleSelectSound = (value) => {
    setSoundToPlay(value);
    toggleSelectOpen();
  };

  return (
    <>
      <button
        type="button"
        className="btn track-select-btn"
        onClick={toggleSelectOpen}
      >
        <p className="track-label">{displayName}</p>
      </button>
      <ul className={`select track-select${selectClass}`}>
        {options.map((o) => (
          <li key={o.soundName} className="select-option">
            <button
              type="button"
              className="select-option-btn"
              value={o.soundSrc}
              onClick={({ target }) =>
                handleSelectSound(target.value)
              }
            >
              {o.soundName}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TrackSelectBtn;
