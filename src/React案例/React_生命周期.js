import React,{Component} from 'react';
import ReactDOM from 'react-dom';

//生命周期的3个状态
// mounting 插入    updating 更新     unmounting 移除

// 生命周期中的钩子函数(方法，事件)
// CompontWillMount 组件将要渲染   CompontDidMount 组件渲染完毕   CompontWillReceiveProps 组件将要接收props数据
// shouldComponentUpdate 返回一个布尔值。在组件接收到新的props或者state时被调用。在初始化时或者使用forceUpdate时不被调用。
// componentWillUpdate 组件将要更新   componentWillUnmount组件将要卸载


class ComLife extends React.Component{
	
	constructor(props){
		super(props)
		this.state = {
			msg:'Hello Forest'
		}
		
		console.log('constructor 构造函数')
	}
	
	componentWillMount(){
		console.log('componentWillMount组件将要渲染')  //ajax
	}
	
	componentDidMount() {
		console.log('componentDidMount组件渲染完毕')   //添加动画
	}
	componentWillReceiveProps(newProps) {
		console.log('componentWillReceiveProps组件接收到新的props或者state时被调用')
	}
	shouldComponentUpdate(newProps, newState) {
		//如果希望更新，就返回为真，不希望更新就返回为false
		console.log('进行判断是否要更新内容')
		if(this.state.msg==="Hello Forest"){
			console.log(true)
			return true;
		}
		
	}
	componentWillUpdate(nextProps, nextState) {
		console.log('componentWillUpdate组件将要更新');
	}
	componentDidUpdate(prevProps, prevState) {
		console.log('componentDidUpdate组件更新完毕')   //增加动画
	}
	componentWillUnmount() {
		console.log('componentWillUnmount组件将要卸载')   //卸载前将数据传递给后台
	}
	
	
	
	render(){
		return (
			<div>
				<h1> {this.state.msg} </h1>
				<button onClick={this.changeMsg}> 组件更新 </button>
			</div>
		)
	}
	
	
	changeMsg=()=>{
		this.setState({
			msg:"HELLO 老陈"
		})
	}
	
}


class ParentCom extends Component{
	constructor(props){
		super(props)
		this.state = {
			isShow : true
		}
	}
	
	
	
	render(){
		if(this.state.isShow){
			return (
				<div>
					<button onClick={this.removeCom}>组件将要移除</button>
					<ComLife />
				</div>
			)
		}else{
			return <h1> 将comlife已移除</h1>
		}
	}
	
	removeCom=()=>{
		this.setState({
			isShow: false
		})
	}
	
}

ReactDOM.render(
    // <ComLife />,
	<ParentCom />,
    document.querySelector('#root')
)