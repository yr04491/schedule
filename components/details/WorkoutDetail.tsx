import { workoutData } from '@/data/workout'

interface Props { detailKey: string }

export default function WorkoutDetail({ detailKey }: Props) {
  const data = workoutData[detailKey]
  if (!data) return null

  return (
    <div>
      <div style={{ marginBottom: '16px' }}>
        <div style={{ fontSize: '22px', fontWeight: 900, color: data.color, marginBottom: '4px' }}>
          {data.day}
        </div>
        <div style={{ fontSize: '12px', color: 'var(--muted)' }}>{data.focus}</div>
        <div style={{
          display: 'inline-block', marginTop: '8px',
          fontSize: '11px', fontFamily: 'var(--font-mono), monospace',
          padding: '3px 10px', borderRadius: '20px',
          background: 'var(--surface-alt)',
          color: 'var(--text-sub)',
          border: '1px solid var(--border)',
        }}>
          {data.time}
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
        {data.exercises.map((ex, i) => (
          <div key={i} style={{
            background: 'var(--surface-alt)',
            border: '1px solid var(--border)',
            borderRadius: '10px', padding: '12px 14px',
          }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
              <div style={{
                fontFamily: 'var(--font-mono), monospace', fontSize: '18px',
                color: 'var(--border)', flexShrink: 0, lineHeight: 1, minWidth: '28px',
              }}>
                0{i + 1}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '14px', fontWeight: 700, marginBottom: '4px', color: 'var(--text)' }}>
                  {ex.name}
                  {ex.isSurf && (
                    <span style={{
                      fontSize: '9px', fontFamily: 'var(--font-mono), monospace',
                      padding: '2px 6px', borderRadius: '3px', marginLeft: '6px',
                      background: 'rgba(0,168,122,0.12)', color: 'var(--color-run)',
                      border: '1px solid rgba(0,168,122,0.2)',
                    }}>SURF</span>
                  )}
                </div>
                <div style={{ fontSize: '11px', color: 'var(--text-sub)', lineHeight: 1.6 }}>{ex.detail}</div>
              </div>
              <div style={{
                fontFamily: 'var(--font-mono), monospace', fontSize: '16px',
                color: data.color, flexShrink: 0, textAlign: 'right',
              }}>
                {ex.sets}×{ex.reps.replace('回', '').replace('秒', '')}
                <div style={{ fontSize: '8px', color: 'var(--muted)', marginTop: '1px' }}>
                  {ex.reps.includes('秒') ? 'SETS×SEC' : 'SETS×REPS'}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{
        background: 'var(--surface-alt)', border: '1px solid var(--border)',
        borderRadius: '10px', padding: '12px 14px',
      }}>
        <div style={{
          fontSize: '10px', fontFamily: 'var(--font-mono), monospace',
          color: 'var(--muted)', letterSpacing: '0.1em', marginBottom: '8px',
        }}>💡 ポイント</div>
        {data.points.map((p, i) => (
          <div key={i} style={{ fontSize: '12px', color: 'var(--text-sub)', lineHeight: 1.9 }}>• {p}</div>
        ))}
      </div>
    </div>
  )
}
