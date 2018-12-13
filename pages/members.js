import React from 'react';
import Head from 'next/head';
import ReactTable from 'react-table';

import '../utils.js';

import Block from '../components/Block';

export default class MembersPage extends React.Component {
  render() {
    const data = [
      {'name': 'handicraftsman',
       'github': 'https://github.com/handicraftsman/',
       'avatar': 'https://avatars3.githubusercontent.com/u/6382804?s=460&v=4',
       'description': 'A random C/++, JavaScript, Ruby, and Lisp coder. Author of this website version. Wrote tons of useless irc bot frameworks in different languages.'},
      {'name': 'ohnx',
       'github': 'https://github.com/ohnx/',
       'avatar': 'https://avatars3.githubusercontent.com/u/6683648',
       'description': 'A random C, Java/JavaScript, and Python coder. Not the author of this website version. Wrote a useless irc bot in C. Generally considered useless.'}
    ]
  
    return (
      <Block>
        <Head>
          <title>{'Hellomouse - Members'}</title>
        </Head>
        <h4>{'Our members'}</h4>
        <p>{'We need to fill this too'}</p>

        <ReactTable
         data={data}
         columns={
          [{Header: 'Avatar', accessor: 'avatar', width: 64, className: 'hm-row', Cell:
            row => <img width="48" src={row.value.toString()} />},
           {Header: 'Name', accessor: 'name', width: 128, className: 'hm-row'},
           {Header: 'GitHub', accessor: 'github', width: 64, className: 'hm-row', Cell:
            row => <div className='hm-cell-gh'><a href={row.value.toString()}>{'GitHub'}</a></div>},
           {Header: 'Description', accessor: 'description', className: 'hm-row'}]
         }
         defaultPageSize={10}
         className='-striped -highlight hm-table' />
      </Block>
    )
  }
}
