import Structure from '../components/Structure'
import Word from '../components/Word'

const textsL = [
  {
    subtitle: 'L8R (abbr.):',
    paragraph: 'Common text message abbreviation for "later."',
  },
  {
    subtitle: 'LOL or LoL (abbr.):',
    paragraph: 'Common text message abbreviation for "Laugh out loud!"',
  },
  {
    subtitle: 'Luv (abbr.):',
    paragraph: 'Cyber-English abbreviation for "love."',
  },
  {
    subtitle: 'LAN (Local Area Network) (n.):',
    paragraph:
      ' A computer network that interconnects computers within a limited area, such as a residence, school, laboratory, university campus, or office building. It`s confined to a relatively small geographical area.',
  },
  {
    subtitle: 'Live Chat (n.): ',
    paragraph:
      'A real-time communication tool, typically embedded on a website, that allows visitors to chat directly with customer service representatives or support agents.',
  },
]

export default function L() {
  return (
    <Structure letter={'L'} previous={'./k'} next={'./m'}>
      {textsL.map((text, index) => (
        <Word key={index} subtitle={text.subtitle} paragraph={text.paragraph} />
      ))}
    </Structure>
  )
}
