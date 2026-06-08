export interface MealDetail {
  items: string[]
  note?: string
  isProtein?: boolean
}

export interface DayMeals {
  breakfast?: MealDetail
  lunch?: MealDetail
  dinner?: MealDetail
}

export const mealsData: Record<string, DayMeals> = {
  monday: {
    breakfast: {
      items: ['卵かけご飯', '納豆', '味噌汁'],
      note: 'ランニング後に食べると吸収率UP',
      isProtein: true,
    },
    lunch: {
      items: ['自由（タンパク質意識）'],
      note: 'ラーメンだけ・パンだけは避ける。米＋肉が理想。',
    },
    dinner: {
      items: ['鶏もも塩麹焼き', '米', '味噌汁'],
      isProtein: true,
    },
  },
  tuesday: {
    breakfast: {
      items: ['バナナ 2本', '味噌汁'],
    },
    lunch: {
      items: ['自由（タンパク質意識）'],
      note: 'ラーメンだけ・パンだけは避ける。米＋肉が理想。',
    },
    dinner: {
      items: ['自由'],
    },
  },
  wednesday: {
    breakfast: {
      items: ['卵かけご飯', '納豆', '味噌汁'],
      note: 'ランニング後に食べると吸収率UP',
      isProtein: true,
    },
    lunch: {
      items: ['自由（タンパク質意識）'],
      note: 'ラーメンだけ・パンだけは避ける。米＋肉が理想。',
    },
    dinner: {
      items: ['自由'],
    },
  },
  thursday: {
    breakfast: {
      items: ['バナナ 2本', '味噌汁'],
    },
    lunch: undefined, // 木曜は昼食なし
    dinner: {
      items: ['鶏もも + パスタ（ぽん酢 or 塩）'],
      isProtein: true,
    },
  },
  friday: {
    breakfast: {
      items: ['卵かけご飯', '納豆', '味噌汁'],
      note: 'ランニング後に食べると吸収率UP',
      isProtein: true,
    },
    lunch: {
      items: ['自由（タンパク質意識）'],
      note: 'ラーメンだけ・パンだけは避ける。米＋肉が理想。',
    },
    dinner: {
      items: ['サバ缶', '米', 'サラダ'],
      note: '週1でサバ缶を入れるとオメガ3が摂れる',
      isProtein: true,
    },
  },
  saturday: {
    breakfast: {
      items: ['自由（ぐだぐだ）'],
    },
    lunch: {
      items: ['自由'],
    },
    dinner: {
      items: ['自由'],
    },
  },
  sunday: {
    breakfast: {
      items: ['目玉焼き 2個', 'ご飯'],
      isProtein: true,
    },
    lunch: {
      items: ['自由（タンパク質意識）'],
    },
    dinner: {
      items: ['鶏もも蕎麦（翌週軽めに）'],
      isProtein: true,
    },
  },
}

export const dayKeyMap: Record<number, string> = {
  0: 'sunday',
  1: 'monday',
  2: 'tuesday',
  3: 'wednesday',
  4: 'thursday',
  5: 'friday',
  6: 'saturday',
}
