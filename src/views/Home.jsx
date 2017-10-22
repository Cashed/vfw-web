// @flow
import React from 'react';
import {Button} from 'semantic-ui-react';

type State = {
  name: string
};

class Home extends React.Component<{}, State> {
  state = {
    name: 'Veronica'
  };

  changeName = (event: SyntheticEvent<HTMLButtonElement>) => {
    console.log(event.currentTarget);
    let name;

    if (this.state.name === 'Veronica') {
      name = 'Stephen';
    } else {
      name = 'Veronica';
    }

    this.setState({name});
  }

  render() {
    return (
      <div>
        <h1>Hello, {this.state.name}!</h1>
        <Button color="teal" onClick={this.changeName}>
          Click
        </Button>
      </div>
    );
  }
}

export default Home;
