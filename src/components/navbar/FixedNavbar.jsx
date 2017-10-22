// @flow
import React from 'react';

import { Container, Menu } from 'semantic-ui-react';

type State = {
  activeItem: string
};

class FixedNavbar extends React.Component<{}, State> {
  state = {
    activeItem: 'home'
  };

  handleItemClick = (event: SyntheticEvent<HTMLButtonElement>, name: string) => {
    this.setState({ activeItem: name });
  }

  render() {
    const { activeItem } = this.state;

    return (
      <Container>
        <Menu fixed="top" size="large">
          <Menu.Item
            as='a'
            active={activeItem === 'home'}
            onClick={(e) => this.handleItemClick(e, 'home')}>
            Home
          </Menu.Item>
          <Menu.Item
            as='a'
            active={activeItem === 'about'}
            onClick={(e) => this.handleItemClick(e, 'about')}>
            About
          </Menu.Item>
          <Menu.Item
            as='a'
            active={activeItem === 'contact'}
            onClick={(e) => this.handleItemClick(e, 'contact')}>
            Contact
          </Menu.Item>
        </Menu>
      </Container>
    );
  }
}

export default FixedNavbar;
