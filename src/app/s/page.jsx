import Structure from '../components/Structure'
import Word from '../components/Word'

const textsS = [
  {
    subtitle: 'Subdomain (n.):',
    paragraph:
      'A division of the main domain used to organize different sections of a website. For example, in blog.example.com, blog is the subdomain.',
  },
  {
    subtitle: 'Sth (abbr.):',
    paragraph:
      'Common text message abbreviation for "something."',
  },
  {
    subtitle: 'Symbols (n.):',
    paragraph:
      'Characters like "@" or numbers like "2" used to represent words or sounds in Cyber-English.',
  },
  {
    subtitle: 'Software (n.):',
    paragraph:
      'The programs and other operating information used by a computer.',
  },
  {
    subtitle: 'Static (adj.):',
    paragraph:
      'Referring to something that is fixed or does not change. In programming, a static variable or method is associated with a class, rather than with an object of that class.',
  },
  {
    subtitle: 'Storage (n.):',
    paragraph:
      'A place where data is held in a computer system, such as a hard drive, SSD, or cloud storage.',
  },
]

export default function S() {
  return (
    <Structure letter={'S'} previous={'./r'} next={'./t'}>
      {textsS.map((text, index) => (
        <Word key={index} subtitle={text.subtitle} paragraph={text.paragraph} />
      ))}
    </Structure>
  )
}
