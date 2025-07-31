import Structure from '../components/Structure'
import Word from '../components/Word'

const textsP = [
  {
    subtitle: 'Path (n.):',
    paragraph:
      'Specifies the location of a specific page or resource within the website. It`s like a folder structure on a computer, for example, /category/example-page in example.com/category/example-page.',
  },
  {
    subtitle: 'PCM (abbr.): ',
    paragraph: ' Common text message abbreviation for "Please call me."',
  },
  {
    subtitle: 'Performance (n.):',
    paragraph:
      'In web development, how quickly and smoothly a website or application loads, responds to user interactions, and runs efficiently. Key metrics include load time, First Contentful Paint, and Time to Interactive.',
  },
  {
    subtitle: 'Pixel (px) (n.): ',
    paragraph:
      'The smallest addressable element in a raster image or on a display screen. It is the basic unit of digital image resolution.',
  },
  {
    subtitle: 'PNG (Portable Network Graphics) (n.):',
    paragraph:
      'A raster graphics file format that supports lossless data compression and transparent backgrounds. Widely used for web images, especially those with sharp lines, text, or transparency.',
  },
  {
    subtitle: 'Protocol (n.): ',
    paragraph:
      'A set of rules or conventions that govern the communication of data between different devices or systems on a network. (e.g., HTTP, FTP, TCP/IP).',
  },
]

export default function P() {
  return (
    <Structure letter={'P'} previous={'./o'} next={'./q'}>
      {textsP.map((text, index) => (
        <Word key={index} subtitle={text.subtitle} paragraph={text.paragraph} />
      ))}
    </Structure>
  )
}
