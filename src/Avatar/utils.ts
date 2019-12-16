export function getColorFromHash(hashString: string) {
  const str = String(hashString)
  let hash = 0
  let char
  if (str.trim().length === 0) return hash
  for (let i = 0; i < str.length; i++) {
    char = str.charCodeAt(i)
    hash = (hash << 5) - hash + char
    hash &= hash
  }

  return Math.abs(hash)
}

export function getIntials(name: string, fallback = '?') {
  if (!name || typeof name !== 'string') return fallback

  return name
    .replace(/\s+/, ' ')
    .split(' ')
    .slice(0, 2)
    .map(v => v && v[0].toUpperCase())
    .join('')
}
