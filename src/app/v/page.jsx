import Structure from '../components/Structure'
import Word from '../components/Word'

const textsV = [
  {
    subtitle: 'Variable (n.):',
    paragraph:
      'In programming, a symbol or name that represents a value, which can be changed.',
  },
  {
    subtitle: 'Viewport (n.): ',
    paragraph:
      'The visible area of a webpage in a web browser. It varies with the device and screen size.',
  },
]

export default function V() {
  return (
    <Structure letter={'V'} previous={'./u'} next={'./w'}>
      {textsV.map((text, index) => (
        <Word key={index} subtitle={text.subtitle} paragraph={text.paragraph} />
      ))}
    </Structure>
  )
}
