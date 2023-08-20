module.exports = function toReadable (number) {
  const units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const secondTen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
  const dozens = ['zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
  
  let arr = Array.from(String(number), Number);
  let indexNumber = arr[0];
  let nameNumber = ''

  if (number <= 9) {
    return units[number];
  } 
  
  if (arr.length === 2) {
    if (number < 20) {
        indexNumber = arr[1]
        return secondTen[indexNumber]
    } else if (20 < number <= 99 & arr[1] != 0) {
        nameNumber = `${dozens[arr[0]]} ${units[arr[1]]}`
        return nameNumber
    } else if (arr[1] == 0) {
        indexNumber = arr[0]
        return dozens[indexNumber]
    } 
  }

  if (arr.length === 3) {
    if (number % 100 === 0) {
        nameNumber = `${units[arr[0]]} hundred`
        return nameNumber 
    } else if (arr[1] === 1) {
        nameNumber = `${units[arr[0]]} hundred ${secondTen[arr[2]]}`
        return nameNumber 
    } else if (arr[1] === 0 & arr[2] != 0) {
        nameNumber = `${units[arr[0]]} hundred ${units[arr[2]]}`
        return nameNumber
    } else if (arr[2] === 0 & arr[1] != 0) {
        nameNumber = `${units[arr[0]]} hundred ${dozens[arr[1]]}`
        return nameNumber
    } else {
        nameNumber = `${units[arr[0]]} hundred ${dozens[arr[1]]} ${units[arr[2]]}`
        return nameNumber
    }
    
    }
  
 
}
