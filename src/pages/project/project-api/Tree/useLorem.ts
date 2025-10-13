import json from './lorem.json'

export function useLorem(filterValue?: string): string[] {
  if (!filterValue) return json

  return json.filter((item) => {
    return item.toLowerCase().includes(filterValue.toLowerCase())
  })
}
