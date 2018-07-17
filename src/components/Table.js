import React, { Component } from 'react';
import {BootstrapTable, 
       TableHeaderColumn} from 'react-bootstrap-table';

import '../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css'
 
 
class Table1 extends Component {
  render() {
    return (
      <div>
        <BootstrapTable   data={this.props.data} striped hover condensed>
          <TableHeaderColumn isKey width="15%" dataField='firstName'>
            Name
          </TableHeaderColumn>
          <TableHeaderColumn tdStyle={
                                 {backgroundColor: 'green'}} dataField='email'>
            Email
          </TableHeaderColumn>
          <TableHeaderColumn  width="40%" dataField='snak'>
            Fave_snack
          </TableHeaderColumn>

           <TableHeaderColumn  width="15%" dataField='price'>
                Price
          </TableHeaderColumn>

          
        </BootstrapTable>
      </div>
    );
  }
}
 
export default Table1;