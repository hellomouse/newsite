import Document, { Head, Main, NextScript } from 'next/document';
import Manifest from 'next-manifest';
import flush from 'styled-jsx/server';

// i guess `our` means `hellomousian` and is a reference to communism
export default class OurDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps, styles: flush() };
  }

  render() {
    return (
      <html>
        <Head>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <body>
          <Main/>
          <NextScript/>
        </body>
      </html>
    );
  }
}
