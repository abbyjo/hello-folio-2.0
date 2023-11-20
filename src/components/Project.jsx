export default function Project(props) {
    return (
      <div className="col p-2 mt-3">
        <p>{props.title}</p>
        <img src={props.src} className="rounded" width='100%'></img>
      </div>
    );
  }