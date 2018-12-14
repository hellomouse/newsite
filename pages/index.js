import React from 'react';
import Head from 'next/head';

import '../utils.js';

import Block from '../components/Block';

export default class IndexPage extends React.Component {
  render() {
    return (
      <div>
        <Head>
          <title>{'Hellomouse - Home'}</title>
        </Head>
        <Block>
          <h1 style={{ textAlign: 'center' }}>{'Hello, mouse!'}</h1>
          <h4>{'Welcome to this site!'}</h4>
          <img style={{ width: '100%' }} src="https://git.hellomouse.net/img/mouse.jpg" />
          <p>
            {'If you see this at our second-level domain (hellomouse.net), that means that handicraftsman finally finished rewriting our site.'}
          </p>

          <p>
            {'It is built on top of some React, Reactstrap, React-Tables, Next.js, Express and PM2 magic.'}
          </p>

          <p>
            {'You can find almost all hellomouse members at ##hellomouse on freenode (irc.freenode.net) IRC network.'}
          </p>

          <p>
            {'We have a discord guild: '} <a href='https://discord.gg/gVvHZYq'>click</a>{'.'}
          </p>

          <p>
            {'We also run a github organization: '} <a href='https://github.com/hellomouse/'>click</a>{'.'}
          </p>

          <p>
            {'For hellomousians: site source as written by handicraftsman can be found at ~/handicraftsman/hweb on Polaris.'}
          </p>
        </Block>
      </div>
    );
  }
}
