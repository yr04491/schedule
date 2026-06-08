import type { ScheduleBlock } from '../types'

// 筋トレなしの夜ルーティン
export const eveningBase: ScheduleBlock[] = [
  { time: '18:00', type: 'free',     label: '帰宅・自由' },
  { time: '21:00', type: 'bath',     label: '夜風呂', detailKey: 'bath_routine' },
  { time: '21:20', type: 'skincare', label: 'スキンケア', detailKey: 'skincare_night' },
  { time: '21:30', type: 'free',     label: '自由' },
  { time: '23:30', type: 'free',     label: '就寝準備' },
  { time: '24:00', type: 'sleep',    label: '就寝' },
]

// 夕食あり版（月・木・金・日）
export const eveningWithDinner: ScheduleBlock[] = [
  { time: '18:00', type: 'free',     label: '帰宅・自由' },
  { time: '19:00', type: 'meal',     label: '夕食', detailKey: 'dinner' },
  { time: '21:00', type: 'bath',     label: '夜風呂', detailKey: 'bath_routine' },
  { time: '21:20', type: 'skincare', label: 'スキンケア', detailKey: 'skincare_night' },
  { time: '21:30', type: 'free',     label: '自由' },
  { time: '23:30', type: 'free',     label: '就寝準備' },
  { time: '24:00', type: 'sleep',    label: '就寝' },
]

// 筋トレあり夜ルーティン（木：下半身）
export const eveningWorkoutThu: ScheduleBlock[] = [
  { time: '18:00', type: 'free',     label: '帰宅・自由' },
  { time: '19:00', type: 'meal',     label: '夕食', detailKey: 'dinner' },
  { time: '20:00', type: 'workout',  label: '筋トレ', duration: '30分', detailKey: 'workout_thu' },
  { time: '21:00', type: 'bath',     label: '夜風呂', detailKey: 'bath_routine' },
  { time: '21:20', type: 'skincare', label: 'スキンケア', detailKey: 'skincare_night' },
  { time: '21:30', type: 'free',     label: '自由' },
  { time: '23:30', type: 'free',     label: '就寝準備' },
  { time: '24:00', type: 'sleep',    label: '就寝' },
]

// 筋トレあり夜ルーティン（金：上半身）
export const eveningWorkoutFri: ScheduleBlock[] = [
  { time: '18:00', type: 'free',     label: '帰宅・自由' },
  { time: '19:00', type: 'meal',     label: '夕食', detailKey: 'dinner' },
  { time: '20:30', type: 'workout',  label: '筋トレ', duration: '30分', detailKey: 'workout_fri' },
  { time: '21:00', type: 'bath',     label: '夜風呂', detailKey: 'bath_routine' },
  { time: '21:20', type: 'skincare', label: 'スキンケア', detailKey: 'skincare_night' },
  { time: '21:30', type: 'free',     label: '自由' },
  { time: '23:30', type: 'free',     label: '就寝準備' },
  { time: '24:00', type: 'sleep',    label: '就寝' },
]

// 筋トレあり夜ルーティン（日：体幹）
export const eveningWorkoutSun: ScheduleBlock[] = [
  { time: '19:00', type: 'meal',     label: '夕食', detailKey: 'dinner' },
  { time: '20:30', type: 'workout',  label: '筋トレ', duration: '30分', detailKey: 'workout_sun' },
  { time: '21:00', type: 'bath',     label: '夜風呂', detailKey: 'bath_routine' },
  { time: '21:20', type: 'skincare', label: 'スキンケア', detailKey: 'skincare_night' },
  { time: '21:30', type: 'free',     label: '自由' },
  { time: '23:30', type: 'free',     label: '就寝準備' },
  { time: '24:00', type: 'sleep',    label: '就寝' },
]

// 土曜日の夜（就寝準備なし・自由）
export const eveningSaturday: ScheduleBlock[] = [
  { time: '21:00', type: 'bath',     label: '夜風呂', detailKey: 'bath_routine' },
  { time: '21:20', type: 'skincare', label: 'スキンケア', detailKey: 'skincare_night' },
  { time: '21:30', type: 'free',     label: '自由' },
]
