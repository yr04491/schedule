import type { ScheduleBlock } from '../types'

// 2026年前期 時間割
// 時限の時間
// 1限 08:45〜10:15
// 2限 10:30〜12:00
// 3限 13:00〜14:30
// 5限 16:30〜18:00

export const timetable2026Spring: Record<string, ScheduleBlock[]> = {
  monday: [
    { time: '10:30', type: 'class', label: '現代社会とビジネス', duration: '2限' },
    { time: '12:00', type: 'meal',  label: '昼食', detailKey: 'lunch' },
    { time: '16:30', type: 'class', label: '核分裂システム入門Ⅰ', duration: '5限' },
  ],
  tuesday: [
    { time: '08:45', type: 'class', label: '現代社会と地域の国際化', duration: '1限' },
    { time: '10:30', type: 'class', label: 'ゾーンボール', duration: '2限' },
    { time: '12:00', type: 'meal',  label: '昼食', detailKey: 'lunch' },
  ],
  wednesday: [
    { time: '08:45', type: 'class', label: 'ぼっちぼっちの', duration: '1限' },
    { time: '10:30', type: 'class', label: 'ゾーンボール', duration: '2限' },
    { time: '12:00', type: 'meal',  label: '昼食', detailKey: 'lunch' },
    { time: '13:00', type: 'class', label: 'ゾーンボール', duration: '3限' },
    { time: '16:30', type: 'class', label: '核分裂の生産技術', duration: '5限' },
  ],
  thursday: [
    { time: '08:45', type: 'class', label: '現代社会とコミュニケーション', duration: '1限' },
    { time: '10:30', type: 'class', label: 'バスケ', duration: '2限' },
    { time: '16:30', type: 'class', label: '放射線学・放射線総合学', duration: '5限' },
  ],
  friday: [
    { time: '12:00', type: 'meal',  label: '昼食', detailKey: 'lunch' },
    { time: '16:30', type: 'class', label: '放射線学・放射線総合学', duration: '5限' },
  ],
  saturday: [],
  sunday: [],
}
