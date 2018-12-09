import React, { Component } from 'react';
import './App.css';
import { Switch } from './Switch'

class App extends Component {
  constructor(props) {
    super(props);
    let checked = false;
    
    this.state = { checked };
    this.onChange = this.onChange.bind(this);
  }

  onChange(checked) {
    this.setState({checked});
  }

  render() {
    return (
      <div className="App">
        Test
        <Switch
          checkedString="On"
          uncheckedString="Off"
          onChange={this.onChange}></Switch>
        <div>{this.state.checked ? "switch is on" : "switch is off"}</div>
        Disable Switch
        <Switch
          checkedString="On"
          uncheckedString="Off"
          onChange={this.onChange}
          disabled={true}></Switch>
      </div>

    );
  }
}

export default App;
