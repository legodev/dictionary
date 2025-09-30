'use client'

import React, { useState } from 'react'
import styles from './page.module.css'
import Link from 'next/link'

// Aplanamos el layout para la lista de definiciones.
const keyList = [
  // Fila 1
  { key: '`', title: 'Grave accent or backtick / Tilde' },
  { key: '1', title: 'One / Exclamation mark' },
  { key: '2', title: 'Two / At sign' },
  { key: '3', title: 'Three / Hash or Number sign' },
  { key: '4', title: 'Four / Dollar sign' },
  { key: '5', title: 'Five / Percent sign' },
  { key: '6', title: 'Six / Caret or Circumflex' },
  { key: '7', title: 'Seven / Ampersand' },
  { key: '8', title: 'Eight / Asterisk' },
  { key: '9', title: 'Nine / Left parenthesis' },
  { key: '0', title: 'Zero / Right parenthesis' },
  { key: '-', title: 'Hyphen or Dash / Underscore' },
  { key: '=', title: 'Equals sign / Plus sign' },
  { key: 'backspace', title: 'Backspace' },
  // Fila 2
  { key: 'tab', title: 'Tabulator' },
  { key: 'q', title: 'Q' },
  { key: 'w', title: 'W' },
  { key: 'e', title: 'E' },
  { key: 'r', title: 'R' },
  { key: 't', title: 'T' },
  { key: 'y', title: 'Y' },
  { key: 'u', title: 'U' },
  { key: 'i', title: 'I' },
  { key: 'o', title: 'O' },
  { key: 'p', title: 'P' },
  { key: '[', title: 'Left bracket / Left brace' },
  { key: ']', title: 'Right bracket / Right brace' },
  { key: '\\', title: 'Backslash / Vertical bar' },
  // Fila 3
  { key: 'caps', title: 'Caps Lock' },
  { key: 'a', title: 'A' },
  { key: 's', title: 'S' },
  { key: 'd', title: 'D' },
  { key: 'f', title: 'F' },
  { key: 'g', title: 'G' },
  { key: 'h', title: 'H' },
  { key: 'j', title: 'J' },
  { key: 'k', title: 'K' },
  { key: 'l', title: 'L' },
  { key: ';', title: 'Semicolon / Colon' },
  { key: "'", title: 'Apostrophe or single quote / Double quote' },
  { key: 'enter', title: 'Enter or Return' },
  // Fila 4
  { key: 'shift', title: 'Shift Key' },
  { key: 'z', title: 'Z' },
  { key: 'x', title: 'X' },
  { key: 'c', title: 'C' },
  { key: 'v', title: 'V' },
  { key: 'b', title: 'B' },
  { key: 'n', title: 'N' },
  { key: 'm', title: 'M' },
  { key: ',', title: 'Comma / Less-than sign' },
  { key: '.', title: 'Period or dot / Greater-than sign' },
  { key: '/', title: 'Forward slash / Question mark' },
  // Fila 5
  {
    key: 'ctrlL',
    label: 'Ctrl',
    title: 'Left Control Key',
    className: 'control',
  },
  { key: 'win', label: 'Win', title: 'Windows/Super Key', className: 'meta' },
  { key: 'altL', label: 'Alt', title: 'Left Alternate Key', className: 'alt' },
  { key: 'space', label: '', title: 'Spacebar', className: 'space' },
  { key: 'altR', label: 'Alt', title: 'Right Alternate Key', className: 'alt' },
  {
    key: 'ctrlR',
    label: 'Ctrl',
    title: 'Right Control Key',
    className: 'control',
  },

  // --> NUEVA TECLA ESPACIADORA INVISIBLE (Para empujar las flechas a la derecha)
  { key: 'spacer', label: '', title: '', className: 'spacer' },

  // --> TECLA FALTANTE: Flecha Arriba
  { key: '↑', label: '↑', title: 'Up Arrow', className: 'arrow' },

  // --> TECLA FALTANTE: Flecha Abajo
  { key: '↓', label: '↓', title: 'Down Arrow', className: 'arrow' },

  // Flechas ya existentes
  { key: '←', label: '←', title: 'Left Arrow', className: 'arrow' },
  { key: '→', label: '→', title: 'Right Arrow', className: 'arrow' },
]

