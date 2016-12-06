var Button = React.createClass({
  render: function(){
    return (
      <button onClick={this.props.mainHandleClick}>+1</button>
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
  handleClick: function(){
    this.setState({counter: this.state.counter +1});
  }, 
  render: function(){
    return (
      <div>
        <Button mainHandleClick={this.handleClick} />
        <Result mainCounter={this.state.counter}/>
      </div>
    ) 
  }
}); 

ReactDOM.render(<Main />, document.getElementById("root"));