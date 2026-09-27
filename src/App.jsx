import { useState } from "react";
import Profile from "./components/Profile";
import RepoList from "./components/RepoList";
import About from "./components/About";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  function handleIsOpen() {
    setIsOpen((o) => !o);
  }

  return (
    <div>
      <Profile
        githubUrl="https://github.com/umfrancisco"
        linkedinUrl="https://www.linkedin.com/in/francisco-guitler"
        />
      {isOpen ? (
        <RepoList onOpen={handleIsOpen} />
      ) : (
        <About onOpen={handleIsOpen} />
      )}
    </div>
  );
}

export default App;
