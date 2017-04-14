class App extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      profiles: [{"Name":"Aldon Smith","Position":"LB","arrest_count":"5"},{"Name":"Dwight Smith","Position":"S","arrest_count":"4"},{"Name":"Jimmy Smith","Position":"CB","arrest_count":"2"},{"Name":"Robaire Smith","Position":"DE\/DT","arrest_count":"1"},{"Name":"Lamar Smith","Position":"RB","arrest_count":"1"},{"Name":"Andre Smith","Position":"OT","arrest_count":"1"},{"Name":"Justin Smith","Position":"DE","arrest_count":"1"},{"Name":"Akili Smith","Position":"QB","arrest_count":"1"},{"Name":"Taj Smith","Position":"WR","arrest_count":"1"},{"Name":"Steve Smith","Position":"WR","arrest_count":"1"},{"Name":"Will Smith","Position":"DE","arrest_count":"1"},{"Name":"Bruce Smith","Position":"DE","arrest_count":"1"},{"Name":"Rod Smith","Position":"WR","arrest_count":"1"},{"Name":"Sean Smith","Position":"CB","arrest_count":"1"},{"Name":"Marvel Smith","Position":"OT","arrest_count":"1"}]
    }
    // this.props.searchNFLArrest(query, () => {
    //   console.log("hi");
    // });
  }

  getNFLArrests(query) {
    this.props.searchNFLArrest(query, (data) => {
      this.setState({
        profiles: data
      });
    });
  }

  render() {
    return (
      <div>
        <Nav getNFLArrests={this.getNFLArrests.bind(this)}/>
        <ProfileList profiles={this.state.profiles}/>
      </div>
    )
  }
}