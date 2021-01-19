import React from 'react';
import ReactDOM from 'react-dom';  


// 将列表的内容拼装成数组放置模板当中
// 将数据拼装成数组的JSX对象

let arr = ['Forest', 'Ch', 'Beck', 'Camila']

let arrHtml = [<li>Forest</li>,<li>Ch</li>,<li>Beck</li>,<li>Camila</li>]

class Welcome extends React.Component{
	constructor(props){
		super(props)
	}
	
	render(){
		return(
			<div>
				<ul>
					{arrHtml}
				</ul>
			</div>
		)
	}
	
}

ReactDOM.render(
  <Welcome />,
  document.querySelector("#root")
);
