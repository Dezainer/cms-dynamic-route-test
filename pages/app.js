import React from 'react';

export default class App extends React.Component{
	render(){
		return(
			<div>
				<h1>CMS Test</h1><br/>
				{this.props.children}
			</div>
		)
	}
}