import React from 'react';
import ReactDOM from 'react-dom';
import "./App.css"

//方式1
let exampleStyle = {
	background: "skyblue",
	borderBottom: "1px solid red",
	backgroundImage: "url(https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png)"
}

let element = (
	<div>
		<h1 style={exampleStyle}> Hello World</h1>
	</div>
)

//方式2
let classStr = "redBg"

let element2 = (
	<div>
		<h1 className = {classStr}> Hello Forest </h1>
	</div>
)

//方式3  数组多个样式
let classStr2 = ['abc', 'redBg'].join(' ')
let element3 = (
	<div>
		{/** 这里写注释 */}
		<h1 className = {classStr}> Hello Forest </h1>
	</div>
)


ReactDOM.render(
  element,
  // document.getElementById('root')
  document.querySelector("#root")
);

