import UserContextProvider from "./Context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </UserContextProvider>
  );
}

export default App;
