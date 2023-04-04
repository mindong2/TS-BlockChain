// call signature
type Add = (a:number, b:number) => number;

const add :Add = (a, b) => a + b;

// overloading -> 여러개의 call signature가 있는 함수

type Add2 = {
    (a:number, b:number) : number; // ar1
    (a:number, b:string) : number; // ar2
}

const add2 :Add2 = (a, b) => {
    if(typeof b === 'string') {
        return a; // ar1 적용
    }else {
        return a + b //ar2 적용
    }
}

/*
    실제 예시 (Next.js)에서
    Router.push('/home');
    Router.push({
        path : '/home',
        state : 1
    })
    처럼 두가지로 보낼수 있는데,
*/
type Config = {
    path :string,
    state : number
}
type Push = {
    (path:string) : void
    (config:Config) : void
}

const router :Push = (config) => {
    if(typeof config === 'string') {
        console.log(config);
    }else{
        console.log(config.path);
    }
}

router({
    path : 'sad',
    state : 1
})  // 'sad'

// PolyMorphism (Generic)

// 자동적으로 우리가 입력한 값들의 타입을 인식한다
type Poly = <T, V>(x : T[], y : V) => T;

const polyFn:Poly = (x) => x[0];

const a = polyFn([1,2,3], "a"); //number , string
const b = polyFn([false,true], 2); // boolean, number
const c = polyFn([1,'a',true], true); // number | string | boolean , boolean

polyFn<number, string>([1,2], "a"); //이와같이 작성도 가능하지만 TS가 유추하는게 가장 best


// 제네릭 활용 

type Player <T> = {
    name : string,
    moreInfo : T
}

type PlayerInfo = {
    favFood : string;
}

type NewPlayer = Player<PlayerInfo>;

const myPlay :NewPlayer = {
    name : 'dongmin',
    moreInfo : {
        favFood : 'kimchi'
    }
}

type ex = (x : Array<number>) => void //이렇게도 사용가능