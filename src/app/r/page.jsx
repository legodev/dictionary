import Structure from '../components/Structure'
import Word from '../components/Word'

const textsR = [
  {
    subtitle: 'R (abbr.):',
    paragraph: 'Cyber-English abbreviation for "are."',
  },
  {
    subtitle: 'RU (abbr.): ',
    paragraph: 'Common text message abbreviation for "are you?"',
  },
  {
    subtitle: 'RAM (Random Access Memory)(n.):',
    paragraph:
      'A form of computer memory that can be read and changed in any order, typically used to store working data and machine code.',
  },
  {
    subtitle: 'Router (n.):',
    paragraph:
      'A networking device that forwards data packets between computer networks.',
  },
  {
    subtitle: 'ROM (Read-Only Memory) (n.):',
    paragraph:
      'A type of non-volatile memory used in computers that cannot be electronically modified after the manufacture of the memory device.',
  },
]

export default function R() {
  return (
    <Structure letter={'R'} previous={'./q'} next={'./s'}>
      {textsR.map((text, index) => (
        <Word key={index} subtitle={text.subtitle} paragraph={text.paragraph} />
      ))}
    </Structure>
  )
}
