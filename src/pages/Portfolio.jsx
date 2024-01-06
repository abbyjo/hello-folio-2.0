import Project from '../components/Project'

export default function Portfolio() {
  return (
    <div className="container text-center">
      <h2>Portfolio</h2>
      <div className="row">
        <Project
          title="myShelf"
          github="https://github.com/abbyjo/my-shelf"
          link="https://my-comic-shelf.onrender.com/"
          src="https://camo.githubusercontent.com/3f3ec753e5f374173b0d1d3bb4068009667278ceaa59b428c145b489aab573d5/68747470733a2f2f692e6779617a6f2e636f6d2f35666131623233386537363564643861393964626164613732373939636236612e6a7067"
        />
      </div>
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
    </div>
  );
}
