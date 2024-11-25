const Message = ({ isLoggedIn }) => {
  // if(isLoggedIn){
  //   return <p>Welcome Back, User!</p>
  // } else {
  //   return <p>Please login to continue</p>
  // }

  return isLoggedIn ? <p>Welcome Back, User</p> : <p>Please login to continue</p>
}

const Greeting = ({ isMorning }) => <p>{isMorning ? "Good Morning!" : "Good Evening!"}</p>

const ShowNotification = ({ notification }) => {
  return <div>{notification && <p>{notification}</p>}</div>
}

const TicketPricing = ({ passengerAge }) => {
  let price = 100
  return (
    <div>
      {passengerAge > 60 ? <p>Ticket Price: {price - 0.15 * price}</p> : <p>Ticket Price: {price}</p>}
    </div>
  )
}

export default function App() {
  return (
    <main>
      <Message isLoggedIn={true} />
      <Greeting isMorning={true} />
      <ShowNotification notification="Notification Message" />
      <TicketPricing passengerAge={50} />
    </main>
  )
}
