function deepClone(obj) {
    //基本型態或函數直接返回
    if (!(obj instanceof Object) || typeof obj === 'function') return obj;

    let newObj = {};
    if (obj instanceof Array) newObj = [];

    for (let p in obj) {
        if (!(p instanceof Object) || typeof p === 'function') {
            //基本型態或函數
            newObj[p] = obj[p];
        } else {
            //繼續複製對象裡面的對象
            newObj[p] = deepClone(obj[p]);
        }
    }

    return newObj;
}

//example
/****************************************************************/
let p = {
    name: 'bob',
    friends: ['jack', 'rose']
}
let p2 = deepClone(p);

p2.friends.push('lily');
console.log(p2.friends); //["jack". "rose", "lily"]
console.log(p.friends); //["jack", "rose"]
console.log(p.friends == p2.friends); //false
/****************************************************************/