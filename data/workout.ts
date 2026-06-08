export interface Exercise {
  name: string
  sets: number
  reps: string   // "20回" "60秒" など
  detail: string
  isSurf?: boolean
}

export interface WorkoutDay {
  day: string
  focus: string
  time: string
  color: string
  exercises: Exercise[]
  points: string[]
}

export const workoutData: Record<string, WorkoutDay> = {
  workout_thu: {
    day: '木曜日',
    focus: '下半身 — スクワット系で脚・お尻を鍛える',
    time: '20:00〜20:30',
    color: '#ffd166',
    exercises: [
      {
        name: 'ワイドスクワット',
        sets: 3, reps: '20回',
        detail: '足を肩幅より広く開き、つま先を外側45°に向けて膝を落とす。しっかりとお尻に効かせる。',
      },
      {
        name: 'ブルガリアンスクワット',
        sets: 3, reps: '12回（各脚）',
        detail: '後ろ足を椅子や台に乗せて片脚スクワット。バランス力×脚の強さ。',
        isSurf: true,
      },
      {
        name: 'カーフレイズ',
        sets: 3, reps: '20回',
        detail: 'つま先立ちでふくらはぎを鍛える。壁に手をついてやってもOK。ゆっくり上げ下げ。',
      },
      {
        name: 'ヒップヒンジ',
        sets: 3, reps: '15回',
        detail: '膝を伸ばしたまま股関節から前後にスイング。ハムストリング・お尻・腰の安定性。',
        isSurf: true,
      },
    ],
    points: [
      'ゆっくり下げる（2〜3秒）ことで筋肉への刺激が倍増',
      'ブルガリアンスクワットは椅子や段差を使えばOK',
      'セット間は60〜90秒休憩',
    ],
  },

  workout_fri: {
    day: '金曜日',
    focus: '上半身 — 胸・肩・腕の筋肉を鍛える',
    time: '20:30〜21:00',
    color: '#ff6b35',
    exercises: [
      {
        name: 'テーブル腕立て伏せ',
        sets: 3, reps: '15回',
        detail: '肩幅に手をついて胸を台のギリギリまで下げる。胸全体の筋肉を鍛える、ベース種目。',
      },
      {
        name: 'ワイドプッシュアップ',
        sets: 3, reps: '12回',
        detail: '手を肩幅より広くとって腕立て。胸の外側・大胸筋外側を狙える。見た目の胸板に効く。',
      },
      {
        name: 'パイクプッシュアップ',
        sets: 3, reps: '10回',
        detail: 'お尻を高く上げて逆V字の体勢で腕立て。肩（三角筋）を集中的に鍛える。',
        isSurf: true,
      },
      {
        name: 'ダイヤモンドプッシュアップ',
        sets: 3, reps: '10回',
        detail: '両手の親指と人差し指でひし形を作って腕立て。腕の裏（上腕三頭筋）に効く。',
      },
    ],
    points: [
      '胸を張って肩甲骨を寄せることを意識',
      'パイクは最初つけば膝をついてOK',
      '全部できなくても限界までやればOK',
    ],
  },

  workout_sun: {
    day: '日曜日',
    focus: '体幹 × サーフィン特化 — バランスと体の核を作る',
    time: '20:30〜21:00',
    color: '#00c896',
    exercises: [
      {
        name: 'プランク',
        sets: 3, reps: '60秒',
        detail: '肘をついて体を一直線にキープ。全体幹の基礎。今は1分でOKなので1分30秒を目標に。',
        isSurf: true,
      },
      {
        name: 'サイドプランク',
        sets: 3, reps: '45秒（各側）',
        detail: '横向きで肘をついて体を一直線に。サーフィンのバランスに直結する側面体幹。',
        isSurf: true,
      },
      {
        name: 'バードドッグ',
        sets: 3, reps: '12回（各側）',
        detail: '四つ這いでゆっくりと対角の手足を同時に伸ばしてキープ。体幹＋バランス感覚を同時に鍛える。',
        isSurf: true,
      },
      {
        name: 'スーパーマン',
        sets: 3, reps: '15回',
        detail: 'うつ伏せで手足を同時に浮かせてキープ。背筋（脊柱起立筋）と肩甲骨周りを鍛える。',
        isSurf: true,
      },
      {
        name: 'バーピー',
        sets: 3, reps: '10回',
        detail: '立位→腕立て→ジャンプを繰り返す全身運動。瞬発力＋スタミナ＋脂肪燃焼。',
      },
    ],
    points: [
      'SURFマークの種目がサーフィン上達に直結',
      'プランクは腰が落ちたら即終了（フォーム優先）',
      'バーピーは最後に入れてスタミナを追い込む',
    ],
  },
}
