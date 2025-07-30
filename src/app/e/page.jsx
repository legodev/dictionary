import Structure from '../components/Structure'
import Word from '../components/Word'

const textsE = [
  {
    subtitle: 'Email (n.):',
    paragraph:
      ' Electronic mail; a common means of written communication emphasized in the text.',
  },
  {
    subtitle: 'Emotion sign (n. phrase):',
    paragraph: 'Refers to emoticons or emojis used to convey feelings in text (e.g., :-) for happiness).',
  }
]

export default function E() {
  return (
    <Structure letter={'E'} previous={'./d'} next={'./f'}>
      {textsE.map((text, index) => (
        <Word key={index} subtitle={text.subtitle} paragraph={text.paragraph} />
      ))}
    </Structure>
  )
}
