var Message = React.createClass({displayName: "Message",
  getInitialState:function(){
    return {};
  },
  render: function(){  
    return (  
      React.createElement("div", {className: "message"}, 
        React.createElement("img", {src: ""}), 
        React.createElement("div", null, 
          React.createElement("h3", null, this.props.message.Name), 
          React.createElement("p", null, this.props.message.Content)
        )
      )
    )
  }
});

var Form = React.createClass({displayName: "Form",
  render: function(){
    return (
      React.createElement("form", null, 
        React.createElement("input", {placeholder: "Message"})
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
        component.setState({messages:data});
      })
    },1000);
  },
  render: function(){
    var messages = [];
    for(var i = 0; i < this.state.messages.length; i++) {
      messages.push(React.createElement(Message, {key: i, message: this.state.messages[i]})) 
    }
    return (
      React.createElement("div", null, 
        messages, 
        React.createElement(Form, null)
      )
    )
  }
});

ReactDOM.render(React.createElement(Main, null), document.getElementById("root"));