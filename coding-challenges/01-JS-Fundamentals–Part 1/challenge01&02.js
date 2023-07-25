const MarkWeight = 95;
const MarkHeight = 1.88;

const JohnWeight = 85;
const JohnHeight = 1.76;

const MarkBMI = MarkWeight / MarkHeight ** 2;

const JohnBMI = JohnWeight / (JohnHeight * JohnHeight);

if (MarkBMI > JohnBMI) {
  console.log(
    `Mark's BMI(${MarkBMI.toFixed(2)}) is higher than John's(${JohnBMI.toFixed(
      2
    )})`
  );
} else {
  console.log(
    `Mark's BMI (${MarkBMI.toFixed(
      2
    )}) is smaller than John's (${JohnBMI.toFixed(2)})`
  );
}
