import { useState } from 'react'
import { LanguageContext } from './LanguageContext'

export default function LanguageProvider({ children }) {
  const [english, setEnglish] = useState(
    () => localStorage.getItem('observer-language') === 'en',
  )
  const toggle = () =>
    setEnglish((current) => {
      localStorage.setItem('observer-language', current ? 'zh' : 'en')
      return !current
    })
  const pair = (zh, en, className = '') => (
    <span className={'pair ' + className}>
      {english ? (
        <>
          <span lang="en">{en}</span>
          <span lang="zh-CN">{zh}</span>
        </>
      ) : (
        <>
          <span lang="zh-CN">{zh}</span>
          <span lang="en">{en}</span>
        </>
      )}
    </span>
  )
  return (
    <LanguageContext.Provider value={{ english, toggle, pair }}>
      {children}
    </LanguageContext.Provider>
  )
}
