import React from 'react';
import ReactDOM from 'react-dom';


// React State(相当于Vue中的DATA, 但是使用方式跟VUE不一致)

class Clock extends React.Component{
	
	// 构造函数，实例化前需要执行构造函数
	constructor(props){
		super(props) //继承父类的this对象
				
		//状态 (数据)  决定视图 view    构造函数初始化数据，尽量将需要改变的数据初始化到state中
		//切勿直接修改state数据，直接state重新渲染内容，需要使用setState
		this.state = {
			time : new Date().toLocaleTimeString()
		}
		console.log(this.state) 
		 
	}
	 
	
	//渲染部分，视图部分
	render(){
		console.log(this.state.time)
		this.state.time = new Date().toLocaleTimeString()
		return (
			<div>
				<h1> 当前时间: {this.state.time}</h1>
				<button onClick = { this.a } >ssss</button>
			</div>
		)
	}
	
	// 渲染完 有 周期函数   生命周期函数,组件渲染完时的函数
	componentDidMount(){
		setInterval(()=>{
			console.log(this.state.time)
			// this.state.time = new Date().toLocaleTimeString()	
			this.setState({
				time: new Date().toLocaleTimeString()
			})
			console.log(this.state.time)
		},1000)
	}
	
}



ReactDOM.render(
  <Clock weather="hao"/>,
  document.querySelector("#root")
);
