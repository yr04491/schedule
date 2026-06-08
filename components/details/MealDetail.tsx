import { mealsData, dayKeyMap } from '@/data/meals'

interface Props {
  detailKey: string
  date: Date
}

export default function MealDetail({ detailKey, date }: Props) {
  const dayKey = dayKeyMap[date.getDay()]
  const dayMeals = mealsData[dayKey]
  if (!dayMeals) return null

  const meal = dayMeals[detailKey as keyof typeof dayMeals]
  if (!meal) return (
    <div style={{ textAlign: 'center', color: 'var(--muted)', padding: '32px 0', fontSize: '15px' }}>
      本日は{detailKey === 'lunch' ? '昼食' : '食事'}なし
    </div>
  )

  const mealLabel = detailKey === 'breakfast' ? '朝食' : detailKey === 'lunch' ? '昼食' : '夕食'
  const mealColor = detailKey === 'breakfast' ? 'var(--color-meal)' : detailKey === 'lunch' ? 'var(--color-run)' : 'var(--color-train)'

  return (
    <div>
      <div style={{ marginBottom: '16px' }}>
        <div style={{ fontSize: '22px', fontWeight: 900, color: mealColor }}>{mealLabel}</div>
        {meal.isProtein && (
          <div style={{
            display: 'inline-block', marginTop: '6px',
            fontSize: '10px', fontFamily: 'var(--font-mono), monospace',
            padding: '2px 8px', borderRadius: '4px',
            background: 'var(--surface-alt)', color: 'var(--color-skin)',
            border: '1px solid var(--border)',
          }}>
            P = タンパク質多め
          </div>
        )}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
        {meal.items.map((item, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', gap: '12px',
            background: 'var(--surface-alt)',
            border: '1px solid var(--border)',
            borderRadius: '10px', padding: '13px 14px',
          }}>
            <div style={{
              fontFamily: 'var(--font-mono), monospace', fontSize: '16px',
              color: 'var(--border)', minWidth: '24px',
            }}>
              {String(i + 1).padStart(2, '0')}
            </div>
            <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text)' }}>{item}</div>
          </div>
        ))}
      </div>

      {meal.note && (
        <div style={{
          background: 'var(--surface-alt)', border: '1px solid var(--border)',
          borderRadius: '10px', padding: '12px 14px',
          fontSize: '12px', color: 'var(--text-sub)', lineHeight: 1.8,
        }}>
          💡 {meal.note}
        </div>
      )}
    </div>
  )
}
