import Structure from '../components/Structure'
import Word from '../components/Word'

const textsG = [
  {
    subtitle: 'Gonna (abbr.) ',
    paragraph:
      'Cyber-English abbreviation for "going to."',
  },
  {
    subtitle: 'GIF (Graphics Interchange Format) (n.):',
    paragraph:
      'A bitmap image format that supports both animated and static images. Widely used for short, looping animations on the web.',
  },
]

export default function G() {
  return (
    <Structure letter={'G'} previous={'./f'} next={'./h'}>
      {textsG.map((text, index) => (
        <Word key={index} subtitle={text.subtitle} paragraph={text.paragraph} />
      ))}
    </Structure>
  )
}
