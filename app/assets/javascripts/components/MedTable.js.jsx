class MedTable extends React.Component {

  render() {
    // loop of items , the information is pushed
    // to medication array
  var medications = [];

  this.props.medications.forEach( function(element) {

    medications.push(<Medication medication={ element } key={ element.id }/>);
  }.bind(this));


  return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th className="col-md-3">Medication Name</th>
            <th className="col-md-2">Strength</th>
            <th className="col-md-3">Qty</th>
            <th className="col-md-4">Strength</th>
            <th className="col-md-4">Origin</th>
          </tr>
        </thead>
        <tbody>
          { medications }
        </tbody>
      </table>
    )
  }

};
