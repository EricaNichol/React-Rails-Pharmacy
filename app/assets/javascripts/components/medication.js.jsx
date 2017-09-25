class Medication extends React.Component {
  // property types being rendered
  propTypes: {
    name: React.PropTypes.string,
    strength: React.PropTypes.string,
    qty: React.PropTypes.string,
    price: React.PropTypes.integer,
    origin: React.PropTypes.string
  }

  render() {
    const medication = this.props.medication;

    return (
        <tr>
          <td>{medication.name}</td>
          <td>{medication.strength}</td>
          <td>{medication.qty}</td>
          <td>{medication.price}</td>
          <td>{medication.origin}</td>
        </tr>
      )
  }

};
