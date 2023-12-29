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
        <title>Test </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Main section */}
      <main>
        {/* Header component with a title */}
        <Header title="테스트 사이트" />

        {/* Body section */}
        <body>
          {/* Text content */}
          

          {/* Additional text and link */}
          <p>
            링크 테스트 
            <a href="https://www.google.com/">구글로 가려면 여기를 클릭</a>.
          </p>
        </body>
      </main>

      {/* Footer component */}
      <Footer>
        Developed by 석진
      </Footer>
    </div>
  )
}
