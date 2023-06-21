const MarkWeight = 78;
const MarkHeight = 1.69;

const JohnsWeight = 92;
const JohnsHeight = 1.95;

let MarkBMI;
let JohnBMI;
let markHigherBMI = false;

const calculateBMI = (JohnsHeight, JohnsWeight, MarkHeight, MarkWeight) => {
  JohnBMI = JohnsWeight / (JohnsHeight * JohnsHeight);
  MarkBMI = MarkWeight / (MarkHeight * MarkHeight);
  if (MarkBMI > JohnBMI) {
    markHigherBMI = true;
    if (markHigherBMI) {
      console.log(`Mark${MarkBMI} has a higher BMI than John${JohnBMI}`);
    }
  }
};

calculateBMI(JohnsHeight, JohnsWeight, MarkHeight, MarkWeight);
