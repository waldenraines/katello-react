export const enabledRedHatRepositoriesIndexResponse = {
  total: 5,
  subtotal: 5,
  page: null,
  per_page: null,
  error: null,
  search: null,
  sort: {
    by: null,
    order: null
  },
  results: [{
    id: '3029',
    arch: 'i386',
    enabled: true,
    type: 'rpm',
    version: '6.2',
    name: 'Red Hat Ceph Storage Installer 1.2 for Red Hat Enterprise Linux 6 Server',
    label: 'ceph-storage-installer'
  }, {
    type: 'source_rpm',
    arch: 'x86_64',
    enabled: true,
    version: '7.3',
    id: '1401',
    name: 'Red Hat Enterprise Linux 7 Server (Source RPMs)',
    label: 'rhel-7-server-beta-source-rpms'
  }, {
    type: 'iso',
    arch: 'x86_64',
    enabled: true,
    version: '6.0.12',
    contentUrl: '/content/dist/rhel/server/6/6Server/$basearch/satellite/6.0/os',
    id: '4922',
    name: 'Red Hat Satellite 6.0 for RHEL 7 Server',
    label: 'rhel-6-server-satellite'
  }, {
    type: 'beta',
    arch: 'x86_64',
    enabled: true,
    version: null,
    contentUrl: '/content/dist/rhel/server/7/$releasever/$basearch/ceph-tools/2/debug',
    id: '4923',
    name: 'Red Hat Virtualization Host',
    label: 'red-hat-virtualization-host'
  }, {
    type: 'kickstart',
    arch: 'x86_64',
    enabled: true,
    version: '7.1',
    id: '1403',
    name: 'Red Hat Enterprise Linux 7 Server',
    label: 'rhel-7-server-beta-kickstart'
  }]
};

