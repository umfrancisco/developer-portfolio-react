import Profile from "./components/Profile";
import RepoList from "./components/RepoList";

function App() {
  return(
    <div>
      <>
        <Profile 
          githubUrl="https://github.com/umfrancisco"
          linkedinUrl="https://www.linkedin.com/in/francisco-guitler"
          fullName="Francisco Guitler"
          techStack = "Full Stack Developer"
        />
        <RepoList username="umfrancisco" />
      </>
    </div>
  )
}

export default App
