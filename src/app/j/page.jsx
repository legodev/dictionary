import Structure from '../components/Structure'
import Word from '../components/Word'

const textsJ = [
  {
    subtitle: 'JavaScript (JS) (n.): ',
    paragraph:
      'A high-level, interpreted programming language that is one of the core technologies of the World Wide Web. It enables interactive web pages and is an essential part of web applications. Alongside HTML and CSS, it`s one of the three foundational technologies for web development.',
  },
  {
    subtitle: 'JPEG (Joint Photographic Experts Group) (n.): ',
    paragraph:
      'A widely used method of lossy compression for digital images, particularly for photographs. It`s also the common file format (.jpg or .jpeg) for these compressed images.',
  },
]

export default function J() {
  return (
    <Structure letter={'J'} previous={'./i'} next={'./k'}>
      {textsJ.map((text, index) => (
        <Word key={index} subtitle={text.subtitle} paragraph={text.paragraph} />
      ))}
    </Structure>
  )
}
