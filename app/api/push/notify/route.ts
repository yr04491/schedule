import { NextRequest, NextResponse } from 'next/server'
import { getWebPush } from '@/lib/push'
import { notifications, getJstDayOfWeek } from '@/data/notifications'

function parseSubscription(raw: string): any {
  try {
    return JSON.parse(raw)
  } catch {
    return JSON.parse(Buffer.from(raw, 'base64').toString('utf-8'))
  }
}

// cron-job.org から GET ?t=HHMM で呼ばれる
export async function GET(req: NextRequest) {
  const t = req.nextUrl.searchParams.get('t')
  if (!t) {
    return NextResponse.json({ error: 'time param (?t=HHMM) required' }, { status: 400 })
  }

  const day = getJstDayOfWeek()

  // この時間・この曜日に該当する通知を探す
  const matches = notifications.filter((n) => n.time === t && n.days.includes(day))
  if (matches.length === 0) {
    return NextResponse.json({ ok: true, sent: 0, reason: 'no notification for this time/day' })
  }

  const raw = process.env.PUSH_SUBSCRIPTION
  if (!raw) {
    return NextResponse.json({ error: 'PUSH_SUBSCRIPTION not set' }, { status: 500 })
  }

  const subscription = parseSubscription(raw.trim())
  const wp = getWebPush()

  let sent = 0
  for (const n of matches) {
    try {
      await wp.sendNotification(subscription, JSON.stringify({ title: n.title, body: n.body }))
      sent++
    } catch (e: any) {
      return NextResponse.json({ error: e?.message ?? String(e) }, { status: 500 })
    }
  }

  return NextResponse.json({ ok: true, sent, day })
}
