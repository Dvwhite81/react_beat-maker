function SettingsInput({ type, labelText, value, setValue }) {
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
    </div>
  );
}

export default SettingsInput;
