import { useState } from 'react';

function SettingsInput({
  type,
  labelText,
  value,
  setValue,
  extraText,
}) {
  const [displayClass, setDisplayClass] = useState('hidden');

  const toggleClass = () => {
    if (displayClass === 'hidden') {
      setDisplayClass('');
    } else {
      setDisplayClass('hidden');
    }
  };

  return (
    <div className="settings-input">
      <label htmlFor={`${type}-input`}>
        {labelText}
        <input
          type="number"
          id={`${type}-input`}
          value={value}
          onChange={({ target }) => setValue(target.value)}
        />
      </label>
      {extraText && (
        <span
          id="settings-question"
          onMouseEnter={toggleClass}
          onMouseLeave={toggleClass}
        >
          ?
        </span>
      )}
      {extraText && (
        <p id="settings-extra-text" className={displayClass}>
          4 = sixteenth <br />
          2 = eighth <br />1 = quarter
        </p>
      )}
    </div>
  );
}

export default SettingsInput;
