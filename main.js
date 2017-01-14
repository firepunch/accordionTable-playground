// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App.jsx';
// import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

// ReactDOM.render(<App />, document.getElementById('app'));

var React = require('react');
var ReactDOM = require('react-dom');
var ReactBsTable  = require('react-bootstrap-table');
var BootstrapTable = ReactBsTable.BootstrapTable;
var TableHeaderColumn = ReactBsTable.TableHeaderColumn;

const products = [];

function addProducts(quantity) {
    const startId = products.length;
    for (let i = 0; i < quantity; i++) {
        const id = startId + i;
        products.push({
            id: id,
            name: 'Item name ' + id,
            price: 2100 + i
        });
    }
}

addProducts(5);

const cellEditProp = {
    mode: 'click'
};

ReactDOM.render(
    <BootstrapTable data={ products } cellEdit={ cellEditProp }>
        <TableHeaderColumn isKey dataField='id'>Product ID</TableHeaderColumn>
        <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
        <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
    </BootstrapTable>,
    document.getElementById('basic')
);
