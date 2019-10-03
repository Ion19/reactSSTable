import { Table } from 'semantic-ui-react';
import React from 'react';

import {connect} from 'react-redux';
import {sortColumnAction} from '../../store/actions';

const TableHeader =(props) => {

  const handleSort =(columnkey)=>{
    
    if (columnkey !== props.sortedkey){
      
      return (
        props.sortColumnAction(columnkey)
      )
      
    }
    
   
    props.sortColumnAction(columnkey)


  };
    
    
  return (
    <Table.Header>
      <Table.Row>
        {props.columns.map((column)=>
        <Table.HeaderCell key={column} onClick={()=>handleSort(column)}>
          
          {column}
        </Table.HeaderCell>
        )}
        
      </Table.Row>
    </Table.Header>
  );
}; 


const mapStateToProps =(state)=>{
    return {
        columns:state.table.columns,
        data:state.table.data,
        sortedkey:state.table.sortedkey
    }
}

export default connect(mapStateToProps,{sortColumnAction})(TableHeader)
