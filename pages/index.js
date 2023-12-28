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
            주무실 시간이에요. 
            <a href="https://www.google.com/search?q=sleepy+cat&sca_esv=594242284&hl=ko&tbm=isch&source=lnms&sa=X&ved=2ahUKEwiIlPXEs7KDAxWMdN4KHcl1BOIQ_AUoAXoECAMQAw&biw=1536&bih=703&dpr=1.25">고양이를 보려면 여기를 클릭</a>.
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