const keyboardLayout = [
  // ... (Tu array original completo de filas del teclado, se mantiene igual) ...
  [
    { key: '`', label: '` ~', title: 'Grave accent or backtick / Tilde' },
    { key: '1', label: '1 !', title: 'One / Exclamation mark' },
    { key: '2', label: '2 @', title: 'Two / At sign' },
    { key: '3', label: '3 #', title: 'Three / Hash or Number sign' },
    { key: '4', label: '4 $', title: 'Four / Dollar sign' },
    { key: '5', label: '5 %', title: 'Five / Percent sign' },
    { key: '6', label: '6 ^', title: 'Six / Caret or Circumflex' },
    { key: '7', label: '7 &', title: 'Seven / Ampersand' },
    { key: '8', label: '8 *', title: 'Eight / Asterisk' },
    { key: '9', label: '9 (', title: 'Nine / Left parenthesis' },
    { key: '0', label: '0 )', title: 'Zero / Right parenthesis' },
    { key: '-', label: '- _', title: 'Hyphen or Dash / Underscore' },
    { key: '=', label: '= +', title: 'Equals sign / Plus sign' },
    {
      key: 'backspace',
      label: '←',
      title: 'Backspace',
      className: 'backspace',
    },
  ],
  [
    { key: 'tab', label: 'Tab', title: 'Tabulator', className: 'tab' },
    { key: 'q', label: 'Q', title: 'Q' },
    { key: 'w', label: 'W', title: 'W' },
    { key: 'e', label: 'E', title: 'E' },
    { key: 'r', label: 'R', title: 'R' },
    { key: 't', label: 'T', title: 'T' },
    { key: 'y', label: 'Y', title: 'Y' },
    { key: 'u', label: 'U', title: 'U' },
    { key: 'i', label: 'I', title: 'I' },
    { key: 'o', label: 'O', title: 'O' },
    { key: 'p', label: 'P', title: 'P' },
    { key: '[', label: '[ {', title: 'Left bracket / Left brace' },
    { key: ']', label: '] }', title: 'Right bracket / Right brace' },
    {
      key: '\\',
      label: '\\ |',
      title: 'Backslash / Vertical bar',
      className: 'backslash',
    },
  ],
  [
    {
      key: 'caps',
      label: 'Caps Lock',
      title: 'Caps Lock',
      className: 'capsLock',
    },
    { key: 'a', label: 'A', title: 'A' },
    { key: 's', label: 'S', title: 'S' },
    { key: 'd', label: 'D', title: 'D' },
    { key: 'f', label: 'F', title: 'F' },
    { key: 'g', label: 'G', title: 'G' },
    { key: 'h', label: 'H', title: 'H' },
    { key: 'j', label: 'J', title: 'J' },
    { key: 'k', label: 'K', title: 'K' },
    { key: 'l', label: 'L', title: 'L' },
    { key: ';', label: '; :', title: 'Semicolon / Colon' },
    {
      key: "'",
      label: '\' "',
      title: 'Apostrophe or single quote / Double quote',
    },
    {
      key: 'enter',
      label: 'Enter',
      title: 'Enter or Return',
      className: 'enter',
    },
  ],
  [
    {
      key: 'shiftL',
      label: 'Shift',
      title: 'Left Shift Key',
      className: 'shiftL',
    },
    { key: 'z', label: 'Z', title: 'Z' },
    { key: 'x', label: 'X', title: 'X' },
    { key: 'c', label: 'C', title: 'C' },
    { key: 'v', label: 'V', title: 'V' },
    { key: 'b', label: 'B', title: 'B' },
    { key: 'n', label: 'N', title: 'N' },
    { key: 'm', label: 'M', title: 'M' },
    { key: ',', label: ', <', title: 'Comma / Less-than sign' },
    { key: '.', label: '. >', title: 'Period or dot / Greater-than sign' },
    { key: '/', label: '/ ?', title: 'Forward slash / Question mark' },
    {
      key: 'shiftR',
      label: 'Shift',
      title: 'Right Shift Key',
      className: 'shiftR',
    },
  ],
  [
    {
      key: 'ctrlL',
      label: 'Ctrl',
      title: 'Left Control Key',
      className: 'control',
    },
    { key: 'win', label: 'Win', title: 'Windows/Super Key', className: 'meta' },
    {
      key: 'altL',
      label: 'Alt',
      title: 'Left Alternate Key',
      className: 'alt',
    },
    { key: 'space', label: '', title: 'Spacebar', className: 'space' },
    {
      key: 'altR',
      label: 'Alt',
      title: 'Right Alternate Key',
      className: 'alt',
    },
    {
      key: 'ctrlR',
      label: 'Ctrl',
      title: 'Right Control Key',
      className: 'control',
    },
    { key: 'arrowL', label: '←', title: 'Left Arrow', className: 'arrow' },
    { key: 'arrowR', label: '→', title: 'Right Arrow', className: 'arrow' },
    { key: 'arrowU', label: '↑', title: 'Up Arrow', className: 'arrow' },
    { key: 'arrowD', label: '↓', title: 'Down Arrow', className: 'arrow' },
  ],
]

