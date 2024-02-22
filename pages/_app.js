import Head from 'next/head';
import Link from 'next/link';
import '../styles/global.css';
import '../styles/main-board.css';
import Setup from '../data/setup.json';

const siteTitle = "Koenopoly";

export default function App() {
  const excludedList = ['Start','Kans','Casino','Jail'];
  const players = [
    { "name": "player 1","amount": 0},
    { "name": "player 2","amount": 0},
    { "name": "player 3","amount": 0},
    { "name": "player 4","amount": 0}
  ];
  const currency = '$';
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className='scores'>
        <div className='players'>
          {players.map((player, index) => (
            <div className={index+' player'}>
              <h3>{player.name}</h3>
              <p>{player.amount}</p>
            </div>
          ))}
        </div>
        <div className='pot'>
          <h3>Pot</h3>
          <p>0 {currency}</p>
        </div>
      </section>
      <section className='main-board'>
        {Setup.tiles.map((tile) => (
          <section className={'tile '+tile.name} style={{backgroundColor:tile.color,gridArea:tile.position}}>
            {(excludedList.includes(tile.name) == false) ?
            <div className='houses'>
            </div> : <div/>}
            <h2>{tile.name}</h2>
            {(excludedList.includes(tile.name) == false) ?
            <div>
              <h3 className='amount'>{tile.amount}{currency}</h3>
              <p className='step'>{tile.step}</p>
            </div> : ''}
          </section>
        ))}
        <section className='middle'>
          <div className='chance-cards'>
            <p>Middle</p>
          </div>
          <div className='pot'>

          </div>
          <div className='luck-cards'>

          </div>
          <div className='pions'>

          </div>
        </section>
      </section>
      <section className='actions'>
        <button>Add House</button>
        <button>Remove House</button>
      </section>
    </>
  );
}
