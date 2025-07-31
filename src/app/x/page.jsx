import Structure from '../components/Structure'
import Word from '../components/Word'

const textsX = [
  {
    subtitle: 'XML (Extensible Markup Language) (n.): ',
    paragraph:
      'A markup language similar to HTML but designed to transport and store data, with a focus on what the data is rather than how it looks.',
  },
]

export default function X() {
  return (
    <Structure letter={'X'} previous={'./w'} next={'./y'}>
      {textsX.map((text, index) => (
        <Word key={index} subtitle={text.subtitle} paragraph={text.paragraph} />
      ))}
    </Structure>
  )
}
