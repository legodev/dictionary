import Structure from '../components/Structure'
import Word from '../components/Word'

const textsA = [
  {
    subtitle: 'Adverb of place (n. phrase):',
    paragraph:
      "A word or phrase that tells you where something happens (e.g., 'here,' 'there'). It may change in reported speech.",
  },
  {
    subtitle: 'Adverb of time (n. phrase):',
    paragraph:
      "A word or phrase that tells you when something happens (e.g., 'yesterday,' 'tomorrow'). It often changes in reported speech.",
  },
  {
    subtitle: 'Advise (v.):',
    paragraph: 'A reporting verb meaning to suggest the best course of action.',
  },

  {
    subtitle: 'A/Noon (abbr.):',
    paragraph: 'Cyber-English abbreviation for "afternoon."',
  },
  {
    subtitle: '@ (sym./abbr.): ',
    paragraph:
      'Symbol used in Cyber-English to represent "at" (e.g., "c u @ 8").',
  },
  {
    subtitle: 'Articles (n.): ',
    paragraph:
      'Grammatical terms for words like "a," "an," "the," which are often omitted in Cyber-English.',
  },
  {
    subtitle: 'Auxiliary verbs (n. phrase):',
    paragraph:
      'Helping verbs (e.g., "is," "are," "do," "have") often left out in Cyber-English.',
  },
]

export default function A() {
  return (
    <Structure letter={'A'} previous={'./index'} next={'./b'}>
      {textsA.map((text, index) => (
        <Word key={index} subtitle={text.subtitle} paragraph={text.paragraph} />
      ))}
    </Structure>
  )
}
