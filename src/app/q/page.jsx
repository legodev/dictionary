import Structure from '../components/Structure'
import Word from '../components/Word'

const textsQ = [
  {
    subtitle: 'Query (n.): ',
    paragraph:
      'Starts with a question mark ? and is used to pass data to the server. It contains "key-value" pairs separated by &, as in ?id=123&sort=asc. It`s commonly used for searches or filtering content.',
  },
  {
    subtitle: 'QA (Quality Assurance):',
    paragraph:
      'The systematic process of ensuring that a product or service meets specified standards and customer expectations.',
  },
  {
    subtitle: 'QoS (Quality of Service):',
    paragraph:
      'A set of technologies for managing data traffic efficiently to reduce packet loss, latency, and jitter on a network.',
  },
  {
    subtitle: 'Query: ',
    paragraph:
      'A request for information from a database, search engine, or other data source.',
  },
]

export default function Q() {
  return (
    <Structure letter={'Q'} previous={'./p'} next={'./r'}>
      {textsQ.map((text, index) => (
        <Word key={index} subtitle={text.subtitle} paragraph={text.paragraph} />
      ))}
    </Structure>
  )
}
