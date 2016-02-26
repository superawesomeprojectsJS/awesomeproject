var React = require('react');

var Main = React.createClass({
  getInitialState: function() {
    return {
      isLoggedIn: false
    }
  }
  render: function() {
    this.state.isLoggedIn ? <Homepage/> : <Login/>;
  } 
})

//comment