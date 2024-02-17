function ToggleIconBtn({
  btnClass,
  btnFunc,
  handleMouseEnter,
  conditional,
  icon1,
  icon2,
}) {
  return (
    <button
      type="button"
      className={btnClass}
      onClick={btnFunc}
      onMouseEnter={handleMouseEnter}
    >
      {conditional ? (
        <img
          className={`icon ${icon1}`}
          src={`/images/${icon1}.png`}
          alt={icon1}
        />
      ) : (
        <img
          className={`icon ${icon2}`}
          src={`/images/${icon2}.png`}
          alt={icon2}
        />
      )}
    </button>
  );
}

export default ToggleIconBtn;
