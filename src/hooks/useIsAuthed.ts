import { useState } from 'react'

// Detects the BE-set zk_authed=1 presence cookie (Domain=.zikelsolutions.com).
// The cookie carries no identity — it's a presence flag only. For a real
// avatar/name, a future call to /me would be needed.
function readCookie() {
  return document.cookie.split('; ').some((c) => c.startsWith('zk_authed=1'))
}

// Read synchronously in the initializer so the first paint already reflects
// auth state — no logged-out flash. Safe because this is a Vite SPA (no SSR);
// `document` is always defined when components mount.
export function useIsAuthed() {
  const [isAuthed] = useState(readCookie)
  return isAuthed
}
