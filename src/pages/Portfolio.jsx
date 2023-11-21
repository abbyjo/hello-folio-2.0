import Project from '../components/Project'

export default function Portfolio() {
  return (
    <div className="container text-center">
      <h2>Portfolio</h2>
      <div className="row">
        <Project
          title="Book Nite"
          github="https://github.com/abbyjo/book-nite"
          link="https://abbyjo.github.io/book-nite/"
          src="https://github.com/abbyjo/book-nite/raw/main/assets/images/screenshot.png"
        />
        <Project
          title="Leap To Success"
          github="https://github.com/akcodes29/Leap-To-Success"
          link="https://github.com/akcodes29/Leap-To-Success"
          src="https://i.gyazo.com/a268f23784807142fba7a591dcb8b3e5.png"
        />
      </div>
      <div className='row'>
        <Project
          title="Weather Dashboard"
          github="https://github.com/abbyjo/the-weather-up-there"
          link="https://abbyjo.github.io/the-weather-up-there/"
          src="https://github.com/abbyjo/the-weather-up-there/raw/main/assets/images/screenshot.png"
        />
        <Project
          title="Quiz Me"
          github="https://github.com/abbyjo/quiz-me"
          link="https://abbyjo.github.io/quiz-me/"
          src="https://github.com/abbyjo/quiz-me/raw/main/assets/images/screenshot.png"
        />
      </div>
      <div className="row">
        <Project
          title="Project 6"
          github=""
          src="../src/assets/placeholder.jpg"
        />
      </div>

    </div>
  );
}
