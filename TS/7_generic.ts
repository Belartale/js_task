// шаблонизаторы который позволяет создавать классы с динамическими типами

const arrayOfNumber: Array<number> = [1, 1, 2, 3, 5];
const arrayOfString: Array<string> = ["hello", "artur"];

function Reverse<T>(array: T[]): T[] {
  return array.reverse();
}

Reverse(arrayOfNumber);
Reverse(arrayOfString);
