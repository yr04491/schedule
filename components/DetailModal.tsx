'use client'

import { useEffect } from 'react'
import type { ScheduleBlock } from '@/data/types'
import WorkoutDetail from './details/WorkoutDetail'
import MealDetail from './details/MealDetail'
import SkincareDetail from './details/SkincareDetail'

interface Props {
  block: ScheduleBlock | null
  date: Date
  onClose: () => void
}

export default function DetailModal({ block, date, onClose }: Props) {
  useEffect(() => {
    if (block) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [block])

  if (!block) return null

  const isMeal = ['breakfast', 'lunch', 'dinner'].includes(block.detailKey ?? '')
  const isWorkout = block.detailKey?.startsWith('workout_')
  const isSkincare = ['skincare_morning', 'skincare_night', 'bath_routine', 'stretching'].includes(block.detailKey ?? '')

  return (
    <>
      <div onClick={onClose} style={{
        position: 'fixed', inset: 0,
        background: 'rgba(0,0,0,0.4)',
        zIndex: 50,
        backdropFilter: 'blur(4px)',
      }} />

      <div style={{
        position: 'fixed', bottom: 0, left: 0, right: 0,
        background: 'var(--surface)',
        borderTop: '1px solid var(--border)',
        borderRadius: '20px 20px 0 0',
        zIndex: 51,
        maxHeight: '88vh',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 -4px 24px rgba(0,0,0,0.1)',
      }}>
        {/* ハンドル */}
        <div style={{ display: 'flex', justifyContent: 'center', padding: '12px 0 4px' }}>
          <div style={{ width: '36px', height: '4px', borderRadius: '2px', background: 'var(--border)' }} />
        </div>

        {/* ヘッダー */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '8px 20px 12px',
          borderBottom: '1px solid var(--border)',
        }}>
          <div style={{
            fontFamily: 'var(--font-mono), monospace',
            fontSize: '12px', color: 'var(--muted)',
          }}>
            {block.time} — {block.label}
          </div>
          <button onClick={onClose} style={{
            background: 'var(--surface-alt)',
            border: '1px solid var(--border)',
            color: 'var(--muted)',
            fontSize: '14px',
            cursor: 'pointer',
            width: '28px', height: '28px',
            borderRadius: '50%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>×</button>
        </div>

        {/* コンテンツ */}
        <div style={{ overflowY: 'auto', padding: '20px', flex: 1 }}>
          {isWorkout && <WorkoutDetail detailKey={block.detailKey!} />}
          {isMeal && <MealDetail detailKey={block.detailKey!} date={date} />}
          {isSkincare && <SkincareDetail detailKey={block.detailKey!} />}
        </div>
      </div>
    </>
  )
}
