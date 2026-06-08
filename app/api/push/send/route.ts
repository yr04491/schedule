import { NextRequest, NextResponse } from 'next/server'
import { getWebPush } from '@/lib/push'

export async function POST(req: NextRequest) {
  const { title, body } = await req.json()

  const subJson = process.env.PUSH_SUBSCRIPTION
  if (!subJson) {
    return NextResponse.json({ error: 'PUSH_SUBSCRIPTION env var not set' }, { status: 500 })
  }

  const subscription = JSON.parse(subJson)
  const wp = getWebPush()
  const payload = JSON.stringify({ title, body })

  try {
    await wp.sendNotification(subscription, payload)
    return NextResponse.json({ ok: true })
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 })
  }
}
