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
