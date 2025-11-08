import styles from './page.module.css'
import Word from '../components/Word'
import Link from 'next/link'

const programmingTexts = [
  // --- CONCEPTOS FUNDAMENTALES Y TRADUCTORES ---
  {
    subtitle: 'Programming Language: ',
    paragraph:
      "A symbolic language used to communicate instructions to the computer because computers can't understand spoken English or any other natural language. They must be translated into machine code, the only language computers can understand directly.",
  },
  {
    subtitle: 'Machine code: ',
    paragraph:
      "The most basic language understood directly by a computer's CPU. It consists of binary instructions (1s and 0s) that tell the processor to perform specific tasks. It is considered the CPU's native language. Machine code is too difficult to write for humans.",
  },
  {
    subtitle: 'Low-level programming languages: ',
    paragraph:
      'Programming languages that are close to machine code and provide little abstraction from the hardware. They allow direct control of the CPU, memory, and other components. They are powerful and efficient, but difficult to understand for humans. f.e: Machine code, assembly, C....',
  },
  {
    subtitle: 'Assembly: ',
    paragraph:
      'A low-level programming language that provides a human-readable representation of machine code. Each instruction in assembly corresponds closely to a CPU instruction, using symbolic names (mnemonics) instead of raw binary.',
  },
  {
    subtitle: 'Mnemonics: ',
    paragraph:
      'In assembly language, mnemonics are short symbolic names used to represent machine instructions. They make code easier to read and write by replacing raw binary opcodes with human-friendly words. f.e: ADD (addition), MOV (move data), JMP (jump)....',
  },
  {
    subtitle: 'Assembler: ',
    paragraph:
      'A piece of software that translates the program (written in assembly) into machine code.',
  },
  {
    subtitle: 'High-level language: ',
    paragraph:
      'A programming language designed to be easy for humans to read and write, using words and symbols that resemble natural language or mathematical notation. High-level languages provide strong abstraction from hardware details, allowing programmers to focus on logic and problem-solving rather than machine instructions. f.e: Python, Java, and C++, FORTRAN....',
  },
  {
    subtitle: 'Source Code: ',
    paragraph:
      'The human-readable set of instructions written in a programming language before being translated into machine code. Source code expresses the logic and operations of a program using words, symbols, and syntax that programmers can understand and edit. It must be compiled or interpreted to run on a computer.',
  },
  {
    subtitle: 'Object code: ',
    paragraph:
      'The machine-readable output produced by a compiler or assembler after translating source code. It consists of instructions in binary or another low-level format that a computer can execute directly or link with other object code files to form a complete program. Unlike source code, object code is not easily human-readable.',
  },
  {
    subtitle: 'Compiler: ',
    paragraph:
      'A software program that translates source code written in a high-level programming language into machine code or another lower-level form. A compiler translates the source code into object code by converting the entire program into machine code in one go. Compilers also often perform optimizations to improve efficiency and detect errors during translation.',
  },
  {
    subtitle: 'Interpreter: ',
    paragraph:
      'A type of software that directly executes instructions written in a programming language without first converting them into machine code. On the other hand, an interpreter translates the source code line by line as the program is running. Easier to test and modify but usually slower than compiled programs.',
  },

  // --- LENGUAJES DE PROGRAMACIÓN ESPECÍFICOS Y ACRÓNIMOS ---
  {
    subtitle: 'FORTRAN (Formula Translator): ',
    paragraph:
      'A high-level language developed by IBM in 1954. It was the first high-level language in data processing and is still used for scientific and engineering applications.',
  },
  {
    subtitle: 'COBOL (Common Business Oriented Language): ',
    paragraph:
      'A high-level language developed in 1959. It is widely used and mainly for business applications. For example, the statement ADD VAT to NET-PRICE could be used in a COBOL program.',
  },
  {
    subtitle: 'BASIC (Beginner’s All-purpose Symbolic Instruction Code): ',
    paragraph:
      'A high-level language developed in the 1960s. It was widely used in microcomputer programming because it was easy to learn.',
  },
  {
    subtitle: 'Visual BASIC: ',
    paragraph:
      'A modern version of the old BASIC language. It was developed by Microsoft in 1990. It is used to build graphical elements such as buttons and windows in Windows programs. The adjective Visual refers to the technique used to create a graphical user interface. It enables programmers to create a variety of Windows applications.',
  },
  {
    subtitle: 'PASCAL: ',
    paragraph:
      'A high-level language created in 1971. It is used in universities to teach the fundamentals of programming.',
  },
  {
    subtitle: 'C: ',
    paragraph:
      'A high-level language developed in the 1980s at AT&T. It is used to write system software, graphics and commercial applications.',
  },
  {
    subtitle: 'C++: ',
    paragraph:
      'A version of C which incorporates object-oriented programming. The programmer concentrates on particular things (a piece of text, a graphic or a table, etc.) and gives each object functions which can be altered without changing the entire program. This makes programs easier to modify.',
  },
  {
    subtitle: 'Object-oriented: ',
    paragraph:
      'A programming paradigm based on the concept of objects, which bundle data (attributes) and behavior (methods) together. Object-oriented programming (OOP) emphasizes principles like encapsulation, inheritance, and polymorphism, making code more modular, reusable, and easier to maintain. f.e: Java, C++, Python, JavaScript....',
  },
  {
    subtitle: 'Java: ',
    paragraph:
      'A high-level language designed by Sun in 1995 to run on the Web.',
  },
  {
    subtitle: 'Java applets: ',
    paragraph:
      'In Java, an applet is a small program written in Java that runs inside a web browser or an applet viewer. Applets were used to add interactive features like graphics, animations, or games to web pages. They have been deprecated since Java 9 due to security concerns and the rise of modern web technologies.',
  },
  {
    subtitle: 'JVM: ',
    paragraph:
      'Java Virtual Machine (JVM) is a software-based engine that runs Java programs by interpreting or compiling Java bytecode (.class files) into machine instructions for the host system. The JVM provides platform independence, memory management, and security features, allowing the same Java program to execute on different operating systems without modification.',
  },
  {
    subtitle: 'javac: ',
    paragraph:
      'The command-line tool that compiles Java source code (.java files) into bytecode (.class files). javac is part of the Java Development Kit (JDK) and is essential for transforming human-readable Java code into a format executable by the Java Virtual Machine (JVM).',
  },
  {
    subtitle: '.java: ',
    paragraph:
      'A source code file written in the Java programming language. It contains human-readable instructions (classes, methods, variables, etc.) that define the logic of a program. .java files must be compiled by the Java compiler (javac) into .class files.',
  },
  {
    subtitle: '.class: ',
    paragraph:
      'A file generated by the Java compiler that contains bytecode, the intermediate instructions understood by the Java Virtual Machine. Each class file corresponds to one compiled Java class or interface and is required for execution. Unlike source code (.java), .class files are not human-readable but can be run on any system with a JVM.',
  },

  // --- LENGUAJES DE MARCADO (MARKUP LANGUAGES) ---
  {
    subtitle: 'Markup languages: ',
    paragraph:
      'Languages used to create web documents. They use instructions, known as markup tags, to format and link text files. It is important not to confuse programming languages with markup languages.',
  },
  {
    subtitle: 'HTML (HyperText Markup Language): ',
    paragraph:
      'A markup language that allows us to describe how information will be displayed on web pages. It uses pre-defined tags.',
  },
  {
    subtitle: 'XML (Extensible Markup Language): ',
    paragraph:
      'A markup language which enables us to define our own tags to describe data better. Unlike HTML, which uses pre-defined tags, XML is not limited by a fixed set of tags.',
  },
  {
    subtitle: 'VoiceXML (Voice Extensible Markup Language): ',
    paragraph:
      'A markup language created in 2000 to make web content accessible via voice and phone. It is the HTML of the voice web. VoiceXML is used to create voice applications that run on the phone, whereas HTML is used to create visual applications (for example, web pages).',
  },
]

export default function Programming() {
  return (
    <main className={styles.mainContainer}>
      <h1 className={styles.title}>Programming</h1>
      {programmingTexts.map((text, index) => (
        <Word key={index} subtitle={text.subtitle} paragraph={text.paragraph} />
      ))}
      <Link href='./' className={styles.mainLink}>Home</Link>
    </main>
  )
}
