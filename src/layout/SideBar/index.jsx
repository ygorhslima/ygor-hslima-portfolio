import './style.css'

export default function SideBar({ isOpen }) {
  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
        <a href="#" className="link">
            <i className="fa-solid fa-house"></i>
            <p>Home</p>
        </a>

        <a href="#skills" className="link">
            <i className="fa-solid fa-brain"></i>
            <p>Skills</p>
        </a>

        <a href="#formacao" className="link">
            <i className="fa-solid fa-graduation-cap"></i>
            <p>Formação</p>
        </a>br

        <a href="#projetos" className="link">
            <i className="fa-solid fa-trowel-bricks"></i>
            <p>Projetos</p>
        </a>
    </div>
  );
}