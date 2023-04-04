export {}

/* 
    추상클래스 abstract -> 다른클래스가 *상속만* 받을 수 있는 클래스 (다만 새 인스턴스 생성 X)
    const a = new User(); -> err
*/
abstract class User {
    constructor(
        private firstName : string,
        private secondName : string, //해당 클래스 제외하면 어느곳에서도 참조가 안된다
        protected nickname :string // 상속받는 class에서는 참조가능 -> protected
    ) {}

    abstract getNickName() : void // 상속받는 class에서 해당 함수 없으면 에러
    getName() {
        return `${this.firstName} ${this.secondName}`;
    }
} 

class Player extends User{
    static aa:string; // static을 붙히면 부모에서만 직접부여
    getNickName() {
        console.log(this.nickname)
    }
}

Player.aa 

const dongmin = new Player('dongmin', 'kim', 'mindong');
// dongmin.firstName -> private라서 읽을수 없다. 컴파일은 안되어 js에서는 그대로 작동
dongmin.getNickName() // 'mindong'
dongmin.getName(); //kim dongmin
/*
    this.firstName = firstName;
    this.secondName = secondName;
*/

/*
해시맵을 만들어보기
*/

type UserType = {
    [key:string] : string
}

class Dict {
    private words :UserType;
    constructor(){
        this.words = {}
    }

    add(word: Word) {
        if(this.words[word.term] === undefined){
            this.words[word.term] = word.def
        }
    }

    def(term : string){
        return this.words[term]
    }
}

class Word {
    constructor(
        public term :string,
        public def : string
    ){}
}

const kimchi = new Word('kimchi', '한국의 음식')

kimchi.term

const dict = new Dict();

dict.add(kimchi)
dict.def('kimchi') // '한국의 음식'

console.log(dict) // 'kimchi' : '한국의 음식'