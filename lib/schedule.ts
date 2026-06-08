import type { ScheduleBlock } from '@/data/types'
import { morningRunDays, morningStretchDays, morningSaturday } from '@/data/routine/morning'
import {
  eveningWithDinner,
  eveningWorkoutThu,
  eveningWorkoutFri,
  eveningWorkoutSun,
  eveningSaturday,
  eveningBase,
} from '@/data/routine/evening'
import { currentTimetable } from '@/data/timetable/index'

const dayKeys = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']

const runDays = [0, 1, 3, 5] // 日・月・水・金
const stretchDays = [2, 4]   // 火・木

function timeToMinutes(time: string): number {
  const [h, m] = time.split(':').map(Number)
  return h * 60 + m
}

export function getDaySchedule(date: Date): ScheduleBlock[] {
  const dow = date.getDay() // 0=日, 1=月, ..., 6=土
  const dayKey = dayKeys[dow]

  // 朝ルーティン
  let morning: ScheduleBlock[]
  if (dow === 6) {
    morning = morningSaturday
  } else if (runDays.includes(dow)) {
    morning = morningRunDays
  } else {
    morning = morningStretchDays
  }

  // 時間割
  const classes = currentTimetable[dayKey] ?? []

  // 夜ルーティン
  let evening: ScheduleBlock[]
  if (dow === 6) {
    evening = eveningSaturday
  } else if (dow === 4) {
    evening = eveningWorkoutThu  // 木
  } else if (dow === 5) {
    evening = eveningWorkoutFri  // 金
  } else if (dow === 0) {
    evening = eveningWorkoutSun  // 日
  } else if ([1, 4, 5, 0].includes(dow)) {
    evening = eveningWithDinner
  } else {
    evening = eveningBase
  }

  // 全ブロックを時間順にソート
  const all = [...morning, ...classes, ...evening]
  return all.sort((a, b) => timeToMinutes(a.time) - timeToMinutes(b.time))
}

export function getDayLabel(date: Date): string {
  const labels = ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日']
  return labels[date.getDay()]
}

export function getDayShort(date: Date): string {
  const labels = ['日', '月', '火', '水', '木', '金', '土']
  return labels[date.getDay()]
}

export function getCurrentBlockIndex(blocks: ScheduleBlock[]): number {
  const now = new Date()
  const nowMinutes = now.getHours() * 60 + now.getMinutes()
  let current = 0
  for (let i = 0; i < blocks.length; i++) {
    if (timeToMinutes(blocks[i].time) <= nowMinutes) {
      current = i
    }
  }
  return current
}
