import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Grid, Row, Col, Form, FormGroup } from 'react-bootstrap';
import { ListView } from 'patternfly-react';

import __ from '../../i18n';
import { loadRedHatRepositories } from '../../actions/RedHatRepositories';
import { loadRedHatRepositorySets } from '../../actions/RedHatRepositorySets';
import MultiSelect from '../../components/MultiSelect';
import SearchInput from '../../components/SearchInput';
import RedHatRepository from '../../components/RedHatRepository';

const loadData = (props) => {
  props.loadRedHatRepositories();
  props.loadRedHatRepositorySets();
};

class RedHatRepositoriesPage extends Component {
  static defaultProps = {
    redHatRepositoriesResponse: {},
    disabledRedHatRepositories: []
  };

  static propTypes = {
    loadRedHatRepositories: PropTypes.func.isRequired,
    loadRedHatRepositorySets: PropTypes.func.isRequired,
    redHatRepositoriesResponse: PropTypes.object,
    disabledRedHatRepositories: PropTypes.arrayOf(PropTypes.object)
  };

  componentWillMount() {
    loadData(this.props);
  }

  render() {
    console.log('RENDER!');
    const options = [
      { value: 'rpm', label: __('RPM') },
      { value: 'source-rpm', label: __('Source RPM') },
      { value: 'debug-rpm', label: __('Debug RPM') },
      { value: 'kickstarter', label: __('Kickstarter') },
      { value: 'ostree', label: __('OSTree') },
      { value: 'beta', label: __('Beta') },
      { value: 'other', label: __('Other') }
    ];

    let enabledRedHatRepositories = [];

    if (this.props.redHatRepositoriesResponse.results) {
      enabledRedHatRepositories = (
        this.props.redHatRepositoriesResponse.results.map(redhatRepository =>
          <RedHatRepository redHatRepository={redhatRepository} />
        )
      );
      console.log(enabledRedHatRepositories);
    }

    return (
      <Grid bsClass="container-fluid">
        <h1>
          {__('Red Hat Repositories')}
        </h1>

        <Row className="toolbar-pf">
          <Col sm={12}>
            <Form className="toolbar-pf-actions">
              <FormGroup className="toolbar-pf-filter">
                <SearchInput />
              </FormGroup>

              <FormGroup className="toolbar-pf-filter">
                <MultiSelect options={options} />
              </FormGroup>
            </Form>
          </Col>
        </Row>

        <Row>
          <Col sm={12}>
            {/* <SearchFilter></SearchFilter>*/}
          </Col>
        </Row>

        <Row>
          <Col sm={6}>
            <h2>
              {__('Disabled Repositories')}
            </h2>

            <ListView />
          </Col>

          <Col sm={6}>
            <h2>
              {__('Enabled Repositories')}
            </h2>
            <ListView>
              {enabledRedHatRepositories}
            </ListView>
          </Col>
        </Row>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => {
  const props = {
    redHatRepositoriesResponse: state.entities.redHatRepositories,
    disabledRedHatRepositories: state.entities.redHatRepositorySets,
    loadRedHatRepositories: state.loadRedHatRepositories,
    loadRedHatRepositorySets: state.loadRedHatRepositorySets
  };

  return props;
};

export default connect(mapStateToProps, {
  loadRedHatRepositories,
  loadRedHatRepositorySets
})(RedHatRepositoriesPage);