const Keyboard = ({ onKeyPress }) => {
  const [keyMessage, setKeyMessage] = useState(
    'Press a key to see its name in English.'
  )

  const handleKeyClick = (key, title) => {
    setKeyMessage(`Key: ${title}`)
    if (onKeyPress) {
      onKeyPress(key)
    }
  }

  return (
    <main className={styles.keyboardWrapper}>
      {/* Zona de mensaje visible en ambas vistas */}
      <section className={styles.keyMessageDisplay}>{keyMessage}</section>

      {/* VISTA ESCRITORIO: El teclado completo */}
      <section className={`${styles.keyboardContainer} ${styles.desktopView}`}>
        {keyboardLayout.map((row, rowIndex) => (
          <article key={rowIndex} className={styles.keyboardRow}>
            {row.map((keyData) => {
              const buttonClass = `${styles.keyButton} ${
                keyData.className ? styles[keyData.className] : ''
              }`
              return (
                <button
                  key={keyData.key}
                  className={buttonClass}
                  title={keyData.title}
                  onClick={() => handleKeyClick(keyData.key, keyData.title)}
                >
                  {keyData.label.includes(' ') ? (
                    <>
                      <span className={styles.topLabel}>
                        {keyData.label.split(' ')[1]}
                      </span>
                      <span className={styles.bottomLabel}>
                        {keyData.label.split(' ')[0]}
                      </span>
                    </>
                  ) : (
                    keyData.label
                  )}
                </button>
              )
            })}
          </article>
        ))}
      </section>

      {/* VISTA MÓVIL: La lista vertical de definiciones */}
      <section className={`${styles.keyDefinitionList} ${styles.mobileView}`}>
        <h2>Definiciones de Teclas</h2>
        {keyList.map((item, index) => (
          <article
            key={index}
            className={styles.keyListItem}
            // Hacemos que el elemento de la lista sea clicable
            onClick={() => handleKeyClick(item.key, item.title)}
          >
            <span className={styles.keyListItemLabel}>
              {item.key === 'space' ? 'SPACEBAR' : item.key.toUpperCase()}
            </span>
            <span className={styles.keyListItemDefinition}>{item.title}</span>
          </article>
        ))}
      </section>
      <section className={styles.sectionLink}>
        <Link href="./" className={styles.mainLink}>
          Previous
        </Link>
      </section>
    </main>
  )
}

export default Keyboard
