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
}) {
  const [minimized, setMinimized] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const { type, displayName } = instrument;

  const toggleMinimize = () => {
    setMinimized((prev) => !prev);
    setIsMinimized((prev) => !prev);
  };

  const toggleExpand = () => {
    setExpanded((prev) => !prev);
    if (isMinimized) {
      setMinimized(false);
      setIsMinimized(false);
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
      <ToggleIconBtn
        divClass="left-title-icon-div"
        btnClass="btn"
        btnFunc={toggleMinimize}
        conditional={minimized}
        icon1="add-icon"
        icon2="minus-icon"
      />
      <h3 className="title-text">{displayName}</h3>
      <ToggleIconBtn
        divClass="right-title-icon-div"
        btnClass="btn"
        btnFunc={toggleExpand}
        conditional={expanded}
        icon1="collapse-icon"
        icon2="expand-icon"
      />
    </div>
  );
}

export default BoardTitle;
