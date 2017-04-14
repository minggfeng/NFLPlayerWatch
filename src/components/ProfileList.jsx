var ProfileList = (props) => (
  <div>
    {props.profiles.map((profile) => 
      <ProfileEntry profile={profile}/>
    )}
  </div>
);

window.ProfileList = ProfileList;