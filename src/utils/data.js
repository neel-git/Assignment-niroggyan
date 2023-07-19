const sampleData = {
  patientName: "Joyneel Acharya",
  dateOfBirth: "16 May 1991",
  dateOfIssue: "30 Nov 2020",
  image1:
    "https://ik.imagekit.io/vfkpqltji/Capsule_1.png?updatedAt=1689665362290",
  medications: [
    {
      type: "medication",
      data: {
        id: 547,
        medicineName: "IBUPROFEN 600 MG TAB",
        medicationReason: "For Treatment of lower back Pain",
        image:
          "https://ik.imagekit.io/vfkpqltji/image_tablet.webp?updatedAt=1689665358160",
        medicinePerTime: [1],
        totalNumber: 4,
        period: 4,
        timings: ["8:00AM", "12.00NOON", "4.00PM", "8.00PM"],
        timeSlot:
          "https://ik.imagekit.io/vfkpqltji/times-4.jpeg?updatedAt=1689665357720",
        direction: "1 tablet by mouth 4 times a day with food every 4 hours",
        sideEffects: [
          {
            sideEffect: "Headache",
            logo: "https://ik.imagekit.io/vfkpqltji/Headache.png?updatedAt=1689665357827",
          },
          {
            sideEffect: "Dizziness",
            logo: "https://ik.imagekit.io/vfkpqltji/diziness.png?updatedAt=1689665358233",
          },
        ],
        medicalHelp:
          "Experiencing chest pain,shortness of breath and rapid weight gain",
      },
    },
    {
      type: "medication",
      data: {
        id: 548,
        medicineName: "INSULIN, GLARGINE, HUMAN 100 UNT/ML INJ",
        medicationReason: "For Treatment of lower back Pain",
        image:
          "https://ik.imagekit.io/vfkpqltji/needle.png?updatedAt=1689666476050",
        medicinePerTime: [1],
        totalNumber: 4,
        period: 4,
        timings: ["BED TIME"],
        timeSlot:
          "https://ik.imagekit.io/vfkpqltji/Bedtime.jpeg?updatedAt=1689665361725",
        direction:
          "1 injection at bedtime Inject 10 ml vial under the skin as directed for 28 days inject 25 units under the skin at bedtime do not mix with other insulins/discard open vials after 28 days.",
        sideEffects: [
          {
            sideEffect: "Headache",
            logo: "https://ik.imagekit.io/vfkpqltji/Headache.png?updatedAt=1689665357827",
          },
          {
            sideEffect: "Nausea",
            logo: "https://ik.imagekit.io/vfkpqltji/Nausea.png?updatedAt=1689665357910",
          },
          {
            sideEffect: "Fatigue",
            logo: "https://ik.imagekit.io/vfkpqltji/fatigue.png?updatedAt=1689665358209",
          },
        ],
        medicalHelp: "Experiencing itching skin, wheezing and fast heart rate",
      },
    },
    {
      type: "medication",
      data: {
        id: 549,
        medicineName: "terazosin hcl 2mg capsule",
        medicationReason: "For treatment of symptoms of an enlarged prostate.",
        image:
          "https://ik.imagekit.io/vfkpqltji/Yellow_tab.jpeg?updatedAt=1689667724303",
        medicinePerTime: [1, 1, 1],
        totalNumber: "",
        period: 4,
        timings: ["BED TIME"],
        timeSlot:
          "https://ik.imagekit.io/vfkpqltji/Bedtime_Capsule.jpeg?updatedAt=1689665358089",
        direction: "3 capsule before bed",
        sideEffects: [
          {
            sideEffect: "Dizziness",
            logo: "https://ik.imagekit.io/vfkpqltji/diziness.png?updatedAt=1689665358233",
          },
          {
            sideEffect: "Headache",
            logo: "https://ik.imagekit.io/vfkpqltji/Headache.png?updatedAt=1689665357827",
          },
          {
            sideEffect: "Constipation",
            logo: "https://ik.imagekit.io/vfkpqltji/Constipation.png?updatedAt=1689665357533",
          },
          {
            sideEffect: "Loss Of appetite",
            logo: "https://ik.imagekit.io/vfkpqltji/appetite-loss.png?updatedAt=1689665357765",
          },
          {
            sideEffect: "Fatigue",
            logo: "https://ik.imagekit.io/vfkpqltji/fatigue.png?updatedAt=1689665358209",
          },
        ],
        medicalHelp: "Experiencing itching skin, wheezing and fast heart rate",
      },
    },
  ],
};

export default sampleData;
