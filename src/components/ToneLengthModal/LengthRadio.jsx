import { useState } from 'react';

function LengthRadio({ option, length, handleLength }) {
  const [checked, setChecked] = useState(length === value);
  const { label, value } = option;

  const isChecked = length === value || checked;

  return (
    <label className="tone-length-radio" htmlFor="whole-note">
      {label}
      <input
        type="radio"
        name="whole-note"
        value={value}
        onChange={({ target }) => {
          handleLength(target.value);
          setChecked(true);
        }}
        checked={isChecked}
      />
    </label>
  );
}

export default LengthRadio;
