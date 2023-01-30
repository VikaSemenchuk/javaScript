
const button = document.querySelector("button");

const onClick = () => {
  setTimeout(() => {
    alert("I love async JS!");
  }, 2000);
console.log(setTimeout);

};
// Two seconds after clicking the button, 
// alert specified inside the setTimeout callback will appear.
button.addEventListener("click", onClick);


const greet = () => {
    console.log("Hello!");
  };
  
  const timerId = setTimeout(greet, 3000);
  
  clearTimeout(timerId); /* спробуй закоментувати і подивитись як виконується попередня функція */

  console.log('');

  const date = new Date();

  console.log(date);
console.log(typeof(date));
// "Fri Jun 18 2021 15:01:35 GMT+0300 (Eastern European Summer Time)"

console.log(date.toString());
console.log(typeof(date.toString()));
// "Fri Jun 18 2021 15:01:35 GMT+0300 (Eastern European Summer Time)"

console.log('');

console.log(new Date(0));
// "Thu Jan 01 1970 03:00:00 GMT+0300 (Eastern European Standard Time)"

console.log(new Date(15000));
// "Thu Jan 01 1970 03:00:15 GMT+0300 (Eastern European Standard Time)"
console.log('');


console.log(date.getTime());  // 1675111144467 = 30.01.2023 21:39:04

console.log('');

const teamMeetingDate = new Date("March 16, 2030");
console.log(teamMeetingDate);
// "Mon Mar 16 2030 00:00:00 GMT+0200 (Eastern European Standard Time)"

const preciseTeamMeetingDate = new Date("March 16, 2030 14:25:00");
console.log(preciseTeamMeetingDate);
// "Mon Mar 16 2030 14:25:00 GMT+0200 (Eastern European Standard Time)"

const date2 = new Date("2030-03-16");
console.log(date2); 
//Sat Mar 16 2030 01:00:00 GMT+0100 (за центральноєвропейським стандартним часом)

const date3 = new Date("2030-03");
console.log(date3);
//Fri Mar 01 2030 01:00:00 GMT+0100 (за центральноєвропейським стандартним часом)

const date4 = new Date("2018");
console.log(date4);
//Mon Jan 01 2018 01:00:00 GMT+0100 (за центральноєвропейським стандартним часом)

const date5 = new Date("03/16/2030");
console.log(date5);
//Sat Mar 16 2030 00:00:00 GMT+0100 (за центральноєвропейським стандартним часом)

const date6 = new Date("2030/03/16");
console.log(date6);
//Sat Mar 16 2030 00:00:00 GMT+0100 (за центральноєвропейським стандартним часом)

const date7 = new Date("2030/3/16");
console.log(date7);
//Sat Mar 16 2030 00:00:00 GMT+0100 (за центральноєвропейським стандартним часом)

const date8 = new Date("March 16, 2030");
console.log(date8);
//Sat Mar 16 2030 00:00:00 GMT+0100 (за центральноєвропейським стандартним часом)

const date9 = new Date("March 16, 2030 14:25:00");
console.log(date9);
//Sat Mar 16 2030 14:25:00 GMT+0100 (за центральноєвропейським стандартним часом)

const date10 = new Date("2030-03-16 14:25:00");
console.log(date10);
//Sat Mar 16 2030 14:25:00 GMT+0100 (за центральноєвропейським стандартним часом)

const date11 = new Date("2030-03-16T14:25:00");
console.log(date11);
//Sat Mar 16 2030 14:25:00 GMT+0100 (за центральноєвропейським стандартним часом)

const date12 = new Date("16 March 2030");
console.log(date12);
//Sat Mar 16 2030 00:00:00 GMT+0100 (за центральноєвропейським стандартним часом)

console.log('');

const notStringDate = new Date(2030, 2, 16, 14, 25, 0, 0);
console.log(notStringDate);
// Sat Mar 16 2030 14:25:00 GMT+0200 (Eastern European Standard Time)