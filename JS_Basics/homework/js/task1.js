let allBateries = parseFloat(prompt('Enter amount of batteries'));
let defectivePercent = parseFloat(
  prompt('Enter percent of defective bataries')
);

const maxPercent = 100;
const two = 2;

if (
  typeof allBateries !== 'number' ||
  isNaN(allBateries) === true ||
  typeof defectivePercent !== 'number' ||
  isNaN(defectivePercent) === true ||
  allBateries < 0 ||
  defectivePercent < 0 ||
  defectivePercent > maxPercent
) {
  alert('Invalid input data');
} else {
  let defectiveNumber = (allBateries * defectivePercent / maxPercent).toFixed(two);
  let workingNumber = allBateries - defectiveNumber;

  alert(
    `
        Amount of batteries: ${allBateries} 
        Defective rate: ${defectivePercent}% 
        Amount of defective batteries: ${defectiveNumber} 
        Amount of working batteries: ${workingNumber}`
  );
}
