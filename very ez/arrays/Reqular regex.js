// 1. Объявление

// const regExp = /love/gmi;
// const regConstruct = new RegExp('love', 'gmi');
//
// function checkSubStr(str, subStr){
//     const regExp = new RegExp(subStr);
//     return regExp.test(str);
// }
//
// console.log(checkSubStr('I love you', 'love'));

// 2. Флаги

// i - поисковое выражение нечувствительно к регистру
// g - глобальный поиск
// m - мультистроковый поиск
//


// console.log(/LOvE/i.test('I love you'));
// console.log('I love you love'.match(/love/g));

const str = `1 cat
2 cat
3 cat`;
console.log(str.match(/^\d/gm));

// 3. Методы
