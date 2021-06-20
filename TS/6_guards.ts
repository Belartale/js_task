// это вспомогательнные конструкции которые позволяют работать с типами

function strip(x: string | number) {
  if (typeof x === "number") {
    return x.toFixed(2);
  }
  return x.trim();
}

// instanceof >>> можем проверить принадлежнность объекта к классу

class MyResponse {
  header = "response header",
  result = "response message"
}

class MyError {
  header = "error header",
  message = "error message"
}

function handle(res:MyResponse | MyError) {
  if (res instanceof MyResponse) {
    return {
      info: res.header + res.result
    }
    } else {
      return {
        info: res.header + res.message
      }
  }
}

// ===================

type AlertType= "success" | "danger" | "warning"

function setAlertType(type: AlertType) {
  console.log(`Alert`)
}

setAlertType("success")
setAlertType("warning")

// setAlertType("some type") // нету типа у AlertType
