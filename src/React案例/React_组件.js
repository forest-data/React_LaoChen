{/**
组件
函数式组件
类组件
*/}

import React from 'react';
import ReactDOM from 'react-dom';


//函数式组件， 返回的还是模板 也就是ui界面     函数内部不需要再有函数，类组件 动态组件
// function Childcom(){   
// 	
// 	let title = <h2> 我是Forrest </h2>
// 	let weather = "下雨"
// 	let isGo = weather == "下雨"? "不出门":"出门"
// 	
// 	return (
// 		<div>
// 			<h1> 函数式组件 </h1>
// 			{title}
// 			
// 			<div>
// 				是否出门?
// 				<span>{isGo}</span>
// 			</div>
// 		</div>
// 	)
// }



function Childcom(props){	// props 传参
	
	console.log(props)
	let title = <h2> 我是Forrest </h2>
	let weather = props.weather
	let isGo = weather == "下雨"? "不出门":"出门"
	
	return (
		<div>
			<h1> 函数式组件 </h1>
			{title}
			
			<div>
				是否出门?
				<span>{isGo}</span>
			</div>
		</div>
	)
}


// 类组件    
class HelloWorld extends React.Component {

	render(){
		console.log(this)
		return (
			<div>
				<h1>类定义组件</h1>
				<h1>hello: {this.props.abc}</h1>
				<Childcom weather={this.props.weather}/>   // 传递参数，便可看到另一个console看到打印内容
			</div>
		)
		
	}
	
}




ReactDOM.render(
  // <Childcom weather="出太阳" sky="蓝天"/>,
  <HelloWorld abc="出太阳" weather="下雨" />,
  document.querySelector("#root")
);
