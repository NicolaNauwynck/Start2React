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
  handleSubmit: function(e){
    e.preventDefault();
    var messageInput = this.refs.message;
    this.props.addMessage(messageInput.value);  
    messageInput.value = ''
  },
  render: function(){
    return (
      <form onSubmit={this.handleSubmit}> 
        <input placeholder="Message" ref="message"/>
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
  addMessage: function(messageToAdd){
    var component = this;
    var message = convertMessage(messageToAdd);
    $.post(serverUrl, message, function(data) {
      component.setState({messages:component.state.messages.concat(data)});
    });
  },
  render: function(){
    var messages = [];
    for(var i = 0; i < this.state.messages.length; i++) {
      messages.push(<Message key={i} message={this.state.messages[i]} />) 
    }
    return (
      <div>
        {messages}
        <Form addMessage={this.addMessage}/>
      </div>
    )
  }
});

ReactDOM.render(<Main />, document.getElementById("root"));