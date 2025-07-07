import Head from 'next/head';
import HomePage from '../components/HomePage';

export default function Home() {
  return (
    <>
      <Head>
        <title>YTGAP - Find what's wanted. Create what's missing.</title>
        <meta 
          name="description" 
          content="YTGAP is the strategic partner for creators who want to build an audience by making data-driven decisions. Stop guessing, start growing." 
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
    </>
  );
}
