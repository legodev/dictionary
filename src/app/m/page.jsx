import Structure from '../components/Structure'
import Word from '../components/Word'

const textsM = [
  {
    subtitle: 'Messenger services (n. phrase):',
    paragraph:
      'Applications allowing instant text-based communication between users.',
  },
  {
    subtitle: 'Mid-1990s (n. phrase):',
    paragraph:
      'The period when mobile phones and text messaging began to "take off" or become popular.',
  },
  {
    subtitle: 'Mo (abbr.): ',
    paragraph: 'Cyber-English abbreviation for "moment" (e.g., "@ the mo").',
  },
  {
    subtitle: 'Mobile phone (n. phrase): ',
    paragraph:
      'A portable device primarily for voice communication, but which spawned text messaging.',
  },
  {
    subtitle: 'Metalanguage (n.):',
    paragraph:
      'A language or system of symbols used to describe or analyze another language (the object language). In computing and web development, markup languages like HTML and XML are prime examples of metalanguages because they are used to describe the structure and content of other documents or data. They define how data is structured, rather than being the data itself.',
  },
  {
    subtitle: 'Markup Language (n.): ',
    paragraph:
      'A system for annotating a document in a way that is syntactically distinguishable from the text, providing instructions for its structure, formatting, or presentation (e.g., HTML, XML, Markdown).',
  },
]

export default function M() {
  return (
    <Structure letter={'M'} previous={'./l'} next={'./n'}>
      {textsM.map((text, index) => (
        <Word key={index} subtitle={text.subtitle} paragraph={text.paragraph} />
      ))}
    </Structure>
  )
}
