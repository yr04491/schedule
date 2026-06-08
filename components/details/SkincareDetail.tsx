import { skincareData } from '@/data/skincare'
import { stretchingData, stretchPoints } from '@/data/stretching'

interface Props { detailKey: string }

export default function SkincareDetail({ detailKey }: Props) {
  if (detailKey === 'stretching') {
    return (
      <div>
        <div style={{ fontSize: '22px', fontWeight: 900, color: 'var(--color-stretch)', marginBottom: '4px' }}>
          ストレッチ
        </div>
        <div style={{ fontSize: '12px', color: 'var(--muted)', marginBottom: '16px' }}>
          火・木の朝 07:15〜07:45
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
          {stretchingData.map((item, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'flex-start', gap: '12px',
              background: 'var(--surface-alt)', border: '1px solid var(--border)',
              borderRadius: '10px', padding: '12px 14px',
            }}>
              <div style={{ fontSize: '22px', flexShrink: 0 }}>{item.icon}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '14px', fontWeight: 700, marginBottom: '3px', color: 'var(--text)' }}>{item.name}</div>
                <div style={{ fontSize: '11px', color: 'var(--text-sub)', lineHeight: 1.6 }}>{item.desc}</div>
              </div>
              <div style={{
                fontFamily: 'var(--font-mono), monospace', fontSize: '14px',
                color: 'var(--color-stretch)', flexShrink: 0,
              }}>{item.duration}</div>
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
          {stretchPoints.map((p, i) => (
            <div key={i} style={{ fontSize: '12px', color: 'var(--text-sub)', lineHeight: 1.9 }}>• {p}</div>
          ))}
        </div>
      </div>
    )
  }

  const data = skincareData[detailKey]
  if (!data) return null

  return (
    <div>
      <div style={{ fontSize: '20px', fontWeight: 900, color: 'var(--color-skin)', marginBottom: '16px' }}>
        {data.title}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {data.steps.map((step) => (
          <div key={step.step} style={{
            background: 'var(--surface-alt)',
            border: '1px solid var(--border)',
            borderLeft: step.isImportant ? '3px solid var(--color-train)' : '1px solid var(--border)',
            borderRadius: '10px', padding: '12px 14px',
          }}>
            <div style={{
              fontFamily: 'var(--font-mono), monospace', fontSize: '10px',
              color: 'var(--muted)', marginBottom: '4px',
            }}>STEP {step.step}</div>
            <div style={{
              fontSize: '14px', fontWeight: 700, marginBottom: '4px',
              color: step.isImportant ? 'var(--color-train)' : 'var(--text)',
            }}>{step.name}</div>
            <div style={{ fontSize: '12px', color: 'var(--text-sub)', lineHeight: 1.7 }}>{step.detail}</div>
            {step.warning && (
              <div style={{ fontSize: '11px', color: 'var(--color-train)', marginTop: '6px' }}>
                ⚠️ {step.warning}
              </div>
            )}
            {step.tip && (
              <div style={{ fontSize: '11px', color: 'var(--color-run)', marginTop: '6px' }}>
                💡 {step.tip}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
