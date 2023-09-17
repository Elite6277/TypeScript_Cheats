// Типы null и undefined

//?  Null это отсутствие чего либо полностью

//? Undefined значит что  что то есть но значение его не определено

// ? null это частный случай any он может относится к чему угодно

const test: null = null;
const test2: any = null;
const test3: string = null;
const test4: number = null;

const test5: undefined = undefined;
const test6: any = undefined;
const test7: string = undefined;

let smth;

function getRandomData() {
  if (Math.random() < 0.5) {
    return null;
  } else {
    return "Some data";
  }
}

const data = getRandomData();
const trimmedData = data ? data.trim() : null;
