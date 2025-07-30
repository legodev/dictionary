import Structure from '../components/Structure'
import Word from '../components/Word'

const textsH = [
  {
    subtitle: 'Hate (v.)',
    paragraph: ' A verb used in a text message example ("IH8 U").',
  },
  {
    subtitle: 'IH8 U (text message):',
    paragraph: 'Cyber-English for "I hate you."',
  },
  {
    subtitle: 'HTTP (HyperText Transfer Protocol) (n.):',
    paragraph:
      'The foundational protocol for data communication on the World Wide Web. It defines how messages are formatted and transmitted, and what actions web servers and browsers should take in response to various commands."',
  },
  {
    subtitle: 'HTTPS (HyperText Transfer Protocol Secure) (n.):',
    paragraph:
      'An extension of HTTP that encrypts communications between a web browser and a website. It uses SSL/TLS encryption to provide secure identification of a network server and ensure the confidentiality and integrity of data.',
  },
  {
    subtitle: 'Hypertext (n.):',
    paragraph:
      'Text displayed on a computer display or other electronic device with references (hyperlinks) to other text that the reader can immediately access. The core concept behind the World Wide Web.',
  },
  {
    subtitle: 'Hardware (n.):',
    paragraph:
      'The physical components of a computer system or electronic device (e.g., CPU, RAM, hard drive, keyboard, monitor). It`s the tangible part, as opposed to software.',
  },
  {
    subtitle: 'Header (n.):',
    paragraph:
      'The top section of a webpage, typically containing the site`s logo, main navigation menu, and sometimes a search bar or contact information.',
  },
  {
    subtitle: 'HTML (HyperText Markup Language) (n.):',
    paragraph:
      'he standard markup language for creating web pages and web applications. It describes the structure of a web page semantically and contains logical cues for rendering content."',
  },
]

export default function H() {
  return (
    <Structure letter={'H'} previous={'./g'} next={'./i'}>
      {textsH.map((text, index) => (
        <Word key={index} subtitle={text.subtitle} paragraph={text.paragraph} />
      ))}
    </Structure>
  )
}
