import React from 'react';
import { Header } from './Header';
import { Navigation } from './Navigation';
import Head from 'next/head';

const Layout = ({children}) => (
    <>
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

      <div className="app-wrapper">
        <div className="layout-wrapper">
          <Header/>
          <main className="layout-wrapper__main-content">{children}</main>
          <Navigation/>
        </div>
      </div>

    </>

);
export default Layout;
