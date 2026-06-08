import { NextRequest, NextResponse } from 'next/server'
import { getWebPush } from '@/lib/push'
import fs from 'fs'
import path from 'path'

const SUBS_FILE = path.join('/tmp', 'subscriptions.json')

function loadSubs(): any[] {
  try {
    return JSON.parse(fs.readFileSync(SUBS_FILE, 'utf-8'))
  } catch {
    return []
  }
}

// 曜日ごとの通知スケジュール（Vercel Cron Jobsから呼ばれる）
// vercel.jsonで定義するCronがこのエンドポイントを叩く
export async function POST(req: NextRequest) {
  const { title, body } = await req.json()
  const subs = loadSubs()

  const wp = getWebPush()
  const payload = JSON.stringify({ title, body })
  const results = await Promise.allSettled(
    subs.map((sub) => wp.sendNotification(sub, payload))
  )

  const failed = results.filter((r) => r.status === 'rejected').length
  return NextResponse.json({ sent: subs.length - failed, failed })
}
