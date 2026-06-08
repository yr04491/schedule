export type BlockType =
  | 'wake'
  | 'running'
  | 'stretch'
  | 'shower'
  | 'meal'
  | 'class'
  | 'workout'
  | 'bath'
  | 'skincare'
  | 'teeth'
  | 'sleep'
  | 'free'

export interface ScheduleBlock {
  time: string        // "07:00"
  type: BlockType
  label: string       // 表示テキスト
  duration?: string   // "30分"
  detailKey?: string  // 詳細データのキー
}

export interface DaySchedule {
  blocks: ScheduleBlock[]
}

export interface ClassBlock {
  period: number      // 1〜5限
  time: string
  name: string
}