export const disabledRedHatRepositoriesIndexResponse = {
  total: 22,
  subtotal: 22,
  page: null,
  per_page: null,
  error: null,
  search: null,
  sort: {
    by: null,
    order: null
  },
  results: [{
    repositories: [
      {
        id: 343,
        arch: 'x86_64',
        version: "5.10"
      },
      {
        id: 253,
        arch: 'ia64',
        version: "5.10"
      }
    ],
    type: 'rpm',
    vendor: null,
    gpgUrl: null,
    contentUrl: '/content/beta/rhel/server/5/$releasever/$basearch/rhv-agent/4/os',
    id: '5143',
    name: 'Red Hat Virtualization 4 Agents for RHEL 5 Server Beta (RPMs)',
    label: 'rhel-5-server-rhv-4-agent-beta-rpms'
  }, {
    repositories: [],
    type: 'debug',
    vendor: null,
    gpgUrl: null,
    contentUrl: '/content/beta/rhel/server/5/$releasever/$basearch/rhv-agent/4/debug',
    id: '5144',
    name: 'Red Hat Virtualization 4 Agents for RHEL 5 Server Beta (Debug RPMs)',
    label: 'rhel-5-server-rhv-4-agent-beta-debug-rpms'
  }, {
    repositories: [],
    type: 'source',
    vendor: null,
    gpgUrl: null,
    contentUrl: '/content/beta/rhel/server/5/$releasever/$basearch/rhv-agent/4/source/SRPMS',
    id: '5145',
    name: 'Red Hat Virtualization 4 Agents for RHEL 5 Server Beta (Source RPMs)',
    label: 'rhel-5-server-rhv-4-agent-beta-source-rpms'
  }, {
    repositories: [],
    type: 'source',
    vendor: null,
    gpgUrl: null,
    contentUrl: '/content/dist/rhel/server/7/$releasever/$basearch/openstack-tools/8/source/SRPMS',
    id: '4727',
    name: 'Red Hat OpenStack Platform 8 Tools for RHEL 7 Server (Source RPMs)',
    label: 'rhel-7-server-openstack-8-tools-source-rpms'
  }, {
    repositories: [],
    type: 'rpm',
    vendor: null,
    gpgUrl: null,
    contentUrl: '/content/dist/rhel/server/6/$releasever/$basearch/rhev-agent/3/os',
    id: '1699',
    name: 'Red Hat Enterprise Virtualization Agents for RHEL 6 Server (RPMs)',
    label: 'rhel-6-server-rhev-agent-rpms'
  }, {
    repositories: [],
    type: 'debug',
    vendor: null,
    gpgUrl: null,
    contentUrl: '/content/dist/rhel/server/6/$releasever/$basearch/rhev-agent/3/debug',
    id: '1698',
    name: 'Red Hat Enterprise Virtualization Agents for RHEL 6 Server (Debug RPMs)',
    label: 'rhel-6-server-rhev-agent-debug-rpms'
  }, {
    repositories: [],
    type: 'source',
    vendor: null,
    gpgUrl: null,
    contentUrl: '/content/beta/rhel/server/7/$basearch/rh-common/source/SRPMS',
    id: '3513',
    name: 'Red Hat Enterprise Linux 7 Server - RH Common Beta (Source RPMs)',
    label: 'rhel-7-server-rh-common-beta-source-rpms'
  }, {
    repositories: [],
    type: 'source',
    vendor: null,
    gpgUrl: null,
    contentUrl: '/content/beta/rhel/server/6/$releasever/$basearch/rhev-agent/3/source/SRPMS',
    id: '1697',
    name: 'Red Hat Enterprise Virtualization Agents for RHEL 6 Server Beta (Source RPMs)',
    label: 'rhel-6-server-rhev-agent-beta-source-rpms'
  }, {
    repositories: [],
    type: 'rpm',
    vendor: null,
    gpgUrl: null,
    contentUrl: '/content/beta/rhel/server/7/$basearch/rh-common/os',
    id: '3512',
    name: 'Red Hat Enterprise Linux 7 Server - RH Common Beta (RPMs)',
    label: 'rhel-7-server-rh-common-beta-rpms'
  }, {
    repositories: [],
    type: 'rpm',
    vendor: null,
    gpgUrl: null,
    contentUrl: '/content/beta/rhel/server/6/$releasever/$basearch/rhev-agent/3/os',
    id: '1696',
    name: 'Red Hat Enterprise Virtualization Agents for RHEL 6 Server Beta (RPMs)',
    label: 'rhel-6-server-rhev-agent-beta-rpms'
  }, {
    repositories: [],
    type: 'debug',
    vendor: null,
    gpgUrl: null,
    contentUrl: '/content/beta/rhel/server/7/$basearch/rh-common/debug',
    id: '3511',
    name: 'Red Hat Enterprise Linux 7 Server - RH Common Beta (Debug RPMs)',
    label: 'rhel-7-server-rh-common-beta-debug-rpms'
  }, {
    repositories: [],
    type: 'debug',
    vendor: null,
    gpgUrl: null,
    contentUrl: '/content/beta/rhel/server/6/$releasever/$basearch/rhev-agent/3/debug',
    id: '1695',
    name: 'Red Hat Enterprise Virtualization Agents for RHEL 6 Server Beta (Debug RPMs)',
    label: 'rhel-6-server-rhev-agent-beta-debug-rpms'
  }, {
    repositories: [],
    type: 'source',
    vendor: null,
    gpgUrl: null,
    contentUrl: '/content/beta/rhel/server/6/$releasever/$basearch/rhv-agent/4/source/SRPMS',
    id: '5137',
    name: 'Red Hat Virtualization 4 Agents for RHEL 6 Server Beta (Source RPMs)',
    label: 'rhel-6-server-rhv-4-agent-beta-source-rpms'
  }, {
    repositories: [],
    type: 'rpm',
    vendor: null,
    gpgUrl: null,
    contentUrl: '/content/dist/rhel/server/7/$releasever/$basearch/openstack-tools/8/os',
    id: '4725',
    name: 'Red Hat OpenStack Platform 8 Tools for RHEL 7 Server (RPMs)',
    label: 'rhel-7-server-openstack-8-tools-rpms'
  }, {
    repositories: [],
    type: 'rpm',
    vendor: null,
    gpgUrl: null,
    contentUrl: '/content/fastrack/rhel/server/5/$basearch/os',
    id: '2308',
    name: 'Red Hat Enterprise Linux 5 Server - Fastrack (RPMs)',
    label: 'rhel-5-server-fastrack-rpms'
  }, {
    repositories: [],
    type: 'debug',
    vendor: null,
    gpgUrl: null,
    contentUrl: '/content/dist/rhel/server/7/$releasever/$basearch/openstack-tools/8/debug',
    id: '4726',
    name: 'Red Hat OpenStack Platform 8 Tools for RHEL 7 Server (Debug RPMs)',
    label: 'rhel-7-server-openstack-8-tools-debug-rpms'
  }, {
    repositories: [],
    type: 'rpm',
    vendor: null,
    gpgUrl: null,
    contentUrl: '/content/dist/rhel/server/6/6Server/$basearch/sat-tools/6.1/os',
    id: '4185',
    name: 'Red Hat Satellite Tools 6.1 (for RHEL 6 Server) (RPMs)',
    label: 'rhel-6-server-satellite-tools-6.1-rpms'
  }, {
    repositories: [],
    type: 'debug',
    vendor: null,
    gpgUrl: null,
    contentUrl: '/content/dist/rhel/server/6/6Server/$basearch/sat-tools/6.1/debug',
    id: '4186',
    name: 'Red Hat Satellite Tools 6.1 (for RHEL 6 Server) (Debug RPMs)',
    label: 'rhel-6-server-satellite-tools-6.1-debug-rpms'
  }, {
    repositories: [],
    type: 'source',
    vendor: null,
    gpgUrl: null,
    contentUrl: '/content/dist/rhel/server/6/6Server/$basearch/sat-tools/6.1/source/SRPMS',
    id: '4187',
    name: 'Red Hat Satellite Tools 6.1 (for RHEL 6 Server) (Source RPMs)',
    label: 'rhel-6-server-satellite-tools-6.1-source-rpms'
  }, {
    repositories: [],
    type: 'rpm',
    vendor: null,
    gpgUrl: null,
    contentUrl: '/content/dist/rhel/server/7/7Server/$basearch/sat-tools/6.1/os',
    id: '4188',
    name: 'Red Hat Satellite Tools 6.1 (for RHEL 7 Server) (RPMs)',
    label: 'rhel-7-server-satellite-tools-6.1-rpms'
  }, {
    repositories: [],
    type: 'debug',
    vendor: null,
    gpgUrl: null,
    contentUrl: '/content/dist/rhel/server/7/7Server/$basearch/sat-tools/6.1/debug',
    id: '4189',
    name: 'Red Hat Satellite Tools 6.1 (for RHEL 7 Server) (Debug RPMs)',
    label: 'rhel-7-server-satellite-tools-6.1-debug-rpms'
  }, {
    repositories: [],
    type: 'rpm  ',
    vendor: null,
    gpgUrl: null,
    contentUrl: '/content/fastrack/rhel/server/6/$basearch/os',
    id: '2320',
    name: 'Red Hat Enterprise Linux 6 Server - Fastrack (RPMs)',
    label: 'rhel-6-server-fastrack-rpms'
  }]
};
