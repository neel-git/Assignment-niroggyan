import React from "react";

const MedicationCard = (props) => {
  const { medInfo } = props;

  const {
    medicineName,
    medicationReason,
    image,
    timeSlot,
    direction,
    sideEffects,
    medicalHelp,
  } = medInfo?.data;

  //To bold the numbers
  const format = (word) => {
    const words = word.split(" ");
    const newWord = words.map((text, idx) => {
      const isNumber = !isNaN(Number(text));
      return (
        <React.Fragment key={idx}>
          {isNumber ? <strong>{text}</strong> : text}
          {idx !== words.length - 1 ? " " : null}
        </React.Fragment>
      );
    });
    return <>{newWord}</>;
  };
  return (
    <div>
      <div className="med-name">{medicineName.toUpperCase()}</div>
      <div className="med-container">
        <div className="subcontainer1">
          <p className="subcontainer-heading">APPEARANCE</p>

          <img src={image} alt={medicineName} className="image" />
          <p className="subcontainer-heading">REASON OF MEDICATION</p>
          <p className="description">{medicationReason}</p>
        </div>
        <div className="sub-container2">
          <p className="subcontainer-heading">DIRECTION NOTES</p>
          <p className="description">{format(direction)}</p>
          <img src={timeSlot} alt={direction.toUpperCase()} className="slot" />
        </div>
        <div className="sub-container3">
          <div className="side-effect">
            <p className="subcontainer-heading">POSSIBLE SIDE EFFECTS</p>
            <ul className="effects">
              {sideEffects &&
                sideEffects.map((effect, idx) => (
                  <li className="list" key={idx}>
                    <img className="logo" src={effect.logo} alt="logo" />
                    &nbsp;
                    <span className="item">{effect.sideEffect}</span>
                  </li>
                ))}
            </ul>
          </div>
          {medicalHelp && (
            <React.Fragment>
              <p className="subcontainer-heading">GET MEDICAL HELP IF</p>
              <p className="help">{medicalHelp}</p>
            </React.Fragment>
          )}
        </div>
      </div>
      <div className="lining"></div>
    </div>
  );
};
export default MedicationCard;
