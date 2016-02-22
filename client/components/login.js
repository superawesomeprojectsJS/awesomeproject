var React = require('react');
var ReactDOM = require('react-dom');


var Loginpage = React.createClass({
  // getInitialState() {

  // }
  render: function() {
    return (
      <div>
        <form>
          <input type="text" name="e-mail address"></input>
          <input type="text" name="password"></input>
          <input type="submit" value="Login"></input>
        </form>
        <form>
          <input type="text" name="e-mail address"></input>
          <input type="text" name="password"></input>
          <input type="submit" value="Sign Up"></input>
        </form>
      </div>
      )
  }
})

ReactDOM.render(<Loginpage/>, document.getElementById('app'));