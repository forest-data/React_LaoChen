import React from 'react';
import ReactDOM from 'react-dom';  

function UserGreat(props){
	return(
		<h1> 欢迎光临 </h1>
	)
}

function UserLogin(props){
	return (
		<h1>请先登录</h1>
	)
}

class ParentCom extends React.Component{
	
	constructor(props){
		super(props)
		
		this.state = {
			isLogin: true
		}
	}
	
	render(){
		let element = null;
		
		if(this.state.isLogin){ 
			element = <UserGreat />
		}else{ 
			element = <UserLogin />
		}
		
		
		return (
			<div>
			<h1>这是头部</h1>
			{element}
			<h1>这是三元运算符的操作</h1>
			{this.state.isLogin ? <UserGreat /> : <UserLogin />}
			<h1>这是尾部</h1>
			</div>
		)
		
	}
	
}

ReactDOM.render(
  <ParentCom />,
  document.querySelector("#root")
);
