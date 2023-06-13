/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
  const [hour, minutes, second] = s.split(":");
  const seconds = second.slice(0, 2);
  const meridian = second.slice(-2);
  let hours = parseInt(hour);

  if (meridian === "PM" && hours !== 12) {
    hours += 12;
  } else if (meridian === "AM" && hours === 12) {
    hours = 0;
  }

  const militaryHour = hours.toString().padStart(2, "0"); //padStart(targetLength, padString)
  return militaryHour + ":" + minutes + ":" + seconds;
}
