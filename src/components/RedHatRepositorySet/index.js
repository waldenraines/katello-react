import React from 'react';
import PropTypes from 'prop-types';

import { ListViewItem, ListViewItemContainer, ListViewItemExpansion } from '../../patternfly-react/';

class RedHatRepositorySet extends React.Component {
  static defaultProps = {
    redhatRepositorySetName: '',
    redhatRepositories: []
  };

  static propTypes = {
    redhatRepositorySet: PropTypes.object.isRequired
  };

  componentWillMount() {
    this.setState({ expanded: false });
  }

  listItemClick() {
    this.setState({ expanded: !this.state.expanded });
  }

  render() {
    return (
      <ListViewItem isActive={this.state.expanded}>
        <ListViewItemContainer
          isExpansionItem
          itemClicked={e => this.listItemClick(e)}
          isActive={this.state.expanded}
        >
          {this.props.redhatRepositorySet.name}
        </ListViewItemContainer>
        <ListViewItemExpansion isActive={this.state.expanded}>

        </ListViewItemExpansion>
      </ListViewItem>
    );
  }
}

export default RedHatRepositorySet;
