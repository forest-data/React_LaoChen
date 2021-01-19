import React from 'react';
import ReactDOM from 'react-dom';  

function ListItem(props){
			
	return (
		<li key={props.index}>
			<h3> {props.index}:{props.data.title} </h3>
			<p> {props.data.content} </p>
		</li>
	)
}

class ListItem2 extends React.Component{
	constructor(props){
		super(props)
	}
	
	render(){
		return (
			<li onClick={(event)=>{this.clickEvent(this.props.index, this.props.data.title, event)}}>
				<h3> {this.props.index}:{this.props.data.title} </h3>
				<p> {this.props.data.content} </p>
			</li>
		)
	}
	
	clickEvent=(index, title, event)=>{
		alert(index + "-" + title)
	}
	
	
}

class Welcome extends React.Component{
	constructor(props){
		super(props)
		
		this.state = {
			list: [
				{
					title: "第一节 React 事件",
					content: "事件内容"
				},
				{
					title: "第二节 数据传递内容",
					content: "数据传递内容"
				},
				{
					title: "第三节 条件渲染内容",
					content: "条件渲染内容"
				},
			]
		}
		
	}
	
	render(){
		
		let listArr = this.state.list.map((item,index)=>{
			return (
			
				// <ListItem key={index} data = {item} index = {index} />
				// <li key={index}>
				// 	<h3> {index}:{item.title} </h3>
				// 	<p> {item.content} </p>
				// </li>
				<ListItem2 key={index} data = {item} index = {index} />
			)
		})
		
		console.log(listArr)
		
		return(
			<div>
				<h1>今天课程内容</h1>
				<ul>
					{listArr}
					<li>
						<h3> 这是标题 </h3>
						<p> 内容 </p>
					</li>
				</ul>
				
				<h1>复杂没有用组件完成列表</h1>
				{
					this.state.list.map((item, index)=>{
						return (
							<li key={index} onClick={(e)=>{this.clickFn(index, item.title, e)}}>
								<h3>{index}-{item.title} </h3>
								<p> {item.content} </p>
							</li>
						)
					})
				}
			</div>
		)
	}
	
	
	clickFn = (index, title, e)=> {
		alert(index + "-" + title)
	}
}

ReactDOM.render(
  <Welcome />,
  document.querySelector("#root")
);
