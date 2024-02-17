import { useState } from 'react';
import ToggleIconBtn from '../ToggleIconBtn';
import ModalToneBtn from './ModalToneBtn';

function ModalToneSection({
  choice,
  selectedTones,
  toggleSelected,
  useFlats,
}) {
  const [minimized, setMinimized] = useState(false);

  const toggleMinimize = () => {
    setMinimized((prev) => !prev);
  };
  const { displayName, options } = choice;

  return (
    <div className="modal-tone-section">
      <p className="modal-tone-section-text">
        {displayName}{' '}
        <ToggleIconBtn
          btnClass="btn"
          btnFunc={toggleMinimize}
          handleMouseEnter={null}
          conditional={minimized}
          icon1="add-icon"
          icon2="minus-icon"
        />
      </p>
      {!minimized && (
        <div className="modal-tone-section-btns">
          {options.map((o) => (
            <ModalToneBtn
              key={o.name}
              option={o}
              selectedTones={selectedTones}
              toggleSelected={toggleSelected}
              useFlats={useFlats}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ModalToneSection;
