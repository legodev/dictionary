import Structure from '../components/Structure'
import Word from '../components/Word'

const textsZ = [
  {
    subtitle: 'Z-index (n.):',
    paragraph:
      'In CSS, a property that specifies the stack order of an element. An element with a higher z-index is placed in front of an element with a lower one.',
  },
]

export default function Z() {
  return (
    <Structure letter={'Z'} previous={'./y'} next={'./letters'}>
      {textsZ.map((text, index) => (
        <Word key={index} subtitle={text.subtitle} paragraph={text.paragraph} />
      ))}
    </Structure>
  )
}
