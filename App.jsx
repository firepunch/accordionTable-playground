import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

class DataInsertTypeTable extends React.Component {
    render() {
        { /* comments */ }
        const jobs = [];
        const products = [];
        const jobTypes = [ 'A', 'B', 'C', 'D' ];

        function addJobs(quantity) {
            const startId = jobs.length;
            for (let i = 0; i < quantity; i++) {
                const id = startId + i;
                jobs.push({
                    id: id,
                    name: 'Item name ' + id,
                    type: 'B',
                    active: i % 2 === 0 ? 'Y' : 'N',
                    datetime: '200' + i + '-12-28T14:57:00'
                });
            }
        }

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

        addJobs(5);
        addProducts(5);

        const cellEditProp = {
            mode: 'click'
        };

        return  (
            <BootstrapTable data={ jobs } cellEdit={ cellEditProp } insertRow={ true }>
                <TableHeaderColumn isKey dataField='id'>Job ID</TableHeaderColumn>
                <TableHeaderColumn dataField='name'>Job Name</TableHeaderColumn>
                <TableHeaderColumn dataField='type' editable={ { type: 'select', options: { values: jobTypes } } }>Job Type</TableHeaderColumn>
                <TableHeaderColumn dataField='active' editable={ { type: 'checkbox', options: { values: 'Y:N' } } }>Active</TableHeaderColumn>
            </BootstrapTable>
        );
    }
}

export default DataInsertTypeTable;