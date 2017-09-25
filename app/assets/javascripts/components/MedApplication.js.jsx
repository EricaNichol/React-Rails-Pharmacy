class MedApplication extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      medications: []
    }
  }

  componentDidMount() {
    this.getDataFromApi();
  }

  getDataFromApi() {

    var self = this;
    var myRequest = new Request(
      '/api/medications',
      {
        'method': 'GET',
        'Content-Type': 'application/json'
      }
    );

    fetch(myRequest)
    .then(function(response){
      if(response.ok) {
        // returon to the second step
        return response.json();
      }
    })
    .then(function(previousJSON) {
      self.setState({ medications: previousJSON });
      console.log('mounting');
    })
    .catch(function(error) {
      console.log("Sorry can't connect to Api");
    });
  }


  render() {
    console.log(this.state.medications);
    return (
      <div className="container">
         <div className="jumbotron">
           <h1>Ordinary Pharmacy</h1>
         </div>
         <div className="row">
           <div className="col-md-12">
             <MedTable medications={ this.state.medications }/>
           </div>
         </div>
       </div>
    )
  }

};
