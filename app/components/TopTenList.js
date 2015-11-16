"use strict";

let React = require('react');
let LoginForm = require('./LoginForm.js');
let LogoutForm = require('./LogoutForm.js');

module.exports = React.createClass({
	getDefaultProps(){
		return {
			user:null,
			list:{
				items:[],
			}
		}
	},
	render(){
		return (
			<div>
				<h1>My Top Ten List</h1>
				{this.props.user ? <LogoutForm /> : <LoginForm />}
				{this.props.list.items.map((item, index)=>{

					return (
						<div key={"key-"+index}>
							{item.name}
						</div>
					)
				})}				
		</div>
		)
	}
})