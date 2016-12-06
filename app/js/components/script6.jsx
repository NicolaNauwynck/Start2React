var Button = React.createClass({
  localHandleClick: function() {
    this.props.mainHandleClick(this.props.increment);
  },
  render: function(){
    return (
      <button onClick={this.localHandleClick}>+{this.props.increment}</button>
    )
  }
});

var Result = React.createClass({
  render: function(){
    return (
      <div>Total: {this.props.mainCounter}</div>
    )
  }
});

var Main = React.createClass({
  getInitialState: function(){
    return {counter: 0};
  },
  handleClick: function(increment){
    this.setState({counter: this.state.counter +increment});
  },
  render: function(){
    return (
      <div>
        <Button mainHandleClick={this.handleClick} increment={1} />
        <Button mainHandleClick={this.handleClick} increment={2} />
        <Button mainHandleClick={this.handleClick} increment={3} />
        <Button mainHandleClick={this.handleClick} increment={4} />
        <Result mainCounter={this.state.counter}/>
      </div>
    )
  }
});

ReactDOM.render(<Main />, document.getElementById("root"));