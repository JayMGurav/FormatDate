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


// takes integrer and pads it with 0 like 05
function padWithZeros(int: number) :string {
  return int < 10 ? '0' + int : int.toString();  
}

// takes integer and adds suffix to it like 12th
function suffix(int:number) :string{
  if(int % 10 == 1 && int != 11){
    return int + 'st';
  }else if(int % 10 == 2 && int != 12){
    return int + 'nd'
  }else if (int % 10 == 3 && int != 13){
    return int + 'rd';
  }
  return int + 'th';
}


interface ParseDate {
  date: string,
  time: string
}

function parseDate(date:Date) :ParseDate{
  const year:number = date.getFullYear(),
    month:number = date.getMonth(),
    day:number = date.getDate(),
    hrs:number = date.getHours(),
    min:number = date.getMinutes(),
    sec:number = date.getSeconds();

    let humanReadableDate:string = '';
    humanReadableDate += suffix(day) + ' ';
    humanReadableDate += months[month].slice(0,3) + ' ';
    humanReadableDate += year;

    let humanReadableTime:string = '';
    let hour:number = hrs === 0 || hrs === 12 ? 12 : hrs % 12;
    let paddedHour:string =  padWithZeros(hour);
    humanReadableTime += paddedHour + ':';
    humanReadableTime += padWithZeros(min) + ':';
    humanReadableTime += padWithZeros(sec) + ' ';
    humanReadableTime += hrs >= 12 ? 'PM' : 'AM';

    return {
      date: humanReadableDate,
      time: humanReadableTime,
    };
}


function formatDate(date:Date) :ParseDate{
  return parseDate(date);
}

export default formatDate;