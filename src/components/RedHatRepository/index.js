import React from 'react';
import PropTypes from 'prop-types';

import { ListViewItem } from 'patternfly-react';

const RedHatRepository = ({ redHatRepository }) => {
  const getTypeIcon = (type) => {
    let className = 'fa-2x ';

    switch (type) {
      case 'rpm':
        className += 'pficon-bundle';
        break;
      case 'source_rpm':
        className += 'fa fa-code';
        break;
      case 'debug':
        className += 'fa fa-bug';
        break;
      case 'iso':
        className += 'fa fa-file-image-o';
        break;
      case 'beta':
        className += 'fa fa-bold';
        break;
      case 'kickstart':
        className += 'fa fa-futbol-o';
        break;
      default:
        className += 'fa fa-question';
        break;
    }
    return className;
  };

  const getArchAndTypeText = () => {
    return (
      <div>
        <strong>
          {redHatRepository.arch}
        </strong>
        <p className="pull-right">
          {redHatRepository.type}
        </p>
      </div>
    )
  };

  return (
    <ListViewItem
      additionalListClass="list-view-pf-stacked"
      key={redHatRepository.id}
      heading={redHatRepository.name}
      itemText={getArchAndTypeText()}
      iconClass={getTypeIcon(redHatRepository.type)}
    />
  );
};

RedHatRepository.propTypes = {
  redHatRepository: PropTypes.object
};

RedHatRepository.defaultProps = {
  redHatRepository: {}
};


export default RedHatRepository;
