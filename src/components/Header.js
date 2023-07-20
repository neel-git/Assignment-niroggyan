import sampleData from "../utils/data";

const Header = () => {
  const { patientName, dateOfBirth, dateOfIssue, medications, image1 } =
    sampleData;
  return (
    <>
      <nav className="header-container">
        <div className="main-heading-container">
          <h1 className="heading">MEDICATONS</h1>
          <div className="logo-con">
            <img className="logo-cap" src={image1} alt="capsule" />
            <h1 className="main-heading">
              Active Medications ({medications.length})
            </h1>
          </div>
        </div>

        <div className="patient-details-container">
          <div className="patient-detail">
            <p className="patients">Patient Name</p>
            <p className="details">{patientName}</p>
          </div>
          <div className="patient-detail">
            <p className="patients">Date of Birth</p>
            <p className="details">{dateOfBirth}</p>
          </div>
          <div className="patient-detail">
            <p className="patients">Date oF Issue</p>
            <p className="details">{dateOfIssue}</p>
          </div>
        </div>
      </nav>
      <hr className="line" />
    </>
  );
};

export default Header;
