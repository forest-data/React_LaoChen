import React from 'react';
import ReactDOM from 'react-dom';  

// 调用父元素函数从而操作父元素的数据，从而实现数据从子元素传递至父元素
// 子传父
class ParentCom extends React.Component{
	
	constructor(props){
		super(props)
		this.state = {
			childData: null
		}
	}	 
	
	setChildData=(data)=>{
		this.setState({
			childData: data
		})	
	}
	
	render(){
		return(		
		<div>
			<h1>子元素传递给父元素的数据: {this.state.childData}</h1>
			<ChildCom setChildData={this.setChildData}/>
		</div>
		)		
	}
	
}

class ChildCom extends React.Component{
	
	constructor(props){
		super(props)	
		this.state = {
			msg: "Hello Forest"
		}
		
		// this.sendData = this.sendData.bind()
	}	
	
	sendData=()=>{
		console.log(this.state.msg)
		//将子元素传递给到父元素，实际就是调用父元素传递进来的父元素函数
		this.props.setChildData(this.state.msg)
	}
	
	render(){	  
		return (
			<div>
				<button onClick = {this.sendData}>传递helloworld给父元素</button> 
				<button onClick = {()=>{this.props.setChildData('直接调用props的函数')}}>props</button> 
			</div>
		)
		
	}
	
	
	
}


ReactDOM.render(
  <ParentCom />,
  document.querySelector("#root")
);
