import Card from "./Card";

function Profile() {
  return (
    <div className="profile">
      <Card>
        <h1>Profile</h1>
        <img className="avatar" src="https://picsum.photos/id/23/100" alt="" />
        Hello there!
      </Card>
      <Card>
        <h1>Photos</h1>
        <img className="avatar" src="https://picsum.photos/id/128/100" alt="" />
        <img className="avatar" src="https://picsum.photos/id/235/100" alt="" />
        <img className="avatar" src="https://picsum.photos/id/345/100" alt="" />
      </Card>
      <Card>
        <h1>About</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
          tincidunt vehicula efficitur. Aliquam sed elementum diam, nec
          porttitor quam.
        </p>
      </Card>
    </div>
  );
}
export default Profile;
