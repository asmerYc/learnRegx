//纵向模糊匹配,一个正则匹配的字符串,具体到某一位字符时,她可以不是某个确定的字符,可以有多种可能
//其实现的方式是使用字符组,譬如[abc],表示该字符是可以为字符"a""b""c"中的任何一个
var regex = /a[123]b/g
var string = "a0b a1b a2b a3b a4b";
console.log(string.match(regex)) //[ 'a1b', 'a2b', 'a3b' ]