import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Larsa Studio</title>
        <meta name="description" content="Larsa Studio Official Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p className="title">
          <span>Larsa</span> Studio
        </p>
      </main>
    </div>
  );
};

export default Home;
