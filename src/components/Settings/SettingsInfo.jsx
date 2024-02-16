import { useState } from 'react';

function SettingsInfo() {
  const [infoIsVisible, setInfoIsVisible] = useState(false);

  const toggleClass = () => {
    setInfoIsVisible((prev) => !prev);
  };
  return (
    <>
      <img
        id="settings-question"
        className="icon info-icon"
        src="/images/info-icon.png"
        alt="info-icon"
        onMouseEnter={toggleClass}
        onMouseLeave={toggleClass}
      />
      {infoIsVisible && (
        <div id="settings-extra-text">
          <div>Set Overall Speed</div>
          <div>Set Number of Measures (Bars)</div>
          <div>Set Number of Beats per Measure</div>
          <div>
            4 = sixteenth <br />
            2 = eighth <br />1 = quarter
          </div>
        </div>
      )}
    </>
  );
}

export default SettingsInfo;
