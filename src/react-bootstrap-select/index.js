require('bootstrap-select');

import React from 'react';
import ReactDOM from 'react-dom';
import {FormControl} from 'react-bootstrap';

class BootstrapSelect extends React.Component {
  componentDidUpdate () {
    this.select.selectpicker('refresh');
    this.container.toggleClass('open', this.state.open);
  }

  componentWillUnmount () {
    this.body.off('click');
    this.button.off('click');
    this.items.off('click');
    this.select.selectpicker('destroy');
  }

  componentWillMount () {
    this.setState({ open: false });
  }

  componentDidMount () {
    var self = this;

    this.body = $('body');
    this.select = $(ReactDOM.findDOMNode(this));
    this.select.selectpicker();

    this.container = this.select.parent();
    this.button = this.container.find('button');
    this.items = this.container.find('ul.dropdown-menu li a');

    this.body.click(function () {
      self.setState({ open: false });
    });

    this.button.click(function (e) {
      e.stopPropagation();
      self.setState({ open: !self.state.open });
    });

    this.items.click(function () {
      if (self.props.multiple) return;
      self.setState({ open: !self.state.open });
    });
  }

  render () {
    return (
      <FormControl {...this.props} componentClass="select" />
    );
  }
}

module.exports = BootstrapSelect;
