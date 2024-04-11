import coreImg  from '../../assets/react-core-concepts.png'
const reactDescriptions = ['Core', 'Essentials', 'Fundamentals', 'Basics', 'Key Concepts']

function getRandomDescription() {
  return reactDescriptions[Math.floor(Math.random() * reactDescriptions.length)]
}

function getRandomInt(max: number) {
    return Math.floor(Math.random() * max)
}
export function Header() {
    const description = reactDescriptions[getRandomInt(reactDescriptions.length)]
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