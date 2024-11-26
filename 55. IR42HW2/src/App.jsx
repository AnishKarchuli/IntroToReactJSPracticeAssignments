import { useState } from "react";

const ValidateZipcode = () => {
  const [zipcode, setZipcode] = useState("");

  const handleZipcodeInput = (event) => {
    setZipcode(event.target.value);
  };

  const zipcodeValidationHandler = () => {
    const zipcodeLength = zipcode.length;
    if (zipcodeLength < 5) {
      alert("Invalid zipcode. Please enter 5 digits.");
    } else {
      alert("Valid zipcode.");
    }
  };

  return (
    <div>
      <label htmlFor="zipcodeInput">Enter your zipcode:</label>
      <input id="zipcodeInput" onChange={handleZipcodeInput} />
      <button onClick={zipcodeValidationHandler}>Validate Zipcode</button>
    </div>
  );
};

const CapitalizeName = () => {
  const [fullName, setFullName] = useState("");

  const handleFullNameInput = (event) => {
    setFullName(event.target.value);
  };

  const capitalizeNameHandler = () => {
    const capitalizedFullName = fullName
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
    alert(`Capitalized Full Name: ${capitalizedFullName}`);
  };

  return (
    <div>
      <label htmlFor="fullNameInput">Enter your full name:</label>
      <input id="fullNameInput" onChange={handleFullNameInput} />
      <button onClick={capitalizeNameHandler}>Capitalize Name</button>
    </div>
  );
};

const ResetSearchTerm = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearchTerm = (event) => {
    setSearchTerm(event.target.value)
  }

  const resetHandler = () => {
    setSearchTerm('')
  }
  
  
  return (
    <div>
      <label htmlFor="searchTermInput">Enter search term:</label>
      <input id="searchTermInput" value={searchTerm} onChange={handleSearchTerm}/>
      <button onClick={resetHandler}>Reset Search Term</button>
      {searchTerm && <p>{searchTerm}</p>}
    </div>
  )
}

const ResetAddress = () => {
  const [address, setAddress] = useState('')

  const handleAddressInput = (event) => {
    setAddress(event.target.value)
  }

  const resetAddressHandler = () => {
    setAddress('')
  }
  
  return (
    <div>
      <label htmlFor="addressInput">Enter your address:</label>
      <input id="addressInput" value={address} onChange={handleAddressInput}/>
      <button onClick={resetAddressHandler}>Reset Address</button>
      {address && <p>{address}</p>}
    </div>
  )
}

const ClearMessage = () => {
  const [message, setMessage] = useState('')

  const handleMessageInput = (event) => {
    setMessage(event.target.value)
  }

  const clearMessageHandler = () => {
    setMessage('')
  }
  
  return (
    <div>
      <label htmlFor="messageInput">Enter a message:</label>
      <input id="messageInput" value={message} onChange={handleMessageInput} />
      <button onClick={clearMessageHandler}>Clear Message</button>
    </div>
  )
}

export default function App() {
  return (
    <main>
      <ValidateZipcode />
      <br />
      <br />
      <CapitalizeName />
      <br />
      <br />
      <ResetSearchTerm />
      <br />
      <br />
      <ResetAddress />
      <br />
      <br />
      <ClearMessage />
    </main>
  );
}
