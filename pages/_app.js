import React from 'react';
import Layout from 'src/components/common/layout';
import Navbar from 'src/components/common/navbar';
import Footer from 'src/components/common/footer';

function Root({ Component, pageProps }) {
  return (
    <div className='container layout'>
      <Navbar />
      <Layout>
        <div className='content'>
          <Component {...pageProps} />
        </div>
        <Footer />
      </Layout>
    </div>
  );
}

Root.getInitialProps = (async ({ Component, ctx }) => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { 
    pageProps
  };
});

export default Root;
