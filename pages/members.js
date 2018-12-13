import React from 'react';
import Head from 'next/head';
import ReactTable from 'react-table';

import '../utils.js';

import Block from '../components/Block';

export default class MembersPage extends React.Component {
  async static getInitialProps() {
    return { data: await (await fetch('/static/members.json')).json()}
  }
  render() {
    return (
      <Block>
        <Head>
          <title>{'Hellomouse - Members'}</title>
        </Head>
        <h4>{'Our members'}</h4>
        <p>{'We need to fill this too'}</p>

        <ReactTable
         data={this.props.data}
         columns={
          [{Header: 'Avatar', accessor: 'name', width: 64, className: 'hm-row', Cell:
            row => <img width="48" src={`https://github.com/${row.value.toString()}.png`} />},
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
