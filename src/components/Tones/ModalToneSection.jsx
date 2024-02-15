import ModalToneBtn from './ModalToneBtn';

function ModalToneSection({ choice, toggleSelected }) {
  const { displayName, options } = choice;

  return (
    <div className="modal-tone-section">
      <p>{displayName}</p>
      <div className="modal-tone-section-btns">
        {options.map((o) => (
          <ModalToneBtn
            key={o.name}
            option={o}
            toggleSelected={toggleSelected}
          />
        ))}
      </div>
    </div>
  );
}

export default ModalToneSection;
