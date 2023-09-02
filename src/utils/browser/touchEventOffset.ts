export function touchEventOffset(
  event: TouchEvent,
): [offsetX: number, offsetY: number] {
  if (!(event.target instanceof Element)) {
    console.error({
      who: 'touchEventOffset',
      message: ` The event.target is not Element.`,
      eventTarget: event.target,
    })

    throw new Error(`[touchEventOffset] The event.target is not Element.`)
  }

  const rect = event.target.getBoundingClientRect()
  const touch = event.targetTouches[0]

  const offsetX = touch.pageX - rect.left
  const offsetY = touch.pageY - rect.top

  return [offsetX, offsetY]
}
