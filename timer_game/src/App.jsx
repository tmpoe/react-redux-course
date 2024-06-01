import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title='asd' targetTime={1} />
        <TimerChallenge title='asd2' targetTime={10} />
        <TimerChallenge title='asd3' targetTime={2} />
        <TimerChallenge title='asd4' targetTime={5} />
      </div>
    </>
  );
}

export default App;
