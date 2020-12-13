// alert('i love you')
// console.log('i love you!')
// document.write("111")

a = 2;
b = 10;

a = a+b
b = a-b
a = a-b
console.log(a,b)

// a = true
// b = false
// console.log(a,b)


// a = null
// console.log(a)

// var b = true;
// var a;
// console.log(a,typeof a,typeof b)
//
// var isbool = true;
// console.log(typeof typeof typeof isbool)

// var b = null;
// var a = undefined;
// console.log(a+b)
// console.log(a/b)
// console.log(a*b)
// console.log(a-b)
// console.log(typeof Number(a))


// a = '1111.1';
// console.log(parseInt(a))

// if(0){
//     console.log('11')
// }else if(1){
//     console.log('00')
// }


// var money = parseFloat(prompt("你有多少钱?"))


// var num = parseInt(prompt('请输入一个整数,代表星期几:'));
//
// switch(num){
//     case 1:
//         alert('周一');
//         break;
//     case 2:
//         alert('周二');
//         break;
//     case 3:
//         alert('周三');
//         break;
//     case 4:
//         alert('周四');
//         break;
//     case 5:
//         alert('周五');
//         break;
//     case 6:
//         alert('周六');
//         break;
//     case 7:
//         alert('周日');
//         break;
//     default:
//         alert('请输入和星期对应的数字!')
//         break;
// }

// for(i=0;i<100;i++){
//     document.write('i love you! body~')
//     document.write('<br>')
//     console.log(i+1)
// }


// sum = 0;
// for (let i=0; i<=100; i+=2){
//     console.log(i)
//     sum += i;
// }
// console.log(sum)

// for (var i = 0; i<5; i++){
//     document.write('* * * * * * *','<br>')
// }

// for (i = 0; i<5;i++){
//     for (j=0; j<=i; j++){
//         document.write("*")
//     }
//     document.write("<br>")
// }

//打印乘法表

// for (i = 1; i<=9; i++){
//     for (j=1; j<=9;j++){
//         document.write(i+'*'+j+'='+i*j,'&nbsp;&nbsp;&nbsp;&nbsp')
//         if (i === j){
//             break;
//         }
//     }
//     document.write("<br>")
// }


//数组的定义

// var arr = [1,2,3,4,5]
//
// var arr1 = new Array(1,2,3,4,5,6);
// console.log(arr1)


//数组的长度和索引
// var arr = new Array(1,2,3,4,5)
// console.log(arr.length)
//
// console.log(arr[2])
//
//
// for (var i = arr.length-1;i>=0;i--){
//     console.log(arr[i])
// }


// //从数组末尾加一个数
//
// var arr = [1,2,3,4]
// arr[arr.length] = 5
// console.log(arr)
//
//
// //从数组开头加一个数.
// for (i = arr.length-1;i>=0;i--){
//     arr[i+1] = arr[i]
// }
// arr[0] = 0
// console.log(arr)
//
//
// //从中间加一个数
// for (i = arr.length-1;i>=3;i--){
//     arr[i+1] = arr[i]
// }
//
// arr[3] = 2.5
// console.log(arr)
//
// // 从末尾删除一个
//
// arr.length--;
// console.log(arr)
//
//
// //冲开头删除一个
//
// for (i = 1; i<arr.length; i++){
//     arr[i-1] = arr[i]
// }
// arr.length--;
// console.log(arr)
//
// //从中间删除一个
//
// for (i=3;i<arr.length;i++){
//     arr[i-1] = arr[i]
// }
// arr.length--;
// console.log(arr)


// // 数组最大 最小 平均值
//
// arr = [55,123,44,9999,66,77,1,22]
// max = arr[0];
// min = arr[0];
// sum = 0;
// for (i = 0; i<arr.length; i++){
//     if (arr[i]>max){
//         max = arr[i]
//     }
//     if (arr[i]<min){
//         min = arr[i]
//     }
//     sum += arr[i]
// }
//
// console.log(max,min,sum/arr.length)


// //根据班级人数输入每个人的分数，求平均值
// arr = []
// sum = 0;
// num = parseInt(prompt("请输入班级人数:"))
// for (i = 0; i<num; i++){
//     arr[i] = parseFloat(prompt("请输入成绩."))
//     sum += arr[i]
// }
// alert("平均成绩:"+sum/arr.length)



//翻转数组

// var arr = [1,2,3,4,5]
// // console.log(arr.reverse())
//
// for(i = 0;i < arr.length/2; i++){
//     var temp = arr[i];
//     arr[i]  = arr[arr.length-1-i]
//     arr[arr.length-1-i] = temp;
// }
//
// console.log(arr);

//强化练习1

// arr = []
// count = 0
// for (i=100;i<201;i++){
//     if (i%3===0 || i%7===0){
//         arr[count] = i
//         count ++;
//     }
// }
// console.log(arr)


// 打印三位数  数位上有3或者7的数字
// arr = []
// count = 0
// for (i=100;i<1000;i++){
//     a = String(i)
//     if(a[0]==3 || a[1]==3 || a[2]==3){
//         arr[count] = i
//         count++;
//     }
// }
//
// console.log(arr)
//
// String(11)



// sum = 1
// for (i=1;i<5;i++){
//     sum*=i
// }
// console.log(sum)

// arr = []
// count = 0
// for(i=100; i<1000;i++){
//     f = String(i)
//     a = 1
//     b = 1
//     c = 1
//     for (j=0;j<3;j++){
//         a *= f[0]
//         b *= f[1]
//         c *= f[2]
//     }
//     if (a+b+c === i){
//         arr[count] = i
//         count++;
//     }
// }
// console.log(arr)
//
// function printTriangle(a) {
//     for(var i = 0; i<a; i++){
//         for(var j = 0; j<a-i;j++){
//             document.write('&nbsp;')
//         }
//         for (var k = 0;k<2*i+1;k++){
//             document.write("*")
//         }
//         document.write("<br>")
//     }
// }
//
// printTriangle(6)



