export default function About() {
  return (
    <div>
      <h2>About Me</h2>
      <div className="row">
      <div className= 'col-sm-3 mx-5 p-3'>
        <img id= "avatar" src="./src/assets/avatar.png"></img>
      </div>
      <div className= 'col m-5 p-3'>
        <h4>
          Hello, my name is Abby!<br />
          I'm an artist and office worker shifting careers into web development.
          Learning new things and bringing ideas to life are what I'm most passionate about!✨
        </h4>
      </div>
      </div>
    </div>
  );
}
