const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
/*
    should have a `totalBatteries` variable
    should have a number as a result
    should have made the sum of all the assembled batteries
*/
const totalBatteries = batteryBatches.reduce((sum, batches) => {
  console.log(batches, sum);
  return batches + sum;
});
