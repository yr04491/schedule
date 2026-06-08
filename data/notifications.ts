// 通知スケジュール
// time: "HHMM" 形式（cron-job.orgから ?t=HHMM で呼ばれる）
// days: 通知する曜日（0=日, 1=月, ..., 6=土）

export interface NotificationDef {
  time: string
  days: number[]
  title: string
  body: string
}

export const notifications: NotificationDef[] = [
  // 起床（月〜土、日は別途ランニングあり）
  { time: '0700', days: [1, 2, 3, 4, 5, 0], title: '☀️ 起床の時間', body: '今日も一日がんばろう' },

  // ランニング（月・水・金・日）
  { time: '0715', days: [1, 3, 5, 0], title: '🏃 ランニングの時間', body: '30分走ってこよう' },
  // ストレッチ（火・木）
  { time: '0715', days: [2, 4], title: '🧘 ストレッチの時間', body: '体をほぐそう（30分）' },

  // 朝食（毎日）
  { time: '0800', days: [0, 1, 2, 3, 4, 5, 6], title: '🍽 朝食の時間', body: 'タンパク質を忘れずに' },

  // 夕食（月・木・金・日）
  { time: '1900', days: [1, 4, 5, 0], title: '🍽 夕食の時間', body: 'アプリで今日のメニューを確認' },

  // 筋トレ（木：20:00 下半身）
  { time: '2000', days: [4], title: '💪 筋トレの時間', body: '下半身トレーニング（30分）' },
  // 筋トレ（金：20:30 上半身 / 日：20:30 体幹）
  { time: '2030', days: [5], title: '💪 筋トレの時間', body: '上半身トレーニング（30分）' },
  { time: '2030', days: [0], title: '💪 筋トレの時間', body: '体幹・サーフィン特化（30分）' },

  // 風呂・歯磨き（毎日）
  { time: '2100', days: [0, 1, 2, 3, 4, 5, 6], title: '🛁 風呂・歯磨きの時間', body: 'クレンジングを忘れずに' },

  // スキンケア（毎日）
  { time: '2120', days: [0, 1, 2, 3, 4, 5, 6], title: '✨ スキンケアの時間', body: '化粧水→乳液で保湿' },

  // 就寝準備（月〜金・日）
  { time: '2330', days: [1, 2, 3, 4, 5, 0], title: '😴 就寝準備の時間', body: 'そろそろ寝る準備を' },
]

// 日本時間（JST）の曜日を返す（サーバーはUTCで動くため+9時間）
export function getJstDayOfWeek(): number {
  const now = new Date()
  const jst = new Date(now.getTime() + 9 * 60 * 60 * 1000)
  return jst.getUTCDay()
}
