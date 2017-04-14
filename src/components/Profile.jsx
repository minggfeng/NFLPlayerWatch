var ProfileEntry = (props) => (
  <div>
    <div class="name">{props.profile.Name}</div>
    <div class="position">{props.profile.Position}</div>
    <div class="arrest_count">{props.profile.arrest_count}</div>
  </div>
);

window.ProfileEntry = ProfileEntry;