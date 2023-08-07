const name = "Lavanya";
const className = "greeting";
const user = { firstName: "Rahul", lastName: "Attuluri" };
const fullName = (user) => user.firstName + " " + user.lastName;
const element = (
  <div>
    <h1 className={className}>Hello {fullName(user)}!</h1>
    <p>Good to see you.</p>
  </div>
);
ReactDOM.render(element, document.getElementById("root"));
