import React from "react";
import Head from "next/head";

const Index = () => {
  return (
    <main>
      <Head>
        <title>Doge Blockchain</title>
        <meta name="description" content="An image of a doge blockchain" />
      </Head>

      <h1>Doge Blockchain</h1>
      <img
        src="https://i.ibb.co/Bcf4Z0c/much-wow-whats-going-on-with-dogecoin-doge.png"
        alt="doge blockchain"
      />
    </main>
  );
};

export default Index;
