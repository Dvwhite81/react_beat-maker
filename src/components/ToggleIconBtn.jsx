function ToggleIconBtn({
  divClass,
  btnClass,
  btnFunc,
  conditional,
  icon1,
  icon2,
}) {
  return (
    <div className={divClass}>
      <button type="button" className={btnClass} onClick={btnFunc}>
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
    </div>
  );
}

export default ToggleIconBtn;
