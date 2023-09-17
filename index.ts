//  Типы BigInt и Symbol

//? Symbol это тип данных  в JavaScript необхдодим для создания уникальных идентификаторов в том числе и скрытые при обычном доступе в свойства объекта которые не показывается при переборе объекта

let id: symbol = Symbol("id");

const data = {
  [id]: 1,
};

console.log(data[id]);

// ?Тип данных BigInt позволяе нам безопасно работать с числами которые за диапазоны стандартного типа number

const num1: bigint = 1n;
const num2: bigint = 2n;

//  ? Мы не можем складывать BigInt  с обычным number
console.log(num1 + 5);
//
console.log(num1 + num2);
