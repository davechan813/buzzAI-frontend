import React from 'react';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import { render } from "react-dom";
import ReactTable from "react-table";
import "react-table/react-table.css";

const styles = theme => ({
});

class DataTable extends React.Component {
  constructor() {
    super();
    this.state = {   
    };
  }

  render() {
    const { data } = this.props;
    return (
      <div style={{ maxWidth: 800, position: 'relative', margin: 'auto', marginTop: 20 }}>
        <ReactTable
          data={data}
          columns={[
            {
              Header: "Location",
              columns: [
                {
                  Header: "Name",
                  accessor: "geoName",
                },
              ]
            },
            {
              Header: "Info",
              columns: [
                {
                  Header: "Hit",
                  accessor: "value[0]",
                },
              ]
            },
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
      </div>
    );
  }
}

export default withStyles(styles)(DataTable);