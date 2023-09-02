export function touchEventOffset(event: TouchEvent): [number, number] {
  if (!(event.target instanceof Element)) {
    console.error({
      who: 'touchEventOffset',
      message: ` The event.target is not Element.`,
      eventTarget: event.target,
    })

    throw new Error(`[touchEventOffset] The event.target is not Element.`)
  }

  const rect = event.target.getBoundingClientRect()
  const offsetX = event.targetTouches[0].pageX - rect.left
  const offsetY = event.targetTouches[0].pageY - rect.top

  return [offsetX, offsetY]
}
