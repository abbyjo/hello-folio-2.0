import '../styles/Folio.css';

export default function Project(props) {
    return (
      <div className="col p-2 mt-3 folio-div">
        <img src={props.src} className="folio-img rounded" width='100%'></img>
        <div className="middle">
          <a href={props.link} target="_blank" rel="noopener noreferrer"><h4 className="custom-label" >{props.title}</h4></a>
          <a href={props.github} target="_blank" rel="noopener noreferrer"><img src="/images/github-mark.png" className="git-icon"></img></a>
        </div>
      </div>
    );
  }