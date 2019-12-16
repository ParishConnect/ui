export default function safeInvoke(fn: Function, ...args: any[]) {
  if (typeof fn === 'function') {
    return fn(...args)
  }
}
