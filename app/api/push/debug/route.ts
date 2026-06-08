import { NextResponse } from 'next/server'

export async function GET() {
  const pub = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY ?? ''
  const priv = process.env.VAPID_PRIVATE_KEY ?? ''
  const sub = process.env.PUSH_SUBSCRIPTION ?? ''
  const email = process.env.VAPID_EMAIL ?? ''

  return NextResponse.json({
    public: { length: pub.length, hasEquals: pub.includes('='), last5: pub.slice(-5) },
    private: { length: priv.length, hasEquals: priv.includes('='), last5: priv.slice(-5) },
    subscription: { length: sub.length, hasEquals: sub.includes('='), last5: sub.slice(-5) },
    email: { value: email },
  })
}
