// readonly === только для чтения

interface Rect {
  readonly id: string;
  color?: string;
  size: {
    width: number;
    height: number;
  };
}

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

const css = {
  border: "1px black",
  marginTop: "2px",
};
