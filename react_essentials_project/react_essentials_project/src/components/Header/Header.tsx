import coreImg from '../../assets/react-core-concepts.png'
const reactDescriptions = ['Core', 'Essentials', 'Fundamentals', 'Basics', 'Key Concepts']

function getRandomDescription() {
  return reactDescriptions[Math.floor(Math.random() * reactDescriptions.length)]
}

export function Header() {
  return (
    <header>
      <img src={coreImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {getRandomDescription()} Fundamental React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  )
}