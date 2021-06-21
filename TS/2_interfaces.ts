// создаем некоторый тип для объектов или классов указываем какие поля, функция, элементы
// должны присуцтвовать у этих объектов

// типа структура и if для obj, class

interface Rect {
  readonly id: string;
  color?: string;
  size: {
    width: number;
    height: number;
  };
}
// readonly === только для чтения

const rect1: Rect = {
  id: "1234",
  size: {
    width: 20,
    height: 30,
  },
  color: "#ccc",
};
const rect2: Rect = {
  id: "1234",
  size: {
    width: 20,
    height: 30,
  },
};

rect2.color = "black";

const rect3 = {} as Rect;
const rect4 = <Rect>{}; // страый синтаксис

// =================
interface RectWithArea extends Rect {
  getArea: () => number;
}

const rect5: RectWithArea = {
  id: "123",
  size: {
    width: 20,
    height: 20,
  },
  getArea(): number {
    return this.size.width * this.size.height;
  },
};

// ================ clsass

interface IClock {
  time: Date;
  setTime(date: Date): void;
}

class Clock implements IClock {
  time: Date = new Date();
  setTime(date: Date): void {
    this.time = date;
  }
}

// =============== создать инт в котором будет много динамических ключей

interface Styles {
  [key: string]: string; // это для >>> border: "1px black",
}

const css: Styles = {
  border: "1px black",
  marginTop: "2px",
};
