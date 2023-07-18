import sampleData from "../utils/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPills } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const { patientName, dateOfBirth, dateOfIssue, image1, medications } =
    sampleData;
  return (
    <div className="main">
      <h3 className="heading">MEDICATIONS</h3>
      <div className="header">
        <div>
          <h1 className="heading">
            <FontAwesomeIcon icon={faPills} />
            &nbsp; Active Medications ({medications.length})
          </h1>
        </div>

        <div className="patient-details">
          <div className="patient-detail">
            <div className="patient"> PATIENT NAME:</div>
            <div className="detail">{patientName}</div>
          </div>
          <div className="patient-detail">
            <div className="patient"> DATE OF BIRTH:</div>
            <div className="detail">{dateOfBirth}</div>
          </div>
          <div className="patient-detail">
            <div className="patient"> DATE OF ISSUE:</div>
            <div className="detail">{dateOfIssue}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
