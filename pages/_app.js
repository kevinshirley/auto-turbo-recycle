import React from 'react';
import Layout from 'src/components/common/layout';
import Navbar from 'src/components/common/navbar';
import Footer from 'src/components/common/footer';
import Fab from '@material-ui/core/Fab';
import { IPHONE_ICON } from 'src/components/material-ui/icons';
import I18n from 'src/lib/i18n';

function Root({ Component, pageProps }) {
  return (
    <I18n lngDict={pageProps.lngDict} locale={pageProps.lng}>
      <div className='container layout'>
        <Navbar />
        <Layout>
          <div className='content'>
            <Component {...pageProps} />
          </div>
          <Footer />
        </Layout>
        <a href='tel:5149006636'>
          <Fab aria-label='Call' className='phone-button-fixed'>
            {IPHONE_ICON}
          </Fab>
        </a>
      </div>
    </I18n>
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
