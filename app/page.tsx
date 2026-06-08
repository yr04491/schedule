'use client'

import { useState, useEffect, useRef } from 'react'
import type { ScheduleBlock } from '@/data/types'
import { getDaySchedule, getCurrentBlockIndex } from '@/lib/schedule'
import DayNavigator from '@/components/DayNavigator'
import ScheduleBlockItem from '@/components/ScheduleBlock'
import DetailModal from '@/components/DetailModal'

export default function Home() {
  const [date, setDate] = useState(new Date())
  const [selectedBlock, setSelectedBlock] = useState<ScheduleBlock | null>(null)
  const [activeIndex, setActiveIndex] = useState(-1)
  const activeRef = useRef<HTMLDivElement>(null)

  const blocks = getDaySchedule(date)

  useEffect(() => {
    const isToday = new Date().toDateString() === date.toDateString()
    if (isToday) {
      setActiveIndex(getCurrentBlockIndex(blocks))
    } else {
      setActiveIndex(-1)
    }
  }, [date]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (activeRef.current) {
      activeRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }, [activeIndex])

  const handlePrev = () => {
    const d = new Date(date)
    d.setDate(d.getDate() - 1)
    setDate(d)
  }

  const handleNext = () => {
    const d = new Date(date)
    d.setDate(d.getDate() + 1)
    setDate(d)
  }

  return (
    <div style={{ minHeight: '100dvh', background: 'var(--bg)', maxWidth: '480px', margin: '0 auto' }}>
      <DayNavigator date={date} onPrev={handlePrev} onNext={handleNext} />

      <div style={{ paddingBottom: '40px' }}>
        {blocks.map((block, i) => (
          <div key={`${block.time}-${block.type}-${i}`} ref={i === activeIndex ? activeRef : null}>
            {i > 0 && shouldShowDivider(blocks[i - 1].time, block.time) && (
              <div style={{
                height: '1px',
                background: 'var(--border)',
                margin: '4px 20px',
                opacity: 0.4,
              }} />
            )}
            <ScheduleBlockItem
              block={block}
              isActive={i === activeIndex}
              onTap={setSelectedBlock}
            />
          </div>
        ))}
      </div>

      <DetailModal
        block={selectedBlock}
        date={date}
        onClose={() => setSelectedBlock(null)}
      />
    </div>
  )
}

function shouldShowDivider(prevTime: string, nextTime: string): boolean {
  const toMin = (t: string) => {
    const [h, m] = t.split(':').map(Number)
    return h * 60 + m
  }
  return toMin(nextTime) - toMin(prevTime) >= 60
}
