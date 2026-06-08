import webpush from 'web-push'

export const VAPID_PUBLIC_KEY = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY ?? ''

export function getWebPush() {
  const publicKey = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY
  const privateKey = process.env.VAPID_PRIVATE_KEY
  const email = process.env.VAPID_EMAIL ?? 'mailto:admin@example.com'
  if (!publicKey || !privateKey) throw new Error('VAPID keys are not set')
  webpush.setVapidDetails(email, publicKey, privateKey)
  return webpush
}
