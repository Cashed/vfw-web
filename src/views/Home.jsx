// @flow
import React from 'react';
import { Container, Header, Segment, Visibility } from 'semantic-ui-react';

import { FixedNavbar, Navbar } from '../components';

type State = {
  visible: boolean
};

class Home extends React.Component<{}, State> {
  state = {
    visible: false
  };

  hideFixedMenu = () => {
    this.setState({ visible: false });
  }

  showFixedMenu = () => {
    this.setState({ visible: true });
  }

  render() {
    const { visible } = this.state;

    return (
      <div>
        { visible ? <FixedNavbar /> : null }

        <Visibility
          onBottomPassed={this.showFixedMenu}
          onBottomVisible={this.hideFixedMenu}
          once={false}>

          <Segment
            inverted
            textAlign="center"
            style={{minHeight: 700, padding: '1em 0em'}}
            vertical>

            <Navbar />

            <Container text>
              <Header
                as="h1"
                content="VFW Post 6310"
                inverted
                style={{
                  fontSize: '4em',
                  fontWeight: 'normal',
                  marginBottom: 0,
                  marginTop: '3em'}} />
              <Header
                as="h2"
                content="Tolleson, AZ"
                inverted
                style={{
                  fontSize: '1.7em',
                  fontWeight: 'normal'
                }} />
            </Container>

          </Segment>

        </Visibility>
      </div>
    );
  }
}

export default Home;
