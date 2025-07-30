import Structure from '../components/Structure'
import Word from '../components/Word'

const textsK = [
  {
    subtitle: 'Keyboard (n.): ',
    paragraph:
      'The input device used for typing, particularly relevant for chat and text messages.',
  }
]

export default function K() {
  return (
    <Structure letter={'K'} previous={'./j'} next={'./l'}>
      {textsK.map((text, index) => (
        <Word key={index} subtitle={text.subtitle} paragraph={text.paragraph} />
      ))}
    </Structure>
  )
}
