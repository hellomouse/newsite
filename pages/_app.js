import React from 'react';
import App, { Container } from 'next/app';
import Link from 'next/link';

import HMNav from '../components/HMNav';
export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render () {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <HMNav />
        <Component {...pageProps} />
      </Container>
    );
  }
}
