const date = new Date("March 16, 2030 14:25:00");
console.log('date: ', date.toString());

date.setMinutes(50);
// "Sat Mar 16 2030 14:50:00 GMT+0200"
console.log('new Minutes after date.setMinutes(50): ', date.toString());


date.setFullYear(2040, 4, 8);
// "Tue May 08 2040 14:50:00 GMT+0300"
console.log('new date after date.setFullYear(2040, 4, 8): ', date.toString());


console.log('');

date.toString();
// "Sat Mar 16 2030 14:25:00 GMT+0200 (Eastern European Standard Time)"
console.log('toString: ', date.toString());

date.toTimeString();
// "14:25:00 GMT+0200 (Eastern European Standard Time)"
console.log('toTimeString(): ', date.toTimeString());


date.toLocaleTimeString();
// "2:25:00 PM"
console.log('toLocaleTimeString: ', date.toLocaleTimeString());


date.toUTCString();
// "Sat, 16 Mar 2030 12:25:00 GMT"
console.log('toUTCString: ', date.toUTCString());


date.toDateString();
// "Sat Mar 16 2030"
console.log('toDateString: ', date.toDateString());


date.toISOString();
// "2030-03-16T12:25:00.000Z"
console.log('toISOString: ', date.toISOString());


date.toLocaleString();
// "3/16/2030, 2:25:00 PM"
console.log('toLocaleString: ', date.toLocaleString());


date.getTime();
// 1899894300000
console.log('getTime: ', date.getTime());
