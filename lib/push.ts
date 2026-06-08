import webpush from 'web-push'

export const VAPID_PUBLIC_KEY = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY ?? ''

// 空白・改行を除去し、URLセーフBase64に正規化（=やパディングも除去）
function cleanKey(key: string): string {
  return key
    .trim()
    .replace(/\s+/g, '')      // 空白・改行を全除去
    .replace(/\+/g, '-')      // 標準Base64 → URLセーフ
    .replace(/\//g, '_')
    .replace(/=+$/, '')       // 末尾のパディング除去
}

export function getWebPush() {
  const publicKey = cleanKey(process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY ?? '')
  const privateKey = cleanKey(process.env.VAPID_PRIVATE_KEY ?? '')
  const email = process.env.VAPID_EMAIL?.trim() ?? 'mailto:admin@example.com'
  if (!publicKey || !privateKey) throw new Error('VAPID keys are not set')
  webpush.setVapidDetails(email, publicKey, privateKey)
  return webpush
}
