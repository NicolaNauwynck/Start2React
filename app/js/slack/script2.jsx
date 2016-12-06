var Message = React.createClass({
  getInitialState:function(){
    return {};
  },
  render: function(){
    return (
      <div className="message">
        <img src="" />
        <div>
          <h3>Name</h3>
          <p>Content</p>
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
    return {};
  },
  render: function(){
    return (
      <div>
        <Message />
        <Form />
      </div>
    )
  }
});

ReactDOM.render(<Main />, document.getElementById("root"));