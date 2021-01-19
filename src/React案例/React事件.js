import React from 'react';
import ReactDOM from 'react-dom';  

// React 事件
// 1. 绑定属性的命名，采用的是驼峰命名法
// 2. {} 传入一个函数，而不是字符串

class ParentCom extends React.Component{
	
	constructor(props){
		super(props)
		
		// this.parentEvent = this.parentEvent.bind(this)
	}	 	
	
	// render 返回视图模板
	render(){
		return(		
		<div>
			{/**<form action="http://www.baidu.com" >*/}
				<div className="child"  onClick={this.parentEvent}>
					<h1> hello forest </h1>
					<button>提交</button>
				</div>
			{/**</form>*/}
			
			{/**如何给函数传值？*/}
			
			<button onClick={(e)=>{this.parentEvent1('msg: helloworld', e)}}>如何给函数传值？ > 匿名函数 </button>
			
			{/** 不使用ES6箭头传递多个参数的方式 */}
			<button onClick={function(e){this.parentEvent1('msg: helloworld', e)}.bind(this)}> 不使用ES6箭头传递多个参数的方式 </button>
		</div>
		)		
	}
	
	//如果不想绑定，就写箭头函数
	parentEvent=(e)=>{
		console.log(e.preventDefault)
		
		e.preventDefault()
		// return false;  原生阻止跳转
	}
	
	
	parentEvent1=(msg, e)=>{
		console.log(msg)
		console.log(e)
	}
	
}




ReactDOM.render(
  <ParentCom />,
  document.querySelector("#root")
);
