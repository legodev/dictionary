import Structure from '../components/Structure'
import Word from '../components/Word'

const textsU = [
  {
    subtitle: 'U (abbr.):',
    paragraph: 'Cyber-English abbreviation for "you."',
  },
  {
    subtitle: 'Ur (abbr.): ',
    paragraph: 'Cyber-English abbreviation for "your" or "you`re."',
  },
  {
    subtitle: 'UI (User Interface) (n.):',
    paragraph:
      'The user interface. It refers to the series of screens, pages, buttons, and other visual elements that you interact with to use a device or a program.',
  },
  {
    subtitle: 'URL (Uniform Resource Locator) (n.): ',
    paragraph:
      'An address that specifies the location of a resource (such as a webpage, image, or video) on the internet.',
  },
  ,
  {
    subtitle: 'UX (User Experience) (n.): ',
    paragraph:
      'The user experience. It refers to the overall experience a user has when interacting with a website, application, or digital product.',
  },
]

export default function U() {
  return (
    <Structure letter={'U'} previous={'./t'} next={'./v'}>
      {textsU.map((text, index) => (
        <Word key={index} subtitle={text.subtitle} paragraph={text.paragraph} />
      ))}
    </Structure>
  )
}
