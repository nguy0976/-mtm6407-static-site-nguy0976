import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import NavBar from '@components/NavBar'

export default function Home() {
  return (
    <div className="container">
      <NavBar />
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to Subin's App!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
