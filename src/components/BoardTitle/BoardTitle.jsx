import { useState } from 'react';
import ToggleIconBtn from '../ToggleIconBtn';
import './BoardTitle.css';

function BoardTitle({
  instrument,
  isMinimized,
  setIsMinimized,
  isSelected,
  setIsSelected,
  setSelectedType,
  setNumMinimized,
}) {
  const [minimized, setMinimized] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const { type, displayName } = instrument;

  const toggleMinimize = () => {
    if (isMinimized) {
      setNumMinimized((prev) => prev - 1);
    } else {
      setNumMinimized((prev) => prev + 1);
    }
    setMinimized((prev) => !prev);
    setIsMinimized((prev) => !prev);
  };

  const toggleExpand = () => {
    setExpanded((prev) => !prev);
    if (isMinimized) {
      setMinimized(false);
      setIsMinimized(false);
      setNumMinimized((prev) => prev - 1);
    }
    if (isSelected) {
      setSelectedType(null);
    } else {
      setSelectedType(type);
    }
    setIsSelected((prev) => !prev);
  };

  return (
    <div className="board-title">
      <div className="left-title-icon-div">
        <ToggleIconBtn
          btnClass="btn"
          btnFunc={toggleMinimize}
          handleMouseEnter={null}
          conditional={minimized}
          icon1="add-icon"
          icon2="minus-icon"
        />
      </div>
      <h3 className="title-text">{displayName}</h3>
      <div className="right-title-icon-div">
        <ToggleIconBtn
          btnClass="btn"
          btnFunc={toggleExpand}
          handleMouseEnter={null}
          conditional={expanded}
          icon1="collapse-icon"
          icon2="expand-icon"
        />
      </div>
    </div>
  );
}

export default BoardTitle;
