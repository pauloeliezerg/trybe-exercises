import React from 'react';

class App extends React.Component {
  state = {
    count: 1,
  };

  componentDidMount(): void {
      console.log('Component did mount!');
  };

  componentDidUpdate(): void {
      console.log('Component did uptade!');
  };

  handleClick = () => {
    const { count } = this.state;

    this.setState({
      count: count + 1,
    });
  };

  render(): React.ReactNode {
    const { count } = this.state;
    return (
      <>
        <h1>Counter</h1>
        <button
          onClick={ this.handleClick }
        >
          { count }
        </button>
      </>
    );
  }
}

export default App;
