import Head from '../components/Head.js'

const Layout = ({ frontMatter, children }) => (
  <>
    <Head {...frontMatter} />
    <div className="prose lg:prose-lg">{children}</div>
  </>
)

export default Layout
