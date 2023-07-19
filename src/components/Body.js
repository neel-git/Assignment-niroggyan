import MedicationCard from "./MedicationCard";
import sampleData from "../utils/data";

const Body = () => {
  const medicines = sampleData.medications;
  console.log(medicines);
  return (
    <>
      <div className="container">
        {medicines.map((medication) => (
          <MedicationCard key={medication?.data?.id} medInfo={medication} />
        ))}
      </div>
    </>
  );
};

export default Body;
