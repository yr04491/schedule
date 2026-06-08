'use client'

import type { ScheduleBlock } from '@/data/types'

const TYPE_COLOR_VAR: Record<string, string> = {
  wake:     'var(--muted)',
  running:  'var(--color-run)',
  stretch:  'var(--color-stretch)',
  shower:   'var(--color-bath)',
  meal:     'var(--color-meal)',
  class:    'var(--color-class)',
  workout:  'var(--color-train)',
  bath:     'var(--color-bath)',
  skincare: 'var(--color-skin)',
  sleep:    'var(--muted)',
  free:     'var(--muted)',
}

const TYPE_ICONS: Record<string, string> = {
  wake:     '☀️',
  running:  '🏃',
  stretch:  '🧘',
  shower:   '🚿',
  meal:     '🍽',
  class:    '📖',
  workout:  '💪',
  bath:     '🛁',
  skincare: '✨',
  sleep:    '😴',
  free:     '',
}

const TAPPABLE_TYPES = new Set(['stretch', 'shower', 'meal', 'workout', 'bath', 'skincare'])

interface Props {
  block: ScheduleBlock
  isActive: boolean
  onTap: (block: ScheduleBlock) => void
}

export default function ScheduleBlockItem({ block, isActive, onTap }: Props) {
  const color = TYPE_COLOR_VAR[block.type] ?? 'var(--muted)'
  const icon = TYPE_ICONS[block.type] ?? ''
  const tappable = TAPPABLE_TYPES.has(block.type) && !!block.detailKey
  const isDim = block.type === 'free' || block.type === 'sleep'

  return (
    <div
      onClick={() => tappable && onTap(block)}
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '14px',
        padding: '14px 20px',
        background: isActive ? 'var(--surface)' : 'transparent',
        borderLeft: isActive ? `3px solid ${color}` : '3px solid transparent',
        cursor: tappable ? 'pointer' : 'default',
        transition: 'background 0.15s',
        borderBottom: '1px solid var(--border)',
      }}
    >
      {/* 時間 */}
      <div style={{
        fontFamily: 'var(--font-mono), monospace',
        fontSize: '12px',
        color: isActive ? color : 'var(--muted)',
        minWidth: '44px',
        paddingTop: '2px',
        flexShrink: 0,
        fontWeight: isActive ? 700 : 400,
      }}>
        {block.time}
      </div>

      {/* アイコン */}
      <div style={{ fontSize: '18px', paddingTop: '0px', flexShrink: 0, minWidth: '22px' }}>
        {icon}
      </div>

      {/* 内容 */}
      <div style={{ flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: block.duration ? '3px' : 0 }}>
          <div style={{
            fontSize: '15px',
            fontWeight: 700,
            color: isDim ? 'var(--muted)' : 'var(--text)',
          }}>
            {block.label}
          </div>

          {tappable && (
            <div style={{
              fontSize: '10px',
              fontFamily: 'var(--font-mono), monospace',
              padding: '2px 7px',
              borderRadius: '4px',
              background: 'var(--surface-alt)',
              color: color,
              border: `1px solid var(--border)`,
            }}>
              詳細
            </div>
          )}
        </div>

        {block.duration && (
          <div style={{
            fontSize: '12px',
            color: 'var(--muted)',
            fontFamily: 'var(--font-mono), monospace',
          }}>
            {block.duration}
          </div>
        )}
      </div>

      {tappable && (
        <div style={{ color: 'var(--muted)', fontSize: '16px', paddingTop: '2px' }}>›</div>
      )}
    </div>
  )
}
