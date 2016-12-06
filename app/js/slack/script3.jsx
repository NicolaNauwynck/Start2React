var Message = React.createClass({
  getInitialState:function(){
    return {};
  },
  render: function(){  
    return (  
      <div className="message">
        <img src="" />
        <div>
          <h3>{this.props.message.Name}</h3>
          <p>{this.props.message.Content}</p>
        </div>
      </div>
    )
  }
});

var Form = React.createClass({
  render: function(){
    return (
      <form> 
        <input placeholder="Message"/>
      </form> 
    )
  }
});

var Main = React.createClass({
  getInitialState:function(){
    return { messages: [""]};
  }, 
  componentDidMount: function(){
    var component = this;  
    setInterval(function(){
      $.get(serverUrl + "room/" + room, function(data){
        component.setState({messages:data});
      })
    },1000);
  },
  render: function(){
    var messages = [];
    for(var i = 0; i < this.state.messages.length; i++) {
      messages.push(<Message key={i} message={this.state.messages[i]} />) 
    }
    return (
      <div>
        {messages}
        <Form />
      </div>
    )
  }
});

ReactDOM.render(<Main />, document.getElementById("root"));