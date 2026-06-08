export interface StretchItem {
  name: string
  desc: string
  duration: string
  icon: string
}

export const stretchingData: StretchItem[] = [
  {
    icon: '🦵',
    name: '股関節ストレッチ',
    desc: '膝をついて前後に動かす。股関節を深くほぐす。サーフィンのスタンスに直結。',
    duration: '2分',
  },
  {
    icon: '🙏',
    name: '胸椎回旋',
    desc: '四つ這いで片手を頭に当てて上体をひねる。背柔軟性＋肩甲骨の可動域UP。',
    duration: '2分',
  },
  {
    icon: '🧘',
    name: 'ハムストリングストレッチ',
    desc: '床に座って足を伸ばし、つま先に向かって体を前屈。太もも裏の柔軟性UP。',
    duration: '2分',
  },
  {
    icon: '🦅',
    name: '肩甲骨回し',
    desc: '腕を前後に大きく回して肩甲骨を動かす。ローリングUP＋姿勢改善。',
    duration: '2分',
  },
]

export const stretchPoints = [
  '毎回ギリギリまでしっかり伸ばす',
  '呼吸を止めない（吐きながら深く伸ばす）',
  '朝は体が固いので無理に伸ばさない',
]
