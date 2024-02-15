import { useState } from 'react';
import './BoardTitle.css';

function BoardTitle({
  type,
  displayName,
  toggleSectionMinimized,
  toggleSectionSelected,
}) {
  const [addClass, setAddClass] = useState('hidden');
  const [minusClass, setMinusClass] = useState('');
  const [expandClass, setExpandClass] = useState('');
  const [collapseClass, setCollapseClass] = useState('hidden');

  const toggleMinimizeIcon = () => {
    if (addClass === 'hidden') {
      setAddClass('');
      setMinusClass('hidden');
    } else {
      setAddClass('hidden');
      setMinusClass('');
    }

    toggleSectionMinimized();
  };

  const toggleExpandIcon = () => {
    if (expandClass === '') {
      setExpandClass('hidden');
      setCollapseClass('');
    } else {
      setExpandClass('');
      setCollapseClass('hidden');
    }

    toggleSectionSelected();
  };

  return (
    <div className="board-title">
      <div className="left-title-icon-div">
        <button
          className="btn"
          type="button"
          onClick={() => toggleMinimizeIcon(type)}
        >
          <img
            id={`${type}-add-icon`}
            className={`icon add-icon ${addClass}`}
            src="/images/add-icon.png"
            alt="add icon"
          />
          <img
            id={`${type}-minus-icon`}
            className={`icon minus-icon ${minusClass}`}
            src="/images/minus-icon.png"
            alt="minus icon"
          />
        </button>
      </div>
      <h3 className="title-text">{displayName}</h3>
      <div className="right-title-icon-div">
        <button
          className="btn"
          type="button"
          onClick={() => toggleExpandIcon(type)}
        >
          <img
            id={`${type}-expand-icon`}
            className={`icon expand-icon ${expandClass}`}
            src="/images/expand-icon.png"
            alt="expand icon"
          />
          <img
            id={`${type}-collapse-icon`}
            className={`icon collapse-icon ${collapseClass}`}
            src="/images/collapse-icon.png"
            alt="collapse icon"
          />
        </button>
      </div>
    </div>
  );
}

export default BoardTitle;
