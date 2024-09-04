import React from 'react';
import Loading from './Loading';

class App extends React.Component {
  state = {
    isLoading: true,
    dogImageUrl: '',
  };

  componentDidMount(): void {
      console.log('Component did mount!');
      this.handleFetch();
  };

  componentDidUpdate(): void {
      console.log('Component did uptade!');
  };

  handleFetch = async () => {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await response.json();
    this.setState({
      isLoading: false,
      dogImageUrl: data.message,
    });
  }

  render(): React.ReactNode {
    const { isLoading, dogImageUrl } = this.state;

    if (isLoading) return <Loading />

    return (
      <>
        <h1>Random Dog</h1>
        <img
          src={ dogImageUrl }
        />
      </>
    );
  }
}

export default App;
