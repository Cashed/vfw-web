import React from 'react';
import { Button } from 'semantic-ui-react';

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      name: 'Veronica'
    };

    this.changeName = this.changeName.bind(this);
  }

  changeName() {
   let name;

   if (this.state.name === 'Veronica') {
     name = 'Stephen';
   } else {
     name = 'Veronica';
   }

   this.setState({ name });
  }

  render() {
    return (
      <div>
        <h1>Hello, {this.state.name}!</h1>
        <Button color='teal' onClick={this.changeName}>
          Click
        </Button>
    </div>
    );
  }
}

export default Home;
