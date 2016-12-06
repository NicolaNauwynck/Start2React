var Button = React.createClass({displayName: "Button",
	getInitialState: function(){
		return {counter: 0};
	},
	render: function(){
		return (
			React.createElement("button", null, this.state.counter)
		)
	}
});

ReactDOM.render(React.createElement(Button, null), document.getElementById("root"));
