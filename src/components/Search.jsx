var Search = ({getNFLArrests}) => (
  <div className="search-bar form-inline">
    <input className="form-control" type="text" 
    onChange={(e) => {getNFLArrests(e.target.value)}}/>
    <button className="btn hidden-sm-down">
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div> 
);

window.Search = Search;