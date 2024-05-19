// function stringPairs(str) {
// 	let regex = /air/;
// 	return regex.exec(str);
// }
//
// console.log(stringPairs('airforces'))

// function check(str, subStr){
// 	const reg = new RegExp(subStr, `gmi`);
// 	return str.split(' ').map(elem => elem.search(reg))
// }
//
// console.log(check('Sub str', 'str'));

// const reg = /a|b|s/gi
// console.log(['str', 'newStr', '55555'].map(elem => elem.match(reg)).join(' ').trim());
// console.log(/............/.test('длина пароля'))

const exp = /@yandex|@mail(.ru)/;    // соответствует либо "@yandex.ru" либо "@mail.ru"

const email1 = "tom@mail.ru";
const email2 = "tom@gmail.ru";
const email3 = "tom@yandex.ru";
console.log(exp.test(email1));
console.log(exp.test(email2));
console.log(exp.test(email3));