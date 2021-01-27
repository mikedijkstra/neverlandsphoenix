const withMdxEnhanced = require('next-mdx-enhanced')

module.exports = withMdxEnhanced({
  layoutPath: 'layouts',
  defaultLayout: true,
  fileExtensions: ['mdx'],
  remarkPlugins: [],
  rehypePlugins: [],
  usesSrc: false,
  extendFrontMatter: {
    process: (mdxContent, frontMatter) => {
      return { ...frontMatter, mdxContent }
    },
    phase: 'prebuild|loader|both',
  },
  reExportDataFetching: false,
  clearCacheOnUpdate: true,
})(/* your normal nextjs config */)
