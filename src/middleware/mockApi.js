import MockAdapter from 'axios-mock-adapter'; // eslint-disable-line import/no-extraneous-dependencies
import { enabledRedHatRepositoriesIndexResponse, disabledRedHatRepositoriesIndexResponse } from './mockResponses';

export default function initializeMockAPI(client) {
  const mock = new MockAdapter(client, { delayResponse: 1000 });

  mock.onGet().reply((config) => {
    // List enabled Red Hat repositories
    if (config.url === '/redhat_repositories') {
      return [200, enabledRedHatRepositoriesIndexResponse];
    }

    // List disabled Red Hat repositories
    if (config.url === '/redhat_repository_sets') {
      return [200, disabledRedHatRepositoriesIndexResponse];
    }

    // If no matches, return a 404.
    return [404];
  });
  return mock;
}
