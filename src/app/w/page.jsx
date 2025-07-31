import Structure from '../components/Structure'
import Word from '../components/Word'

const textsW = [
  {
    subtitle: 'W/ (abbr.):',
    paragraph: 'Common text message abbreviation for "with".',
  },
  {
    subtitle: 'WAN2 (abbr.): ',
    paragraph: 'Common text message abbreviation for "want to."',
  },
  {
    subtitle: 'Wanna (abbr.): ',
    paragraph: ' Cyber-English abbreviation for "want to."',
  },
  {
    subtitle: 'WOT (abbr.):',
    paragraph: 'Common text message abbreviation for "what."',
  },
  ,
  {
    subtitle: 'WOT RU TRYNG 2 SAY? (text message):',
    paragraph: 'Cyber-English for "What are you trying to say?"',
  },
  {
    subtitle: 'WWW (World Wide Web) (n.):',
    paragraph:
      'A system of interconnected documents and other resources, linked by hyperlinks and URLs.',
  },
]

export default function W() {
  return (
    <Structure letter={'W'} previous={'./v'} next={'./x'}>
      {textsW.map((text, index) => (
        <Word key={index} subtitle={text.subtitle} paragraph={text.paragraph} />
      ))}
    </Structure>
  )
}
