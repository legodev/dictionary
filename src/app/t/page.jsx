import Structure from '../components/Structure'
import Word from '../components/Word'

const textsT = [
  {
    subtitle: 'Top-Level Domain (TLD) (n.): ',
    paragraph: 'The last part of a domain name, such as .com, .org, or .net. It indicates the category of the website.',
  },
  {
    subtitle: 'Text message (n. phrase):',
    paragraph: 'A short electronic message sent via mobile phone.',
  },
  {
    subtitle: 'Text messaging (n. phrase): ',
    paragraph: 'The act of sending text messages.',
  },
  {
    subtitle: 'Tag (n.): ',
    paragraph:
      'A keyword or piece of code used to label or categorize content on a webpage.',
  },
  {
    subtitle: 'Text editor (n.):',
    paragraph:
      'A software program used for writing and editing source code, such as HTML, CSS, or Javascript.',
  },
  {
    subtitle: 'Typography (n.):',
    paragraph:
      'The art and technique of arranging type to make written language legible, readable, and appealing when displayed. It refers to the choice of fonts, sizes, and spacing in a web design.',
  },
]

export default function T() {
  return (
    <Structure letter={'T'} previous={'./s'} next={'./u'}>
      {textsT.map((text, index) => (
        <Word key={index} subtitle={text.subtitle} paragraph={text.paragraph} />
      ))}
    </Structure>
  )
}
