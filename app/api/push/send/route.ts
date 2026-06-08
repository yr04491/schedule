import { NextRequest, NextResponse } from 'next/server'
import { getWebPush } from '@/lib/push'

function parseSubscription(raw: string): any {
  // まず生JSONとして試す
  try {
    return JSON.parse(raw)
  } catch {
    // ダメならBase64としてデコードして試す
    const decoded = Buffer.from(raw, 'base64').toString('utf-8')
    return JSON.parse(decoded)
  }
}

export async function POST(req: NextRequest) {
  try {
    const { title, body } = await req.json()

    const raw = process.env.PUSH_SUBSCRIPTION
    if (!raw) {
      return NextResponse.json({ error: 'PUSH_SUBSCRIPTION not set' }, { status: 500 })
    }

    let subscription
    try {
      subscription = parseSubscription(raw.trim())
    } catch {
      return NextResponse.json({ error: 'PUSH_SUBSCRIPTION could not be parsed' }, { status: 500 })
    }

    const wp = getWebPush()
    const payload = JSON.stringify({ title, body })
    await wp.sendNotification(subscription, payload)

    return NextResponse.json({ ok: true })
  } catch (e: any) {
    return NextResponse.json({ error: e?.message ?? String(e) }, { status: 500 })
  }
}
