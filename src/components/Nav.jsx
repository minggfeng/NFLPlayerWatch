var Nav = ({getNFLArrests}) => (
  <nav className="navbar">
    <div>
      <Search getNFLArrests={getNFLArrests}/>
    </div>
  </nav>
);

window.Nav = Nav;