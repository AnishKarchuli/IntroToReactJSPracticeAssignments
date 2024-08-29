import "./App.css";

const Heading = () => {
  return <h1>React Playground</h1>
}

const name = "Alice Smith!";
const Greetings = () => {
  return <h1>Hello, {name}</h1>;
};

const link = "https://www.reactexamples.com";
const ExternalLink = () => {
  return (
    <a href={link} target="_blank">
      Visit React Examples
    </a>
  );
};

const image = "https://placehold.co/200x200";
const Avatar = () => {
  return (
    <div>
      <img src={image} alt="placeholder" />
    </div>
  );
};

const user = {
  name: "Alice Smith",
  age: 28,
  email: "alice.smith@example.com",
  bio: "Passionate about React and building innovative web applications.",
};

const UserInfo = () => {
  return (
    <>
      <h2>User Information</h2>
      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>Age: </strong>
        {user.age}
      </p>
      <p>
        <strong>Email: </strong>
        {user.email}
      </p>
      <p>
        <strong>Bio: </strong>
        {user.bio}
      </p>
    </>
  );
};

export default function App() {
  return (
    <div>
      <Heading />
      <Greetings />
      <ExternalLink />
      <Avatar />
      <UserInfo />
    </div>
  );
}
