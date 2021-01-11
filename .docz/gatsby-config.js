const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/trova-components',

  siteMetadata: {
    title: 'Trova Components Library',
    description:
      'A set of beautiful and colorful React components to build a modern and beautiful application.',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: ['Readme', 'Components'],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: true,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: '/home/federico/visualStudioWS/trova-components/.docz',
        base: '/trova-components',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '/docs',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Trova Components Library',
        description:
          'A set of beautiful and colorful React components to build a modern and beautiful application.',
        host: 'localhost',
        port: 3001,
        p: 3000,
        separator: '-',
        paths: {
          root: '/home/federico/visualStudioWS/trova-components',
          templates:
            '/home/federico/visualStudioWS/trova-components/node_modules/docz-core/dist/templates',
          docz: '/home/federico/visualStudioWS/trova-components/.docz',
          cache: '/home/federico/visualStudioWS/trova-components/.docz/.cache',
          app: '/home/federico/visualStudioWS/trova-components/.docz/app',
          appPackageJson:
            '/home/federico/visualStudioWS/trova-components/package.json',
          appTsConfig:
            '/home/federico/visualStudioWS/trova-components/tsconfig.json',
          gatsbyConfig:
            '/home/federico/visualStudioWS/trova-components/gatsby-config.js',
          gatsbyBrowser:
            '/home/federico/visualStudioWS/trova-components/gatsby-browser.js',
          gatsbyNode:
            '/home/federico/visualStudioWS/trova-components/gatsby-node.js',
          gatsbySSR:
            '/home/federico/visualStudioWS/trova-components/gatsby-ssr.js',
          importsJs:
            '/home/federico/visualStudioWS/trova-components/.docz/app/imports.js',
          rootJs:
            '/home/federico/visualStudioWS/trova-components/.docz/app/root.jsx',
          indexJs:
            '/home/federico/visualStudioWS/trova-components/.docz/app/index.jsx',
          indexHtml:
            '/home/federico/visualStudioWS/trova-components/.docz/app/index.html',
          db:
            '/home/federico/visualStudioWS/trova-components/.docz/app/db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
