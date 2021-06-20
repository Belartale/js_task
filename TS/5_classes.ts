class TS {
  version: string; // поля которые будут в классе
  constructor(version: string) {
    this.version = version;
  }

  info(name: string) {
    return `TS version is ${this.version}`;
  }
}

// class Car {
//   readonly model: string;
//   readonly numberOfWheels: number = 4;
//   constructor(theModel: string) {
//     this.model = theModel;
//   }
// }

// ===

class Car {
  readonly numberOfWheels: number = 4;
  constructor(readonly model: string) {}
}

// ======================= modifecait
class Animal {
  protected voice: string = ""; // может быть в классе и для всех кто наследует этот класс
  public color: string = "black"; // если нету модификатора то public идёт по дефолту

  constructor() {
    this.go(); // мы можем вызвать в constructor >> go
  }

  private go() {
    console.log(`go`);
  } // только в этом классе
}

class Cat extends Animal {
  public setVoice(voice: string): void {
    this.voice = voice;
    // this.go // потому что приват
  }
}

const cat = new Cat();
// так нельзя cat.voice, только через функцию setVoice
cat.setVoice("test");
console.log(cat.color);

// ======================= abstract class
abstract class Component {
  abstract render(): void;
  abstract info(): string;
}
class AppComponent extends Component {
  render(): void {
    console.log(`console render`);
  }
  info(): string {
    return "console info";
  }
}
