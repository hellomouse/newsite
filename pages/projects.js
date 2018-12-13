import React from 'react';
import Head from 'next/head';
import ReactTable from 'react-table';

import '../utils.js';

import Block from '../components/Block';

export default class ProjectsPage extends React.Component {
  render() {
    // please fill this with our current projects
    // do not add forks which we did not work on much
    const data = [
      {'name': 'GNS',
       'languages': 'JavaScript, TypeScript',
       'url': 'https://github.com/hellomouse/gns',
       'description': 'GitHub Notification Service For IRC',
       'developers': 'wolfy1339, BWBellairs, handicraftsman (webpanel initial commits)',
       'forked': 'No'},
      {'name': 'ParticlePlate',
       'languages': 'TypeScript',
       'url': 'https://github.com/hellomouse/particleplate',
       'description': 'An Express + TypeScript + React + ReactRouter + Redux + ReactRedux + PostCSS + MaterialUI boilerplate',
       'developers': 'handicraftsman',
       'forked': 'No'}
    ];
    return (
      <Block>
        <Head>
          <title>{'Hellomouse - Projects'}</title>
        </Head>

        <h4>{'Our projects'}</h4>

        <ReactTable
          data={data}
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