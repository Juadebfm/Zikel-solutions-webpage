export type SubmitStatus = 'idle' | 'loading' | 'success' | 'error'

const BASE = 'https://zikel-solutions-be.fly.dev/api/v1/public'

async function post(url: string, body: object): Promise<{ ok: boolean; message: string }> {
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
  const data = await res.json()
  if (!res.ok || !data.success) {
    return { ok: false, message: data.error?.message || 'Something went wrong. Please try again.' }
  }
  return { ok: true, message: data.data?.message || '' }
}

export function submitBookDemo(payload: object) {
  return post(`${BASE}/book-demo`, payload)
}

export function submitWaitlist(payload: object) {
  return post(`${BASE}/join-waitlist`, payload)
}
