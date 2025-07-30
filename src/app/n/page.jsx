import Structure from '../components/Structure'
import Word from '../components/Word'

const textsN = [
  {
    subtitle: 'NE1 (abbr.):',
    paragraph: 'Common text message abbreviation for "anyone."',
  },
  {
    subtitle: 'Navigation (n.):',
    paragraph:
      'The system or set of elements on a website or application that allows users to move between different pages, sections, or content areas (e.g., menus, breadcrumbs, links). Good navigation is crucial for user experience.',
  },
  {
    subtitle: 'Network (n.):',
    paragraph:
      'A collection of interconnected computers and devices that can exchange data and share resources. The Internet is the largest global network.',
  },
]

export default function N() {
  return (
    <Structure letter={'N'} previous={'./m'} next={'./o'}>
      {textsN.map((text, index) => (
        <Word key={index} subtitle={text.subtitle} paragraph={text.paragraph} />
      ))}
    </Structure>
  )
}
