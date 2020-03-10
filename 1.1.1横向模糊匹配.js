//正则表达式是匹配模式,样么匹配字符,要么匹配位置

//1.1两种模糊匹配
//如果正则只有精确匹配是没多大意义的比如 /hello/也只能匹配字符串中的 "hello" 这个子串
var regex=/hello/;
console.log(regex.test("hello"));
//1.1.1横向模糊匹配
//横向模糊指的是一个正则可匹配的字符串的长度不是固定的可以是多种情况的。
//其实现的方式是使用量词,譬如{m,n},表示连续出现最少m次,最多n次
//比如正则 /ab{2,5}c/ 表示匹配这样一个字符串：第一个字符是 "a"，接下来是 2 到 5 个字符 "b"，最后是字符 "c"。
var regex = /ab{2,5}c/g
var string = "abc abbc abbbc abbbbc abbbbbc abbbbbbc";
console.log(string.match(regex))
//g是正则的一个修饰符.表示全局匹配globald