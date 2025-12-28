import Profile from "./Components/Profile";
import UserContextProvider from "./Context/UserContextProvider";
import Login from "./Components/Login"
function App() {
  return (
    <UserContextProvider>
      <Login/>
      <Profile/>
    </UserContextProvider>
  );
}

export default App;
