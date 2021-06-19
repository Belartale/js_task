const isFetching: boolean = true;
const isLoading: boolean = false;

const int: number = 42;
const float: number = 4.2;
const float2: number = 3e10;

const message: string = "Hello TS";

const numberArray: number[] = [1, 2, 3];
const numberArray2: Array<number> = [1, 2, 3]; // такая запись наз дженерик. Из чего такая запись состоит данный класс/объект

const words: string[] = ["Hello", "TS"];

// Tuple
const contact: [string, number] = ["name", 12345];

// Any
let variable: any = 42;
variable = "some text";

// ====
function sayMyName(name: string): void {
  console.log(name);
}
sayMyName("Arthur");

// Never
function throwError(message: string): never {
  throw new Error(message);
}

function infinite(): never {
  while (true) {}
}

// Type
type Login = string;
const login: Login = "admin";

type ID = string | number;
const id1: ID = 1234;
const id2: ID = "1234";

type SomeType = string | null | undefined;
