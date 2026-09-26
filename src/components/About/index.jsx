import styles from "./About.module.css";

function About({ onOpen }) {
  return (
    <div className="container">
      <div>
        <h3>About me</h3>

        <div>
          <p>Full Stack developer focused on JavaScript + TypeScript + React</p>
          <p>Strong interest in system design, APIs, and databases</p>
          <p>Experience building RESTful services and data pipelines</p>
          <p>Currently improving skills in distributed systems & cloud</p>
        </div>
        
        <h3>Tech Stack</h3>

        <h4>Languages & Frameworks</h4>
        <div>
          <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=000000" alt="" />
          <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="" />
          <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=20232A" alt="" />
          <img src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white" alt="" />
          <img src="https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white" alt="" />
        </div>

        <h4>Databases</h4>
        <div>
          <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" alt="" />
          <img src="https://img.shields.io/badge/MySQL-00758F?style=for-the-badge&logo=mysql&logoColor=white" alt="" />
          <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="" />
        </div>

        <h4>Tools & Technologies</h4>
        <div>
          <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="" />
          <img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white" alt="" />
          <img src="https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="" />
          <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="" />
        </div>

        <h4>What I'm Looking For</h4>
        <div>
          <p>Junior Full Stack Developer opportunities</p>
          <p>Collaborative teams with strong engineering culture</p>
          <p>Opportunities to grow in JavaScript, TypeScript and React</p>
        </div>

        <button onClick={onOpen}>Check out my selected projects</button>
      </div>
    </div>
  );
}

export default About;
