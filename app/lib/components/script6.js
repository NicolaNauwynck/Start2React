var Button = React.createClass({displayName: "Button",
  localHandleClick: function() {
    this.props.mainHandleClick(this.props.increment);
  },
  render: function(){
    return (
      React.createElement("button", {onClick: this.localHandleClick}, "+", this.props.increment)
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
  handleClick: function(increment){
    this.setState({counter: this.state.counter +increment});
  },
  render: function(){
    return (
      React.createElement("div", null, 
        React.createElement(Button, {mainHandleClick: this.handleClick, increment: 1}), 
        React.createElement(Button, {mainHandleClick: this.handleClick, increment: 2}), 
        React.createElement(Button, {mainHandleClick: this.handleClick, increment: 3}), 
        React.createElement(Button, {mainHandleClick: this.handleClick, increment: 4}), 
        React.createElement(Result, {mainCounter: this.state.counter})
      )
    )
  }
});

ReactDOM.render(React.createElement(Main, null), document.getElementById("root"));