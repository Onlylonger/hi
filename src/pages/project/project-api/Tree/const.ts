const NodeType = {
  Folder: 'folder',
  Root: 'root',
}

const treeExampleData = [
  {
    id: 'api-module-default',
    meta: {
      collapsed: true,
      label: '默认模块',
    },
    parentId: null,
    element: null,
    children: [
      {
        id: 'api-module-default-endpoints',
        meta: {
          collapsed: true,
          label: 'Endpoints',
        },
        parentId: 'api-module-default',
        element: null,
        children: [],
      },
      {
        id: 'api-module-default-schemas',
        meta: {
          collapsed: false,
          label: 'Schemas',
        },
        parentId: 'api-module-default',
        element: null,
        children: [],
      },
      {
        id: 'api-module-default-components',
        meta: {
          collapsed: false,
          label: 'Components',
        },
        parentId: 'api-module-default',
        element: null,
        children: [],
      },
    ],
  },
]
