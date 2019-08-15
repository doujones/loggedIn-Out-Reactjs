import React from 'react';
import './App.css';


  const App1 = ({name}) =>
   <h1>
  {name}
  </h1>;
  class App extends React.Component {
      state = {
        loggedIn: false
      }
      logIn = () => this.setState({loggedIn: true})
      logOut = () => this.setState({loggedIn: false})
    render(){
    return (
    <div>
      <button onClick={this.logIn}>Log In</button>
      <button onClick={this.logOut}>Log Out</button>
      <div>The user is {
        this.state.loggedIn 
        ? 
        "logged in" : 
        "not logged in"}.
      </div>
      <App1 name="technology"/>
      <App1 name="javascript"/>
      <App1 name="reactjs"/>
      <App1 name="vuejs"/>
   
    </div>
  );
}
}

export default App;
