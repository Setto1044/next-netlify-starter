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
        <title>섹시뽕짝 제이드</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Main section */}
      <main>
        {/* Header component with a title */}
        <Header title="이 가수는 무료로 해드립니다." />

        {/* Body section */}
        <body>
          {/* Text content */}
          <img src="images/200x200.png" alt="My Image" width="441" height="356"  />

          {/* Additional text and link */}
          <p>
            그는 놀라워! 
            <a href="https://www.youtube.com/channel/UCq2MgAt0viLmlipjJ6sF-aw">더 알아보기</a>.
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
