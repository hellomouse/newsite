import React from 'react';
import Head from 'next/head';
import ReactTable from 'react-table';

import '../utils.js';

import Block from '../components/Block';

export default class ProjectsPage extends React.Component {
    return { data: await (await fetch('/static/projects.json')).json()}
  static async getInitialProps() {
  }
  render() {
    return (
      <Block>
        <Head>
          <title>{'Hellomouse - Projects'}</title>
        </Head>

        <h4>{'Our projects'}</h4>

        <ReactTable
          data={this.props.data}
          columns={
            [{Header: 'Name', accessor: 'name', width: 128, className: 'hm-row'},
             {Header: 'Languages', accessor: 'languages', className: 'hm-row'},
             {Header: 'GitHub', accessor: 'url', width: 64, className: 'hm-row', Cell:
              row =>
                <div className='hm-cell-gh'><a href={row.value.toString()}>{'GitHub'}</a></div>},
             {Header: 'Description', accessor: 'description', className: 'hm-row'},
             {Header: 'Developers', accessor: 'developers', className: 'hm-row'},
             {Header: 'Forked', accessor: 'forked', width: 64, className: 'hm-row'}]
          }
          defaultPageSize={10}
          className='-striped -highlight hm-table' />
      </Block>
    );
  }
}