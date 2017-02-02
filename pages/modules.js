import React from 'react';

import modules from 'user';
import components from '_components';

export default class Modules extends React.Component{
	render(){

		var userComps = modules[this.props.params.module].components;
		console.log("Nome no Mongo: "+userComps);

		var content = [];

		for (var i = userComps.length - 1; i >= 0; i--) {
			var Comp = components[userComps[i]];
			content.push(<Comp/>);
		}

		return(
			<div>
				{content}
			</div>
		)
	}
}