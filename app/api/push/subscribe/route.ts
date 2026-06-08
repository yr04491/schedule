import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const SUBS_FILE = path.join('/tmp', 'subscriptions.json')

function loadSubs(): PushSubscription[] {
  try {
    return JSON.parse(fs.readFileSync(SUBS_FILE, 'utf-8'))
  } catch {
    return []
  }
}

function saveSubs(subs: PushSubscription[]) {
  fs.writeFileSync(SUBS_FILE, JSON.stringify(subs))
}

export async function POST(req: NextRequest) {
  const subscription = await req.json()
  const subs = loadSubs()
  const exists = subs.some((s: any) => s.endpoint === subscription.endpoint)
  if (!exists) {
    subs.push(subscription)
    saveSubs(subs)
  }
  return NextResponse.json({ ok: true })
}

export async function GET() {
  return NextResponse.json(loadSubs())
}
