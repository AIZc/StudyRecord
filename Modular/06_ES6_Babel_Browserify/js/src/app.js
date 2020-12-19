/*
* 主文件，用于汇总各个模块
* */

//在es6的模块化规范中，用哪一种方式引入，取决于用何种方式暴露的。

//引入module1，module1是【分别暴露】的
import {name,getName} from "./module1";

//【另外一种写法】：引入module1，module1是【分别暴露】的，此种引入方式会将module1暴露的内容，收集成一个对象
import  * as module1 from './module1'


//引入module2,module2是【统一暴露】的
// import {name,getName} from './module2'     //会和第八行的命名冲突


//【另外一种写法】，引入module2,module2是【统一暴露】的，此种引入方式会将module2暴露的内容，收集成一个对象
import * as module2 from "./module2"

//引入module2,module2是【统一暴露】的（module2里面给暴露的内容起了别名）
import {nameZ,getNameZ} from './module2'

//【引入module3,module3是默认暴露的】
import module3 from './module3'

//如果模块是默认暴露的，尽量就不要用如下的写法
//import * as module3 from './module3'

//引入module4，module4里用了多种暴露的方式
// import module4,{arr0,bar,foo,str,student,d1} from './module4'
import module4,{arr0,bar,foo,str,student,d1} from "./module4";
//引入第三方模块uniq，几乎所有的第三方模块，都用默认暴露的方式。
import uniq from 'uniq'

//1.
console.log(name);
getName();
console.log(module1.name);
module1.getName()

//2.
console.log(nameZ);
getNameZ();
console.log(module2.nameZ);
module2.getNameZ();

//3.
console.log(module3);

//4.

console.log(module4);

console.log(arr0);
bar()
foo()

console.log(str);
console.log(student);
console.log(d1);


console.log(uniq([1, 2, 3, 4, 666]));
