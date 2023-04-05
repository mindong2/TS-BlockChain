export {};
// interface는 오직 object의 모양만을 알려주는 방법 (상속가능)

interface User {
  readonly name: string;
}

interface User {
  readonly age: number;
}

interface User {
  readonly nickname: string;
}

// 재선언시 User interface에 추가, type은 X

interface MyInfo extends User {}

const name: MyInfo = {
  name: "kim",
  age: 10,
  nickname: "mindong",
};

/*
    type으로 할때는 아래와 같다 & 연산자
    type User = {
        name: string;
    }

    type MyInfo: User & = {
        age: number
    }

*/

/*abstarct class는 컴파일시 js로 일반클래스 형식으로 나타나므로 컴파일 되지않는 interface 사용이 더 낫다.

*Before*

abstract class User { 
  constructor(protected firstName: string, protected lastName: string) {}

  abstract sayHi(name: string): string;
  abstract fullname(): string;
}

class Player extends User {
  fullname() {
    return `${this.firstName} ${this.lastName}`;
  }
  sayHi(name: string) {
    return `hello ${name} ! my name is ${this.fullname()}`;
  }
}

*/

// After

interface User2 {
  firstName: string;
  lastName: string;
  sayHi(name: string): string;
  fullname(): string;
}

interface Human {
  age: number;
}

class Player implements User2, Human {
  constructor(
    public firstName: "dongmin",
    public lastName: "kim",
    public age: 28
  ) {}

  fullname() {
    return `${this.firstName} ${this.lastName}`;
  }
  sayHi(name: string) {
    return `hello ${name} ! my name is ${this.fullname()}`;
  }
}

// recap

// type
type PlayerA = {
  name: string;
};

// type 상속시

type PlayerB = PlayerA & {
  nickname: string;
};

const TypePlayer: PlayerB = {
  name: "dongmin",
  nickname: "mindong",
};

// interface

interface Player1 {
  name: string;
}

// interface 상속시

interface Player2 extends Player1 {
  nickname: string;
}

//interface는 재선언하므로써 새로운 속성추가가 가능하다 type은 오류가 남 (차이점)
interface Player2 {
  age: number;
}

class PlayerClass implements Player2 {
  constructor(
    public name: "dongmin",
    public nickname: "mindong",
    public age: 2
  ) {}
}

// type 또한 implements가 가능하다 (공통점)

class PlayerClass2 implements PlayerB {
  constructor(public name: "dongmin", public nickname: "mindong") {}
}

/*
  정리

  1. type과 interface 모두 implements 가능하다
  2. type의 상속방법은 &을통해, interface는 extends를 통해
  3. type은 재선언이 안되며 interface는 재선언을통해 속성추가가 가능하다
  4. Object 타입은 interface를 사용하자
*/

// Generic 추가

interface MyStorage<T> {
  [key: string]: T;
}

class LocalStorage<T> {
  //해당 클래스에서 interface로 generic 함수 전달
  private storage: MyStorage<T> = {};
  set(key: string, value: T) {
    this.storage[key] = value;
  }
  remove(key: string) {
    delete this.storage[key];
  }
  get(key: string): T {
    return this.storage[key];
  }
  clear() {
    this.storage = {};
  }
}

const stringStorage = new LocalStorage<string>();
stringStorage.set("name", "dongmin");
stringStorage.get("name");

const booleanStorage = new LocalStorage<boolean>();
booleanStorage.get("name");
booleanStorage.set("merried", false);
