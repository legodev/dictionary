import Structure from '../components/Structure'
import Word from '../components/Word'

const textsB = [
  {
    subtitle: 'B (abbr.): ',
    paragraph: 'Cyber-English abbreviation for "be."',
  },
  {
    subtitle: 'Backend (n.):',
    paragraph: ' The part of a website or application that the user doesn`t see, where information is stored and processed (servers, databases, application logic). It`s the opposite of the frontend.',
  },
  {
    subtitle: 'Blog (n.): ',
    paragraph:
      'A website or a section of a website that features entries (posts) arranged chronologically, often written by an individual or small group, in a more informal style.',
  },
  {
    subtitle: 'BTW (abbr.):',
    paragraph: 'Common text message abbreviation for "By the way."',
  },
]

export default function B() {
  return (
    <Structure letter={'B'} previous={'./a'} next={'./c'}>
      {textsB.map((text, index) => (
        <Word key={index} subtitle={text.subtitle} paragraph={text.paragraph} />
      ))}
    </Structure>
  )
}
