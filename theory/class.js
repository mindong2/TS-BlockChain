"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/*
    추상클래스 abstract -> 다른클래스가 *상속만* 받을 수 있는 클래스 (다만 새 인스턴스 생성 X)
    const a = new User(); -> err
*/
var User = /** @class */ (function () {
    function User(firstName, secondName, //해당 클래스 제외하면 어느곳에서도 참조가 안된다
    nickname // 상속받는 class에서는 참조가능 -> protected
    ) {
        this.firstName = firstName;
        this.secondName = secondName;
        this.nickname = nickname;
    }
    User.prototype.getName = function () {
        return "".concat(this.firstName, " ").concat(this.secondName);
    };
    return User;
}());
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Player.prototype.getNickName = function () {
        console.log(this.nickname);
    };
    return Player;
}(User));
Player.aa;
var dongmin = new Player('dongmin', 'kim', 'mindong');
// dongmin.firstName -> private라서 읽을수 없다. 컴파일은 안되어 js에서는 그대로 작동
dongmin.getNickName(); // 'mindong'
dongmin.getName(); //kim dongmin
var Dict = /** @class */ (function () {
    function Dict() {
        this.words = {};
    }
    Dict.prototype.add = function (word) {
        if (this.words[word.term] === undefined) {
            this.words[word.term] = word.def;
        }
    };
    Dict.prototype.def = function (term) {
        return this.words[term];
    };
    return Dict;
}());
var Word = /** @class */ (function () {
    function Word(term, def) {
        this.term = term;
        this.def = def;
    }
    return Word;
}());
var kimchi = new Word('kimchi', '한국의 음식');
kimchi.term;
var dict = new Dict();
dict.add(kimchi);
dict.def('kimchi'); // '한국의 음식'
console.log(dict); // 'kimchi' : '한국의 음식'
