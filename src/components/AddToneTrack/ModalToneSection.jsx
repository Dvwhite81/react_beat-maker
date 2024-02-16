import ModalToneBtn from './ModalToneBtn';

function ModalToneSection({
  choice,
  selectedTones,
  toggleSelected,
  useFlats,
}) {
  const { displayName, options } = choice;

  return (
    <div className="modal-tone-section">
      <p>{displayName}</p>
      <div className="modal-tone-section-btns">
        {options.map((o) => (
          <ModalToneBtn
            key={o.name}
            option={o}
            selectedTones={selectedTones}
            toggleSelected={toggleSelected}
            useFlats={useFlats}
          />
        ))}
      </div>
    </div>
  );
}

export default ModalToneSection;
