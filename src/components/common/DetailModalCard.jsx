import { useId, useRef } from 'react'
import useLanguage from '../../hooks/useLanguage'

export default function DetailModalCard({
  className = '',
  modalClassName = '',
  eyebrow,
  title,
  summary,
  preview,
  ariaLabel,
  children,
}) {
  const { pair, text } = useLanguage()
  const dialogRef = useRef(null)
  const titleId = useId()

  return (
    <>
      <button
        className={'detail-modal-card ' + className}
        type="button"
        onClick={() => dialogRef.current?.showModal()}
        aria-haspopup="dialog"
        aria-labelledby={preview ? undefined : titleId}
        aria-label={preview ? ariaLabel : undefined}
      >
        {preview ? (
          <span className="detail-modal-card-preview">{preview}</span>
        ) : (
          <>
            <span className="detail-modal-eyebrow">{eyebrow}</span>
            <strong id={titleId} className="detail-modal-title">
              {title}
            </strong>
            <span className="detail-modal-summary">{summary}</span>
          </>
        )}
        <span className="detail-modal-action">
          {pair('阅读详细内容', 'Read full details')}
        </span>
      </button>
      <dialog
        className={'detail-modal ' + modalClassName}
        ref={dialogRef}
        aria-labelledby={titleId + '-dialog'}
        onCancel={() => dialogRef.current?.close()}
        onKeyDown={(event) => {
          if (event.key === 'Escape') dialogRef.current?.close()
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialogRef.current?.close()
        }}
      >
        <div className="detail-modal-panel">
          <header className="detail-modal-header">
            <div>
              <span className="detail-modal-eyebrow">{eyebrow}</span>
              <h2 id={titleId + '-dialog'}>{title}</h2>
            </div>
            <button
              className="detail-modal-close"
              type="button"
              aria-label={text('关闭详细内容', 'Close details')}
              onClick={() => dialogRef.current?.close()}
            />
          </header>
          <div className="detail-modal-content">{children}</div>
        </div>
      </dialog>
    </>
  )
}
