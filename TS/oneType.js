var isFetching = true;
var isLoading = false;
var int = 42;
var float = 4.2;
var float2 = 3e10;
var message = "Hello TS";
var numberArray = [1, 2, 3];
var numberArray2 = [1, 2, 3]; // такая запись наз дженерик. Из чего такая запись состоит данный класс/объект
var words = ["Hello", "TS"];
// Tuple
var contact = ["name", 12345];
// Any
var variable = 42;
variable = "some text";
// ====
function sayMyName(name) {
    console.log(name);
}
sayMyName("Arthur");
// Never
function throwError(message) {
    throw new Error(message);
}
