import Project from '../components/Project'

export default function Portfolio() {
  return (
    <div className="container text-center">
      <h2>Portfolio</h2>
      <div className="row">
        <Project title="Book Nite" src="https://github.com/abbyjo/book-nite/raw/main/assets/images/screenshot.png" />
        <Project title="Leap To Success" src="https://i.gyazo.com/a268f23784807142fba7a591dcb8b3e5.png" />
      </div>
      <div className='row'>
      <Project title="Weather Dashboard" src="https://github.com/abbyjo/the-weather-up-there/raw/main/assets/images/screenshot.png" />
      <Project title="Book Nite" src="https://miku.sega.com/megamixplus/img/characters/miku-full.jpg" />
      </div>
      <div className="row">
      <Project title="Book Nite" src="https://miku.sega.com/megamixplus/img/characters/miku-full.jpg" />
      </div>

    </div>
  );
}
