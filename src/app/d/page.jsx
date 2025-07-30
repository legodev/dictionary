import Structure from '../components/Structure'
import Word from '../components/Word'

const textsD = [
  {
    subtitle: 'Dictionary corner (n. phrase):',
    paragraph:
      'A section of the material focusing on vocabulary related to communication verbs.',
  },
  {
    subtitle: 'DO U WAN2 C ME L8R 4 A DRINK? (text message):',
    paragraph: 'Cyber-English for "Do you want to see me later for a drink?"',
  }
]

export default function D() {
  return (
    <Structure letter={'D'} previous={'./c'} next={'./e'}>
      {textsD.map((text, index) => (
        <Word key={index} subtitle={text.subtitle} paragraph={text.paragraph} />
      ))}
    </Structure>
  )
}
