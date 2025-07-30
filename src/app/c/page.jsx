import Structure from '../components/Structure'
import Word from '../components/Word'

const textsC = [
  {
    subtitle: 'C (abbr.):',
    paragraph: 'Cyber-English abbreviation for "see" (e.g., "c u").',
  },
  {
    subtitle: 'Chat rooms (n. phrase):',
    paragraph: 'Online spaces for real-time text-based conversation.',
  },
  {
    subtitle: 'Cyber-English (n. phrase): ',
    paragraph:
      'A new, informal form of English used in digital communication, particularly text messages and online chats, characterized by abbreviations, symbols, and unique grammar.',
  },
  {
    subtitle: 'C u @ 8 2nite! (text message):  ',
    paragraph: 'Cyber-English for "See you at eight o`clock tonight!"',
  },
]

export default function C() {
  return (
    <Structure letter={'C'} previous={'./b'} next={'./d'}>
      {textsC.map((text, index) => (
        <Word key={index} subtitle={text.subtitle} paragraph={text.paragraph} />
      ))}
    </Structure>
  )
}
