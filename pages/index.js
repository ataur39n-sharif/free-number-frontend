import Head from 'next/head'
import NumberList from '../Components/Homepage/NumberList'
import NoNumberList from '../Components/Homepage/NumberList/NoNumberList'

export default function Home({ data }) {
  console.log('console from home',data);
  return (
    <div>
      <Head>
        <title>Free Number</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className='container'>
        {/* <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1> */}

        <section id='numberList'>
          {
            data.status === 'error' && <NoNumberList />
          }
          {
            data.status === 'success' && 
            <NumberList value={data.values} />
          }
        </section>
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  )
}

export async function getStaticProps(context) {
  const result = await fetch(`${process.env.CURRENT_SITE_LINK}/api/getRentNumberList`)
  const value = await result.json()

  return {
    props: {
      data: value || null
    }
  }
}