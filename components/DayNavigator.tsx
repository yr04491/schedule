'use client'

interface Props {
  date: Date
  onPrev: () => void
  onNext: () => void
}

const DAY_LABELS = ['日', '月', '火', '水', '木', '金', '土']

export default function DayNavigator({ date, onPrev, onNext }: Props) {
  const isToday = new Date().toDateString() === date.toDateString()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const dow = DAY_LABELS[date.getDay()]

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '16px 8px 14px',
      borderBottom: '1px solid var(--border)',
      position: 'sticky',
      top: 0,
      background: 'var(--bg)',
      zIndex: 10,
    }}>
      <button onClick={onPrev} style={{
        background: 'none',
        border: 'none',
        color: 'var(--muted)',
        fontSize: '24px',
        cursor: 'pointer',
        padding: '4px 16px',
        lineHeight: 1,
      }}>‹</button>

      <div style={{ textAlign: 'center' }}>
        <div style={{
          fontFamily: 'var(--font-mono), monospace',
          fontSize: '10px',
          color: 'var(--muted)',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          marginBottom: '3px',
        }}>
          {isToday ? 'TODAY' : `${month}/${day}`}
        </div>
        <div style={{ fontSize: '24px', fontWeight: 900, color: 'var(--text)' }}>
          {dow}曜日
        </div>
      </div>

      <button onClick={onNext} style={{
        background: 'none',
        border: 'none',
        color: 'var(--muted)',
        fontSize: '24px',
        cursor: 'pointer',
        padding: '4px 16px',
        lineHeight: 1,
      }}>›</button>
    </div>
  )
}
