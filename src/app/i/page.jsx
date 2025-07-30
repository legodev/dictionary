import Structure from '../components/Structure'
import Word from '../components/Word'

const textsI = [
  {
    subtitle: 'Informal text messages (n. phrase): ',
    paragraph:
      'Text communications characterized by casual language, abbreviations, and often disregard for conventional grammar.',
  },
  {
    subtitle: 'IMHO (abbr.):',
    paragraph:
      'Stands for "In My Humble Opinion." Used in informal online communication (forums, chats) to preface a personal opinion. Sometimes seen as "IMHO" for "In My Honest Opinion."',
  },
  {
    subtitle: 'Index (n.):',
    paragraph:
      '(Search Engines): The collection of all the web pages and content that a search engine has discovered and stored in its database. When you search, the engine looks through this index.',
  },
  {
    subtitle: 'Input (n.):',
    paragraph:
      'Data provided to a computer system or program.',
  },
]

export default function I() {
  return (
    <Structure letter={'I'} previous={'./h'} next={'./j'}>
      {textsI.map((text, index) => (
        <Word key={index} subtitle={text.subtitle} paragraph={text.paragraph} />
      ))}
    </Structure>
  )
}
