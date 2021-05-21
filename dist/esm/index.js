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
function padWithZeros(int) {
    return int < 10 ? '0' + int : int.toString();
}
function suffix(int) {
    if (int % 10 == 1 && int != 11) {
        return int + 'st';
    }
    else if (int % 10 == 2 && int != 12) {
        return int + 'nd';
    }
    else if (int % 10 == 3 && int != 13) {
        return int + 'rd';
    }
    return int + 'th';
}
function parseDate(date) {
    const year = date.getFullYear(), month = date.getMonth(), day = date.getDate(), hrs = date.getHours(), min = date.getMinutes(), sec = date.getSeconds();
    let humanReadableDate = '';
    humanReadableDate += suffix(day) + ' ';
    humanReadableDate += months[month].slice(0, 3) + ' ';
    humanReadableDate += year;
    let humanReadableTime = '';
    let hour = hrs === 0 || hrs === 12 ? 12 : hrs % 12;
    let paddedHour = padWithZeros(hour);
    humanReadableTime += paddedHour + ':';
    humanReadableTime += padWithZeros(min) + ':';
    humanReadableTime += padWithZeros(sec) + ' ';
    humanReadableTime += hrs >= 12 ? 'PM' : 'AM';
    return {
        date: humanReadableDate,
        time: humanReadableTime,
    };
}
function formatDate(date) {
    return parseDate(date);
}
export default formatDate;
//# sourceMappingURL=index.js.map