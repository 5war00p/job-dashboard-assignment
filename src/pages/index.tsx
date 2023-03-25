import Head from 'next/head'
import { Poppins } from 'next/font/google'
import { Dashboard } from '@/components/Dashboard'

const poppins = Poppins({subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']})

export default function Home() {
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style>{`
          :root {
            font-family: ${poppins.style.fontFamily};
          }
        `}</style>
      </Head>
      <main>
        <Dashboard />
      </main>
    </>
  )
}
