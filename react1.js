import React , { useState } from 'react';
import ReactDOM from 'react-dom';

const App = ({ citati }) => {
  const [selected, setSelected] = useState(0) // Селектован је нулти цитат
const [votes,setVotes] = useState(0)
  return (
    <div>
     <p>{citati[selected]}</p>   {/* Приказујемо селектован цитат */}
     <p>{citati[votes]}</p>
     <button onClick ={() => {} }> </button>
<button onClick= {() => {
if (selected<citati.length-1) {
  setSelected(selected+1)
}
else{setSelected(0)}
}} > next
</button>
    </div>
  )
}
const citati = [
  'I\'m not dumb. I just have a command of thoroughly useless information.',
  'Чудно је како је мало потребно да будемо срећни, и још чудније: како нам често баш то мало недостаје!',
  'Што не боли – то није живот, што не пролази – то није срећа',
  'Звезданог неба и људског срца никад се човек неће моћи нагледати',
  'Be yourself; everyone else is already taken.',
  'Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.',
  'If you tell the truth, you don\'t have to remember anything.',
  'Insanity is doing the same thing, over and over again, but expecting different results.',
  'A day without sunshine is like, you know, night.'
]

ReactDOM.render(
    <React.StrictMode>
        <App citati={citati}/>
    </React.StrictMode>,
    document.getElementById('root')
)



