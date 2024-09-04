import React from 'react';

class Loading extends React.Component {
  componentWillUnmount(): void {
    console.log('Component Loading will unmount');
  }
  
  render(): React.ReactNode {
    return <div>Loading...</div>
  };
};

export default Loading;
