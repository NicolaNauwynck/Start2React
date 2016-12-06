var Message = React.createClass({displayName: "Message",
  getInitialState:function(){
    return {};
  },
  render: function(){  
    return (  
      React.createElement("div", {className: "message"}, 
        React.createElement("img", {src: getAvatarUrl(this.props.message.Name)}), 
        React.createElement("div", null, 
          React.createElement("h3", null, this.props.message.Name), 
          React.createElement("p", null, this.props.message.Content)
        )
      )
    )
  }
});

var Form = React.createClass({displayName: "Form",
  handleSubmit: function(e){
    e.preventDefault();
    var messageInput = this.refs.message;
    this.props.addMessage(messageInput.value);  
    messageInput.value = ''
  },
  render: function(){
    return (
      React.createElement("form", {onSubmit: this.handleSubmit}, 
        React.createElement("input", {placeholder: "Message", ref: "message"})
      )
    )
  }
});

var Main = React.createClass({displayName: "Main",
  getInitialState:function(){
    return { messages: [""]};
  },
  componentDidMount: function(){
    var component = this;
    setInterval(function(){
      $.get(serverUrl + "room/" + room, function(data){
        var firstMessage = component.state.messages[0];
        if(firstMessage.MessageId !== data[0].MessageId){
          component.setState({messages:data});
          scrollToBottom();
        }
        
      })
    },1000);
  },
  addMessage: function(messageToAdd){
    var component = this;
    var message = convertMessage(messageToAdd);
    $.post(serverUrl, message, function(data) {
      component.setState({messages:component.state.messages.concat(data)});
      scrollToBottom();
    });
  },
  render: function(){
    var messages = [];
    for(var i = 0; i < this.state.messages.length; i++) {
      messages.push(React.createElement(Message, {key: i, message: this.state.messages[i]})) 
    }
    return (
      React.createElement("div", null, 
        messages, 
        React.createElement(Form, {addMessage: this.addMessage})
      )
    )
  }
});

ReactDOM.render(React.createElement(Main, null), document.getElementById("root"));