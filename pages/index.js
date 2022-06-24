import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import { GlobalPosition, StockList } from '../components';
import { Button } from '../components';
import { useApp } from '../context/AppContext';
import Layout from '../components/shared/Layout';

export default function Home() {
  let {totalAmount, hasError} = useApp();
  const renderDashboard = (
      <section className="p-dashboard">
        <GlobalPosition
            title="your balance"
            quantity={totalAmount}
        />
        <div className="p-dashboard__wrapper">
          <StockList/>
          <Button label="Show all transactions"
                  class="c-button c-button--primary"
                  id="showMore"
                  data-testid="showMore"
          />
        </div>
      </section>
  )
  const renderError = (
      <section className="p-dashboard__wrapper">
        <div className="c-list c-list--error">
          <p className="c-list--error__message">Ooops! Something is wrong.</p>
        </div>
      </section>
  )
  return (

      <div className={styles.container}>
        <Head>
          <meta charSet="utf-8"/>
          <title>Ke-Crypto</title>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <meta name="description" content="Ke-Crypto dashboard"/>
          <link rel="icon" href="/favicon.ico"/>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap"
                rel="stylesheet"
          />
          <link rel="stylesheet"
                href="https://d1azc1qln24ryf.cloudfront.net/174874/FrontendChallenge/style-cf.css?fhefj0"
          />
        </Head>

        <main className={styles.main}>

          {hasError ? renderError : renderDashboard}


        </main>

      </div>
  )
}


Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
