export interface SkincareStep {
  step: number
  name: string
  detail: string
  warning?: string
  tip?: string
  isImportant?: boolean
}

export interface SkincareRoutine {
  title: string
  steps: SkincareStep[]
}

export const skincareData: Record<string, SkincareRoutine> = {
  skincare_morning: {
    title: '朝のスキンケア（シャワー後）',
    steps: [
      {
        step: 1,
        name: '洗顔（シャワー中）',
        detail: '32℃のぬるま湯で顔を濡らし、泡立てた洗顔料を顔に乗せる。泡を転がすように洗う。ゴシゴシNG。',
        warning: 'スクラブは週2〜3回まで。毎日使うと肌が傷む。',
      },
      {
        step: 2,
        name: '化粧水（シャワー後すぐ）',
        detail: '手に出してハンドプレスで顔に馴染ませる。パタパタ叩くのはNG（刺激の原因）。乾燥が気になれば2度付けでOK。',
      },
      {
        step: 3,
        name: '乳液',
        detail: '化粧水の1分後に肌全体に伸ばして水分を閉じ込める。フタの役割。少量でOK。',
      },
      {
        step: 4,
        name: '日焼け止め ★重要',
        detail: 'ノンケミカル×ウォータープルーフ×SPF50+・PA++++を選ぶ。顔だけでなく耳・首・手・足など露出している部分すべてに塗る。',
        warning: '女性用の日焼け止めは男の皮膚でもちゃんと効く。メンズ用よりノンケミカルを選ぶ。',
        isImportant: true,
      },
    ],
  },

  skincare_night: {
    title: '夜のスキンケア（風呂後）',
    steps: [
      {
        step: 1,
        name: 'クレンジング（風呂中）★重要',
        detail: '乾いた手でオイルorジェルを顔全体に優しく馴染ませ、乳化させる。少量の水を加えて白く濁らせてから、ぬるま湯で流す。',
        warning: '乳化しないと毛穴に残って黒ずみの原因になる。',
        isImportant: true,
      },
      {
        step: 2,
        name: '洗顔（さらに洗顔）',
        detail: 'クレンジング後に泡立てた洗顔料で水性の汚れ（汗・皮脂）を落とす。泡をポンポンと押し当てる。',
      },
      {
        step: 3,
        name: '化粧水（風呂後すぐ）',
        detail: 'ハンドプレスで馴染ませる。乾燥が気になれば2度付け。1分待ってから乳液へ。',
      },
      {
        step: 4,
        name: '乳液',
        detail: '肌全体に伸ばして水分を閉じ込める。',
        tip: '余裕があれば化粧水の後にビタミンC美容液を追加すると肌質が上がる。',
      },
    ],
  },

  bath_routine: {
    title: '夜風呂・歯磨きルーティン',
    steps: [
      {
        step: 1,
        name: 'クレンジング（風呂に入ったらまず）',
        detail: '乾いた手でクレンジングを顔に馴染ませる。日焼け止めを落とすための重要工程。',
        isImportant: true,
      },
      {
        step: 2,
        name: 'フロス',
        detail: '歯間の汚れを取る。口臭の7割はここ。',
      },
      {
        step: 3,
        name: '電動歯ブラシで2分磨く',
        detail: 'ホワイトニング歯磨き粉を使う。',
      },
      {
        step: 4,
        name: '磨いた後は水ですすがない',
        detail: 'フッ素を残すことで効果が続く。',
        isImportant: true,
      },
      {
        step: 5,
        name: '洗顔・化粧水・乳液',
        detail: 'スキンケア夜ルーティンへ（風呂上がり後）',
      },
    ],
  },
}
