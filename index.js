const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "November",
  "December"
];

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

// takes integrer and pads it with 0 like 05
function padWithZeros(int) {
  return int < 10 ? '0' + int : int;  
}

// takes integer and adds suffix to it like 12th
function suffix(int) {
  if(int % 10 == 1 && int != 11){
    return int + 'st';
  }else if(int % 10 == 2 && int != 12){
    return int + 'nd'
  }else if (int % 10 == 3 && int != 13){
    return int + 'rd';
  }
  return int + 'th';
}

function parseDate(date){
  const year = date.getFullYear(),
    month = date.getMonth(),
    day = date.getDate(),
    hrs = date.getHours(),
    min = date.getMinutes(),
    sec = date.getSeconds();

    let humanReadableDate = '';
    humanReadableDate += suffix(day) + ' ';
    humanReadableDate += months[month].slice(0,3) + ' ';
    humanReadableDate += year + ' ';

    let humanReadableTime = '';
    let hour = hrs === 0 || hrs === 12 ? 12 : hrs % 12;
    hour =  padWithZeros(hour);
    humanReadableTime += hour + ':';
    humanReadableTime += padWithZeros(min) + ':';
    humanReadableTime += padWithZeros(sec) + ' ';
    humanReadableTime += hrs >= 12 ? 'PM' : 'AM';

    return {
      date: humanReadableDate,
      time: humanReadableTime,
    };
}


export default function humanTime(date){
  return parseDate(date);
}



// usage
const now = new Date();

console.log(humanTime(now).date);
console.log(humanTime(now).time);
