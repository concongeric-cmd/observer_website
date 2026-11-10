import { useEffect, useMemo, useRef, useState } from 'react'

export default function CustomSelect({ label, value, options, onChange, placeholder }) {
  const ref = useRef(null)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handlePointerDown = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handlePointerDown)
    return () => document.removeEventListener('mousedown', handlePointerDown)
  }, [])

  const selectedOption = useMemo(
    () => options.find(([optionValue]) => optionValue === value),
    [options, value],
  )

  const selectedLabel = selectedOption ? selectedOption[1] : placeholder

  const toggle = () => setIsOpen((open) => !open)

  return (
    <div className={`directory-select custom-select ${isOpen ? 'open' : ''}`} ref={ref}>
      {label && <span className="custom-select-label">{label}</span>}
      <button
        type="button"
        className="custom-select-button"
        onClick={toggle}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <span className="custom-select-value">{selectedLabel}</span>
        <span className="custom-select-arrow" aria-hidden="true">
          ▾
        </span>
      </button>
      {isOpen && (
        <div className="custom-select-menu" role="listbox" aria-label={label}>
          {options.map(([optionValue, optionLabel]) => (
            <button
              key={optionValue}
              type="button"
              className={`custom-select-option ${value === optionValue ? 'selected' : ''}`}
              onClick={() => {
                onChange(optionValue)
                setIsOpen(false)
              }}
              role="option"
              aria-selected={value === optionValue}
            >
              {optionLabel}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
