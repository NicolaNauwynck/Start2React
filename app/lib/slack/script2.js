var Message = React.createClass({displayName: "Message",
  getInitialState:function(){
    return {};
  },
  render: function(){
    return (
      React.createElement("div", {className: "message"}, 
        React.createElement("img", {src: ""}), 
        React.createElement("div", null, 
          React.createElement("h3", null, "Name"), 
          React.createElement("p", null, "Content")
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
    return {};
  },
  render: function(){
    return (
      React.createElement("div", null, 
        React.createElement(Message, null), 
        React.createElement(Form, null)
      )
    )
  }
});

ReactDOM.render(React.createElement(Main, null), document.getElementById("root"));