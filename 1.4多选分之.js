//一个模式可以实现横向和纵向模糊匹配,而多选分支可以支持多个子模式任选其一
// 具体形式如下:(p1 | p2 | p3)其中p1,p2,p3都是子模式,用| (管道符)分隔,表示其中任何之一

//例如要匹配字符串 "good"和 "nice" 可以使用/good|nice/

//测试如下
var regex = /good|nice/g;
var string = "good idea,nice try";
console.log(string.match(regex)); //[ 'good', 'nice' ]