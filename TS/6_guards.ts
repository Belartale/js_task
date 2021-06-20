// это вспомогательнные конструкции которые позволяют работать с типами

function strip(x: string | number) {
  if (typeof x === "number") {
    return x.toFixed(2);
  }
}
