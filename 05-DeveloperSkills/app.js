const temperatures = [10, -5, 4, 9, -1, 0, "error", 12, 45, 35, 26];

const calcTempAmplitude = (arr) => {
  let min = 0;
  let man = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "string") {
      min = arr[i];
      // if(min )
    }
  }
};

calcTempAmplitude(temperatures);
