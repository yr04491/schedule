import type { ScheduleBlock } from '../types'

// ランニングの日（月・水・金・日）の朝ルーティン
export const morningRunDays: ScheduleBlock[] = [
  { time: '07:00', type: 'wake',    label: '起床' },
  { time: '07:15', type: 'running', label: 'ランニング', duration: '30分' },
  { time: '07:45', type: 'shower',  label: '朝シャワー', detailKey: 'skincare_morning' },
  { time: '08:00', type: 'meal',    label: '朝食', detailKey: 'breakfast' },
]

// ストレッチの日（火・木）の朝ルーティン
export const morningStretchDays: ScheduleBlock[] = [
  { time: '07:00', type: 'wake',    label: '起床' },
  { time: '07:15', type: 'stretch', label: 'ストレッチ', duration: '30分', detailKey: 'stretching' },
  { time: '07:45', type: 'meal',    label: '朝食', detailKey: 'breakfast' },
]

// 土曜日の朝（ぐだぐだ）
export const morningSaturday: ScheduleBlock[] = [
  { time: '07:00', type: 'free', label: 'ぐだぐだ' },
]
