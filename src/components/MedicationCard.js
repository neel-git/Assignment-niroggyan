import React from "react";
import {
  faUser,
  faFaceDizzy,
  faFaceTired,
  faFaceFlushed,
  faFaceAngry,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MedicationCard = (props) => {
  const { medInfo } = props;
  const sideEffectIcon = {
    "Loss of appettite": faUtensils,
    Fatigue: faFaceTired,
    Nausea: faFaceFlushed,
    Headache: faUser,
    Constipation: faFaceAngry,
    Dizziness: faFaceDizzy,
  };
  const {
    medicineName,
    medicationReason,
    image,
    medicinePerTime,
    period,
    timings,
    timseSlot,
    direction,
    sideEffects,
  } = medInfo?.data;

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
        <div className="subcontainer">
          <p className="subcontainer-heading">APPEARANCE</p>

          <img src={image} alt={medicineName} className="image" />
          <p className="subcontainer-heading">REASON OF MEDICATION</p>
          <p className="description">{medicationReason}</p>
        </div>
        <div className="sub-container2">
          <p className="subcontainer-heading">DIRECTION NOTES</p>
          <p className="description">{format(direction)}</p>
          <img src={image} alt={direction.toUpperCase()} className="slot" />
        </div>
        <div className="sub-container3">
          <div className="side-effect">
            <p className="subcontainer-heading">POSSIBLE SIDE EFFECTS</p>
            <ul className="effects">
              {sideEffects.map((sideEffect, idx) => (
                <li className="effect-list" key={idx}>
                  <FontAwesomeIcon
                    icon={sideEffectIcon[sideEffect]}
                    className="effect-icon"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MedicationCard;
