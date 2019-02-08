import React, { Component } from 'react';
import RepositoryList from './components/RepositoryList';
import { Button } from 'antd';
class App extends Component {
  render() {
    return (
      <div className="App">
        <RepositoryList/>
        <Button type="primary">Button</Button>
      </div>
    );
  }
}

export default App;
