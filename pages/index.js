import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>5330Slut</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="나희양, 이상한거 그만보세요." />
        <body>
          <br>
          주무실 시간이에요.
          </br>

        </body>
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
