import Structure from '../components/Structure'
import Word from '../components/Word'

const textsY = [
  {
    subtitle: 'YR (abbr.):  ',
    paragraph: 'Common text message abbreviation for "your."',
  },
]

export default function Y() {
  return (
    <Structure letter={'Y'} previous={'./x'} next={'./z'}>
      {textsY.map((text, index) => (
        <Word key={index} subtitle={text.subtitle} paragraph={text.paragraph} />
      ))}
    </Structure>
  )
}
