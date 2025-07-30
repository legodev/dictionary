import Structure from '../components/Structure'
import Word from '../components/Word'

const textsF = [
  {
    subtitle: 'FAQ (abbr.): ',
    paragraph:
      'Stands for "Frequently Asked Questions." A section on a website that provides answers to common user queries.',
  },
  {
    subtitle: 'Font (n.):',
    paragraph:
      'A set of printable or displayable text characters in a specific style and size (e.g., Arial, Times New Roman). In web design, web fonts are crucial for consistent typography.',
  },
  {
    subtitle: 'Frontend (n.):',
    paragraph:
      'The part of a website or application that users directly interact with and see in their browser. It includes everything from the layout, colors, and fonts to interactive elements like buttons and forms. It`s built with HTML, CSS, and JavaScript.',
  },
  {
    subtitle: 'Full Stack (adj.):',
    paragraph:
      'Refers to a developer or technology stack that encompasses both frontend and backend technologies. A "full stack developer" can work on all layers of a web application.',
  },
]

export default function F() {
  return (
    <Structure letter={'F'} previous={'./e'} next={'./g'}>
      {textsF.map((text, index) => (
        <Word key={index} subtitle={text.subtitle} paragraph={text.paragraph} />
      ))}
    </Structure>
  )
}
