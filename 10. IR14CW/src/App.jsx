const Header = () => {
  return (
    <header>
      <h1>Welcome to our Company</h1>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
        </ul>
      </nav>
    </header>  
  )
}

/*
const EmployeeDetails = (props) => {
  return (
    <div>
      <h2>Employee Details</h2>
      <p>Name: {props.employee.name}</p>
      <p>Position: {props.employee.position}</p>
      <p>Department: {props.employee.department}</p>
      <p>Email: {props.employee.email}</p>
    </div>
  );
};
*/

const EmployeeDetails = ({ employee }) => {
  return (
    <div>
      <h2>Employee Details</h2>
      <p>Name: {employee.name}</p>
      <p>Position: {employee.position}</p>
      <p>Department: {employee.department}</p>
      <p>Email: {employee.email}</p>
    </div>
  );
};

const Footer = () => {
  return (
    <footer>
      <p>&copy; 2024 Company Name. All rights reserved.</p>
    </footer>
  );
};

export default function App() {
  const employee = {
    id: 1,
    name: "John Doe",
    position: "Software Developer",
    department: "Engineering",
    email: "john@gmail.com",
  }
  return (
    <>
      <Header />
      <main>
        <EmployeeDetails employee={employee} />
      </main>
      <Footer />
    </>
  );
};