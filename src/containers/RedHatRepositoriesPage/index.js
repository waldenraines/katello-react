import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Grid, Row, Col, Form, FormGroup } from 'react-bootstrap';
import { ListView } from 'patternfly-react';

import __ from '../../i18n';
import LoadingSpinner from '../../components/LoadingSpinner';
import { loadRedHatRepositories } from '../../actions/RedHatRepositories';
import { loadRedHatRepositorySets } from '../../actions/RedHatRepositorySets';
import MultiSelect from '../../components/MultiSelect';
import SearchInput from '../../components/SearchInput';
import RedHatRepository from '../../components/RedHatRepository';
import RedHatRepositorySet from '../../components/RedHatRepositorySet';

const loadData = (props) => {
  props.loadRedHatRepositories();
  props.loadRedHatRepositorySets();
};

class RedHatRepositoriesPage extends Component {
  static defaultProps = {
    redHatRepositoriesResponse: {},
    redHatRepositorySetsResponse: {}
  };

  static propTypes = {
    loadRedHatRepositories: PropTypes.func.isRequired,
    loadRedHatRepositorySets: PropTypes.func.isRequired,
    redHatRepositoriesResponse: PropTypes.object,
    redHatRepositorySetsResponse: PropTypes.object
  };

  componentWillMount() {
    loadData(this.props);
  }

  render() {
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
    let disabledRedHatRepositories = [];

    if (this.props.redHatRepositoriesResponse.results) {
      enabledRedHatRepositories = (
        this.props.redHatRepositoriesResponse.results.map(redHatRepository =>
          <RedHatRepository key={redHatRepository.id} redHatRepository={redHatRepository} />
        )
      );
    }

    if (this.props.redHatRepositorySetsResponse.results) {
      disabledRedHatRepositories = (
        this.props.redHatRepositorySetsResponse.results.map(redHatRepositorySet =>
          <RedHatRepositorySet key={redHatRepositorySet.id} redHatRepositorySet={redHatRepositorySet} />
        )
      );
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
            <LoadingSpinner isLoading={this.props.redHatRepositorySetsResponse.isLoading}>
              <ListView>
                {disabledRedHatRepositories}
              </ListView>
            </LoadingSpinner>
          </Col>

          <Col sm={6}>
            <h2>
              {__('Enabled Repositories')}
            </h2>
            <LoadingSpinner isLoading={this.props.redHatRepositoriesResponse.isLoading}>
              <ListView>
                {enabledRedHatRepositories}
              </ListView>
            </LoadingSpinner>
          </Col>
        </Row>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => {
  const props = {
    redHatRepositoriesResponse: state.redHatRepositories,
    redHatRepositorySetsResponse: state.redHatRepositorySets
  };
  return props;
};

export default connect(mapStateToProps, {
  loadRedHatRepositories,
  loadRedHatRepositorySets
})(RedHatRepositoriesPage);
