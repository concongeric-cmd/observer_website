import { useState } from 'react'
import { LanguageContext } from './LanguageContext'

export default function LanguageProvider({ children }) {
  const [mode, setModeState] = useState(() => {
    const savedLanguage = localStorage.getItem('observer-language')
    return savedLanguage === 'zh' || savedLanguage === 'bilingual' ? savedLanguage : 'en'
  })
  const english = mode !== 'zh'
  const setMode = (nextMode) => {
    setModeState(nextMode)
    localStorage.setItem('observer-language', nextMode)
  }
  const toggle = () => setMode(english ? 'zh' : 'en')
  const pair = (zh, en, className = '') => (
    <span className={'pair ' + (mode === 'bilingual' ? '' : 'pair-single') + ' ' + className}>
      {mode === 'bilingual' ? (
        <>
          <span lang={english ? 'en' : 'zh-CN'}>{english ? en : zh}</span>
          <span lang={english ? 'zh-CN' : 'en'}>{english ? zh : en}</span>
        </>
      ) : (
        <span lang={english ? 'en' : 'zh-CN'}>{english ? en : zh}</span>
      )}
    </span>
  )
  return (
    <LanguageContext.Provider value={{ english, toggle, pair, mode, setMode }}>
      {children}
    </LanguageContext.Provider>
  )
}
