import Structure from '../components/Structure'
import Word from '../components/Word'

const textsO = [
  {
    subtitle: 'OIC (abbr.):',
    paragraph: 'Common text message abbreviation for "Oh, I see."',
  },
  {
    subtitle: 'Offline (adj./adv.):',
    paragraph:
      'Refers to a state where a computer, device, or system is not connected to a network, especially the internet. "Offline access" means a web application can still function even without an internet connection.',
  },
  {
    subtitle: 'Online (adj./adv.):',
    paragraph:
      'Refers to a state where a computer, device, or system is connected to a network, especially the internet.',
  },
  {
    subtitle: 'Open Source (adj.):',
    paragraph:
      'Software for which the original source code is made freely available and may be redistributed and modified. It promotes collaboration and transparency in development (e.g., Linux, WordPress, Git).',
  },
  {
    subtitle: 'Operating System (OS) (n.):',
    paragraph:
      'System software that manages computer hardware and software resources and provides common services for computer programs. It`s the core software that allows your computer to run (e.g., Windows, macOS, Linux, Android, iOS).',
  },
  {
    subtitle: 'Output (n.):',
    paragraph:
      'The result or information produced by a computer system, program, or process, typically displayed to the user or sent to another system (e.g., data displayed on a screen, printed documents, data files).',
  },
]

export default function O() {
  return (
    <Structure letter={'O'} previous={'./n'} next={'./p'}>
      {textsO.map((text, index) => (
        <Word key={index} subtitle={text.subtitle} paragraph={text.paragraph} />
      ))}
    </Structure>
  )
}
