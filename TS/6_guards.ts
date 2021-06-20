// это вспомогательнные конструкции которые позволяют работать с типами

function strip(x: string | number) {
  if (typeof x === "number") {
    return x.toFixed(2);
  }
  return x.trim();
}

class MyResponse {
  header = "response header",
  message = "response message"
}

class MyError {
  header = "error header",
  message = "error message"
}

function handle(res:MyResponse | MyError) {
  if (res instanceof MyResponse) {
    
  }
}