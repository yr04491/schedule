import { NextRequest, NextResponse } from 'next/server'
import { getWebPush } from '@/lib/push'

export async function POST(req: NextRequest) {
  try {
    const { title, body } = await req.json()

    const subJson = process.env.PUSH_SUBSCRIPTION
    if (!subJson) {
      return NextResponse.json({ error: 'PUSH_SUBSCRIPTION not set' }, { status: 500 })
    }

    let subscription
    try {
      subscription = JSON.parse(subJson)
    } catch {
      return NextResponse.json({ error: 'PUSH_SUBSCRIPTION is not valid JSON', value: subJson.slice(0, 50) }, { status: 500 })
    }

    const hasPublic = !!process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY
    const hasPrivate = !!process.env.VAPID_PRIVATE_KEY
    if (!hasPublic || !hasPrivate) {
      return NextResponse.json({ error: 'VAPID keys missing', hasPublic, hasPrivate }, { status: 500 })
    }

    const wp = getWebPush()
    const payload = JSON.stringify({ title, body })
    await wp.sendNotification(subscription, payload)

    return NextResponse.json({ ok: true })
  } catch (e: any) {
    return NextResponse.json({ error: e?.message ?? String(e), stack: e?.stack?.slice(0, 200) }, { status: 500 })
  }
}
