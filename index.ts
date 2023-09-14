//  2_TypeScript_Использование системы типов в функциях
const isBirthdayData: boolean = true;
let ageData: number = 40;
const userNameData: string = "John";

// function logBrtMsg(isBirthday: boolean, userName: string, age: number): void {
//   if (isBirthday) {
//     console.log(`Congrats ${userName.toUpperCase()}, age: ${age + 1}`);
//   }

//   return undefined;
// }

// function logBrtMsg(isBirthday: boolean, userName: string, age: number): string {
//   if (isBirthday) {
//     return `Congrats ${userName.toUpperCase()}, age: ${age + 1}`;
//   } else {
//     return "Error";
//   }
// }
const logBrtMsg = (
  isBirthday: boolean,
  userName: string,
  age: number
): string => {
  if (isBirthday) {
    return `Congrats ${userName.toUpperCase()}, age: ${age + 1}`;
  } else {
    return "Error";
  }
};

logBrtMsg(isBirthdayData, userNameData, 40);

// ? Если говорить простыми словами то void после функции значит что ничего не возвращяет viod это пустотта нечего
// ? Любая функция что то возвращяет даже если это нигде не указано он по defaultу вернет нам undefined

// ? В TypeScript есть механизм который позволяет  нам указывать что именно будет возвращять функция, и если вдруг она логически ничего не возвращяет то можно подставить viod что и делает type script самостоятельно но при возможности нужно это прописывать самому

// ? Void это не только отсутствие возвращяемого значения но и его полное игнорирование это полезно при совмещении некоторых функций

// ? Возможна диструктуризация  объекта внутри  аргумента функции как это часто делается в реальности

// ? По возможности всегда нужно указывать тип возвращяемого значения функции, когда тип возврящяемого значения явно указан намного проще и удобнее читать любую функцию
