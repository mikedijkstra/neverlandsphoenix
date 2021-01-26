import Head from 'next/head'

import News from '../../components/News.js'

const Index = () => {
  return (
    <div>
      <Head>
        <title>News and Updates - Neverlands Phoenix</title>
      </Head>
      <div className="prose lg:prose-lg">
        <h1>News and Updates</h1>
      </div>

      <News />
    </div>
  )
}

export default Index
