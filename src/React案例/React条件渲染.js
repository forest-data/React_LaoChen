import React from 'react';
import ReactDOM from 'react-dom';

// map 和 forEach的区别
let arr = [1,2,3,4,5,6]

//对数组直接进行循环，相当于for循环
// item 就是每一项
let result = arr.forEach((item, index, arr)=>{  
	console.log(item)
	console.log(index)
})
{/***/}
console.log(result)

let arr2 = ['相加', '苹果', '雪梨']
//map 对数组的每一项进行加工，加工完成之后返回一个新的数组
let result2 = arr2.map((item, index, arr)=>{
	let str = index + item + index
	return str
})
console.log(result2)


let arr3 = [1,2,3,4,5,6,7]
//filter 过滤，就是将想要的内容进行筛选，不要内容去除,最终返回想要的内容

let result3 = arr3.filter((item,index)=>{
	//通过返回true还是false进行选择，true就是想要，false就是去除
	if(item%2==0){
		return true;
	}else{
		return false;
	}
})


console.log(result3)

// reduce是对整个数组进行整合, 比如要做一个将数组里面所有的数字进行整合
//将数组每一项内容整合后，返回1个内容
let arr4 = [1,2,3,4,5,6,7,8,9]
//reduce((初始值，下一个值，索引值))
let result4 = arr4.reduce((pre, next, index)=>{
	console.log(pre);
	console.log(next);
	console.log(index);
	return pre+next
}, 0)

console.log(result4)

// for .. in 主要用于遍历对象的,不适用于遍历数组. key没有顺序，不适合遍历数组

// for .. of 可以用来遍历数组,类数组的对象,字符串, set/map, generator

let obj = {
	name: 'forest',
	type: '帅',
	content: '前端'
}

for(let key in obj){
	console.log(key, obj[key])
}

let arr5 = ["fanbingbing", '李晨', '鹿晗']
for(let item of arr){
	console.log(item)
}

