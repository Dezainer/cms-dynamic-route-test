import React from 'react';

import modules from 'user';
import components from '_components';

export default class Modules extends React.Component{
	render(){

		var userComps = modules[this.props.params.module].components;

		var content = [];

		for (var i = userComps.length - 1; i >= 0; i--) {
			var Comp = components[userComps[i].name];
			var props = userComps[i].props;

			content.push(<Comp {...props}/>);
		}

		return(
			<div>
				{content}
			</div>
		)
	}
}