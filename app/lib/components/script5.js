var Button = React.createClass({displayName: "Button",
  render: function(){
    return (
      React.createElement("button", {onClick: this.props.mainHandleClick}, "+1")
    )
  }
});

var Result = React.createClass({displayName: "Result",
  render: function(){
    return (
      React.createElement("div", null, "Total: ", this.props.mainCounter)
    )
  }
});

var Main = React.createClass({displayName: "Main",
  getInitialState: function(){
    return {counter: 0};
  }, 
  handleClick: function(){
    this.setState({counter: this.state.counter +1});
  }, 
  render: function(){
    return (
      React.createElement("div", null, 
        React.createElement(Button, {mainHandleClick: this.handleClick}), 
        React.createElement(Result, {mainCounter: this.state.counter})
      )
    ) 
  }
}); 

ReactDOM.render(React.createElement(Main, null), document.getElementById("root"));