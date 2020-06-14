require('dotenv').config();
import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
const { NODE_ENV, GOOGLE_ANALYTICS_CODE, GOOGLE_TAG_MANAGER_URL } = process.env;

class Root extends Document {
  static async getInitialProps(ctx) {
    const isProduction = NODE_ENV === 'production';
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps, isProduction };
  }

  setGoogleTags() {
    return {
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', ${GOOGLE_ANALYTICS_CODE});
      `
    };
  }

  render() {
    const { isProduction } = this.props;

    return (
      <html lang={this.props.__NEXT_DATA__.query.language}>
        <Head />
        <body className='body'>
          <Main />
          <NextScript />
          {isProduction && (
            <>
              <script
                async
                src={GOOGLE_TAG_MANAGER_URL}
              />
              <script dangerouslySetInnerHTML={this.setGoogleTags()} />
            </>
          )}
        </body>
      </html>
    );
  }
}

export default Root;
