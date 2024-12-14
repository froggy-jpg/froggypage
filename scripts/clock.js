async function startTime() {
  const today = new Date();
  const monthNames = [ "january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december" ]; 
  const dayNames= [ "sunday","monday","tuesday","wednesday","thursday","friday","saturday" ];

  let month = today.getMonth();
  let day = today.getDay();
  let hour = today.getHours();
  let minute = today.getMinutes();
  let second = today.getSeconds();

  hour = checkTime(hour);
  minute = checkTime(minute);
  second = checkTime(second);

  document.getElementById('month').innerHTML = monthNames[month]
  document.getElementById('day').innerHTML = dayNames[day]
  document.getElementById('time').innerHTML =  hour + ":" + minute + ":" + second;
} setTimeout(startTime, 1000);

function checkTime(i) {
  if (i < 10) {i = "0" + i};
  return i;
} startTime()