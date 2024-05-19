type Item = {
  id: string
}

export const findItemIndexById = <TItem extends Item>(
  items: TItem[],
  id: string,
) => {
  return items.findIndex((item: TItem) => item.id === id)
}

export function removeItemAtIndex<TItem>(array: TItem[], index: number) {
  const removedItem = array[index]
  const arrayWithItemRemoved = [
    ...array.slice(0, index),
    ...array.slice(index + 1),
  ]
  return { arrayWithItemRemoved, removedItem }
}

export function insertItemAtIndex<TItem>(
  array: TItem[],
  index: number,
  item: TItem,
) {
  // myLog({'inserting item': item })
  return [...array.slice(0, index), item, ...array.slice(index)]
}

export const moveItem = <TItem>(array: TItem[], from: number, to: number) => {
  const { arrayWithItemRemoved, removedItem } = removeItemAtIndex(array, from)
  return insertItemAtIndex(arrayWithItemRemoved, to, removedItem)
}
