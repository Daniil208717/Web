//1
var city1 = {
    name:"ГородN",
    population: 10000000,
};




//2
var city2 = {
    name:"ГородM",
    population: 1e6,
};



//3
console.log('\n3')
city1.getName = function() {
    return console.log(city1.name);
};
city2.getName = function() {
    return console.log(city2.name);
};
city1.getName();
city2.getName();



//4 
console.log('\n4')
function exportStr() {
    result = ''
    for (property in this){
        if (typeof(this[property]) != 'function'){
            result += '${property}=${this[property]}\n'
        }
    }
    return result;
}

city1.exportStr = city2.exportStr = exportStr;
console.log(city1.exportStr());
console.log(city2.exportStr());



//5
console.log('\n5')
function getObj() {
    return this;
}
city1.getCity = getObj;
city2.getCity = getObj;
console.log(city1.getCity());
console.log(city2.getCity());

//6
console.log('\n6')
var obj ={
    method1: function(){
      return {
        method2: function(){
          return {
            method3: function(){
              return "Метод3"
            }
          }
        }
      }
    }
  }
  console.log(obj.method1().method2().method3());

//7
console.log('\n7')
let d1 = [45, 78, 10, 3];
d1[7] = 100;
console.log(d1, d1[6], d1[7]);


//8
console.log('\n8')
let d2 = [45,78,10,3];
let sum2 = 0
for (let i = 0; i < d2.length; i++){
    sum2 += d2[i]
}
console.log(sum2);


//9
console.log('\n9')
let d3 = [45,78,10,3];
let sum3 = 0;
d3[7] = 100;
for (let i in d3){
    sum3 += i;
}
console.log(sum3);


//10
console.log('\n10')
function my(a, b) { return b - a };
const d4 = [45, 78, 10, 3];
console.log(`Massive ${d4}, Sorted: ${d4.sort(my)}`);

//task11
let d5 = []
for (i = 0; i < 3; i++) {
    d5[i] = [];
    for (j = 0; j < 4; j++) {
        d5[i][j] = 5
    }
}
console.log(d5)

//12
console.log('\n12')
function Vector(x, y) {
    this.x = x;
    this.y = y;
}

Vector.prototype.plus = function (point) {
    return new Vector(this.x + point.x, this.y + point.y);
};

Vector.prototype.minus = function (point) {
    return new Vector(this.x - point.x, this.y - point.y);
};

Object.defineProperty(Vector.prototype, "length", {
    get: function () {
        return ((this.x) ** 2 + (this.y) ** 2) ** 0.5;
    }
});

console.log(new Vector(1, 2).plus(new Vector(2, 3)));
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
console.log(new Vector(3, 4).length);



//13
function repeat(string, times) {
    let result = '';
    for (let i = 0; i < times; i++) {
        result += string;
    }
}

class TextCell {
    constructor(text) {
        this.text = text.split('\n');
    }

    minWidth() {
        return this.text.reduce((width, line) => Math.max(width, line.length), 0);
    }

    minHeight() {
        return this.text.length;
    }

    draw(width, height) {
        const result = [];
        for (let i = 0; i < height; i++) {
            const line = this.text[i] || '';
            result.push(repeat(' ', width - line.length) + line);
        }
        return result;
    }
}

class StretchCell {
    constructor(inner, width, height) {
        this.inner = inner;
        this.width = width;
        this.height = height;
    }

    minWidth() {
        return Math.max(this.inner.minWidth(), this.width);
    }

    minHeight() {
        return Math.max(this.inner.minHeight(), this.height);
    }

    draw(width, height) {
        return this.inner.draw(width, height);
    }
}

const sc = new StretchCell(new TextCell('abc'), 1, 2);
console.log(sc.minWidth());
console.log(sc.minHeight());
console.log(sc.draw(3, 2));


//14
console.log('\n14')
function logFive(sequence) {
    for (let i = 0; i < 5; i++) {
        if (!sequence.next()) {
            break;
        }
        console.log(sequence.current());
    }
}

function ArraySeq(array) {
    this.index = -1;
    this.array = array;
}

ArraySeq.prototype.next = function () {
    if (this.index >= this.array.length - 1) {
        return false;
    }
    this.index += 1;
    return true;
};
ArraySeq.prototype.current = function () {
    return this.array[this.index];
};

function RangeSeq(from, to) {
    this.from = from;
    this.to = to;
    this.index = -1;
}

RangeSeq.prototype.next = function () {
    if (this.from + this.index >= this.to) {
        return false;
    }
    this.index += 1;
    return true;
};

RangeSeq.prototype.current = function () {
    return this.from + this.index;
}


logFive(new ArraySeq([1, 2]));
logFive(new ArraySeq([1, 6, 2, 3, 4, 5, 7, 6]));
logFive(new RangeSeq(100, 1000));



//15
console.log('\n15')
function Card(from, to) {
    this.from = from;
    this.to = to;
    this.show = function () {
        return `${this.from} -> ${this.to} is this card!`
    }
}

let c1 = new Card("Екатеринбург", "Москва");

console.log(c1.show())



//16
console.log('\n16')
class Human {
    constructor(name, age, height) {
        this.name = name;
        this.age = age;
        this.height = height;
    }
    getInfo() {
        return `${this.name}, ${this.age}, ${this.height}`;
        
    }
    get firstname() {
        return this.name;
    };
}
let humans = [new Human("Коля", 23, 180), 
new Human("Даша", 19, 170), 
new Human("Ваня", 18, 192), 
new Human("Петя", 45, 178), 
new Human("Вася", 34, 197), 
new Human("Джони", 40, 168), 
new Human("Катя", 37, 160), 
new Human("Петя", 29, 200), 
new Human("Соня", 21, 172), 
new Human("Женя", 25, 175)]



//18
console.log('\n18')
let dt1 = new Date(2045, 0, 1);
console.log(dt1);



//19
console.log('\n19')
let dt2 = parseInt(new Date() / 1000);
console.log(dt2)



//20
console.log('\n20')
function getDays(year, month) {
    return (new Date(year, month, 1) - new Date(year, month - 1, 1)) / 1000 / 3600 / 24;
}
console.log(getDays(2020, 8))