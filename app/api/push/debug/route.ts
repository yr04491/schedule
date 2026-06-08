import { NextResponse } from 'next/server'

export async function GET() {
  const pub = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY ?? ''
  const priv = process.env.VAPID_PRIVATE_KEY ?? ''
  const sub = process.env.PUSH_SUBSCRIPTION ?? ''
  const email = process.env.VAPID_EMAIL ?? ''

  const cleanPub = pub.trim().replace(/\s+/g, '').replace(/=+$/, '')
  let pubBytes = -1
  try { pubBytes = Buffer.from(cleanPub, 'base64url').length } catch {}

  return NextResponse.json({
    public: {
      length: pub.length,
      cleanLength: cleanPub.length,
      hasEquals: pub.includes('='),
      hasSpace: /\s/.test(pub),
      decodedBytes: pubBytes,
      last5: pub.slice(-5),
    },
    private: { length: priv.length, hasEquals: priv.includes('='), hasSpace: /\s/.test(priv) },
    subscription: { length: sub.length, hasEquals: sub.includes('='), last5: sub.slice(-5) },
    email: { value: email },
  })
}
