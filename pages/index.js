// Import necessary components and modules
import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

// Define the Home component
export default function Home() {
  return (
    <div className="container">
      {/* Head section for metadata */}
      <Head>
        <title>Hi Nabong</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Main section */}
      <main>
        {/* Header component with a title */}
        <Header title="나희양, 이상한거 그만보세요." />

        {/* Body section */}
        <body>
          {/* Text content */}
          

          {/* Additional text and link */}
          <p>
            주무실 시간이에요. <a href="/some-page">https://www.pinatafarm.com/memegenerator/e4980cdd-9b92-4c4c-b77b-183374a9b236</a>.
          </p>
        </body>
      </main>

      {/* Footer component */}
      <Footer />
    </div>
  )
}
