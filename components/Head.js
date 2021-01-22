import Head from 'next/head'

export default function Layout({ title, description }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="description" content={description}></meta>
        <title>
          {title}
          {title ? ' - ' : ''}Neverlands Phoenix
        </title>
      </Head>
    </>
  )
}
