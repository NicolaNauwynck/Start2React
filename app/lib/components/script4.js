var Button = React.createClass({displayName: "Button",
  getInitialState: function(){
    return {counter: 0};
  },
  handleClick: function(){
    this.setState({counter: this.state.counter +1})
  },
  render: function(){
    return (
      React.createElement("button", {onClick: this.handleClick}, this.state.counter)
    )
  }
});

var Result = React.createClass({displayName: "Result",
  render: function(){
    return (
      React.createElement("div", null, "Total: 0")
    )
  }
});

var Main = React.createClass({displayName: "Main",
  render: function(){
    return (
      React.createElement("div", null, 
        React.createElement(Button, null), 
        React.createElement(Result, null)
      )
    )
  } 
});

ReactDOM.render(React.createElement(Main, null), document.getElementById("root"));
