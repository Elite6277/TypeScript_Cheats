// 3_Специальный тип any

// ! Таких записей стоит избегать
// let salary;
// salary = 5000;

// ! Вот проавильный вариант
let salary: number;
salary = 5000;

//! Главный совет который поможет при работе с TypeScript старайтесь избегать этого типа, чем его больше в TypeScript тем больше потенциальных багов и меньше пользы от самого языка, ведь если тип может быть любым то какой смысл от системы типов

//! Сейчас мы разберем несколько примеров когда any может появиться  и что с ним делать в таком случае

//! Тип any это зло

//! Бывают ли ситуации когда нужно самому использовать any? да бывают но крайне крайне редко, так что старайтесь всегда избегать any вообще в любых ситуациях, так ваш код будет куда безопаснее, а значит и вас избавит от лишних проблем

const userData =
  '{"isBirthdayData": true, "ageData": 40, "userNameData": "John}';

const userObj: {
  isBirthdayData: boolean;
  userNameData: string;
  ageData: number;
} = JSON.parse(userData);

console.log(userObj.smt());

function logBrtMsg(isBirthday: boolean, userName: string, age: number): string {
  if (isBirthday) {
    return `Congrats ${userName.toUpperCase()}, age: ${age + 1}`;
  } else {
    return "Error";
  }
}

logBrtMsg();
