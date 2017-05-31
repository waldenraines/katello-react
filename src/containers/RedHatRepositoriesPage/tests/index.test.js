import React from 'react';
import { shallow } from 'enzyme';
import { Grid, Row, Col, Form, FormGroup } from 'react-bootstrap';

import RedHatRepositoriesPage from '../index';
import MultiSelect from '../../../components/MultiSelect';
import SearchInput from '../../../components/SearchInput';

describe('<RedHatRepositoriesPage />', () => {
  it('should show a <Grid>', () => {
    const wrapper = shallow(<RedHatRepositoriesPage />);

    expect(wrapper.find(Grid).length).toBe(1);
  });

  it('should have three <Row>s', () => {
    const wrapper = shallow(<RedHatRepositoriesPage />);

    expect(wrapper.find(Row).length).toBe(3);
  });

  it('should contain a <SearchInput/>', () => {
    const wrapper = shallow(<RedHatRepositoriesPage />);

    expect(wrapper.find(SearchInput).length).toBe(1);
  });

  it('should contain a <MultiSelect/>', () => {
    const wrapper = shallow(<RedHatRepositoriesPage />);

    expect(wrapper.find(MultiSelect).length).toBe(1);
  });
});
