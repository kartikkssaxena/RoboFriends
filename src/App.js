import React, { Component } from 'react';
import ErrorBoundary from './Components/ErrorBoundary';
import ShowRobots from './Containers/ShowRobots';

class App extends Component {

  render() {

    return (
      <div className="App ">
        <ErrorBoundary>
          <ShowRobots />
        </ErrorBoundary>

      </div>
    )
  }

}

export default App;
