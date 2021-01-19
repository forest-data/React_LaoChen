import React from 'react';
import ReactDOM from 'react-dom';


// React State(相当于Vue中的DATA, 但是使用方式跟VUE不一致)

class Clock extends React.Component{
	
	// 构造函数，实例化前需要执行构造函数
	constructor(props){
		super(props) //继承父类的this对象
				
		//状态 (数据)  决定视图 view
		this.state = {
			time : new Date().toLocaleTimeString()
		}
		console.log(this.state)
		this.a = this.a.bind(this)
		 
	}
	
	a(){
		alert('123')
	}
	
	//渲染部分，视图部分
	render(){
		// console.log(this)
		this.state.time = new Date().toLocaleTimeString()
		return (
			<div>
				<h1> 当前时间: {this.state.time}</h1>
				<button onClick = { this.a } >ssss</button>
			</div>
		)
	}
}



ReactDOM.render(
  <Clock weather="hao"/>,
  document.querySelector("#root")
);

setInterval(()=>{
	ReactDOM.render(
	  <Clock weather="hao"/>,
	  document.querySelector("#root")
	)
	// console.log(new Date())
}, 1000)