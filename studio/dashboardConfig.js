export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e8349a5b6fcb2759ecca5d4',
                  title: 'Sanity Studio',
                  name: 'trondsworking-blog-v3-studio',
                  apiId: '8491a717-e738-4f9c-adbd-dc1d4805d6e2'
                },
                {
                  buildHookId: '5e8349a5b6fcb27f2acca6f5',
                  title: 'Blog Website',
                  name: 'trondsworking-blog-v3',
                  apiId: 'a51c5a6e-a615-4d3e-9bb3-76104870cb2c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/trondhindenes/trondsworking-blog-v3',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://trondsworking-blog-v3.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
