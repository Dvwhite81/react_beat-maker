import { useEffect, useState } from 'react';
import { playTone } from '../../scripts/tones';

function ModalToneBtn({
  option,
  selectedTones,
  toggleSelected,
  useFlats,
}) {
  const [isChecked, setIsChecked] = useState(false);

  const { name, displayName, displayFlatName } = option;

  useEffect(() => {
    if (selectedTones.includes(option)) {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  }, [selectedTones, option]);

  return (
    <button
      type="button"
      className="btn modal-tone-btn"
      onClick={() => playTone(name, '8n')}
    >
      <span className="modal-tone-btn-span">
        <input
          type="checkbox"
          onChange={() => toggleSelected(option)}
          checked={isChecked}
        />
      </span>
      {useFlats ? displayFlatName : displayName}
    </button>
  );
}

export default ModalToneBtn;
