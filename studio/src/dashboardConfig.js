export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5fbccfbdf94979af31e23cc3',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-deoarru1',
                  apiId: 'cd07d78f-a8d7-4545-82aa-e2207a214d39'
                },
                {
                  buildHookId: '5fbccfbde760b4c3649cf132',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-5upi2jki',
                  apiId: '0655f09f-3ff3-4d35-863b-c74ecbd81e12'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Amirmoh10/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-5upi2jki.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
