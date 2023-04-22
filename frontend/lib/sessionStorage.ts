const getItemFromStorage = (key: string) => sessionStorage.getItem(key)

export enum SessionStorageKeys {
  PokemonsPageState = 'pokemonsPageState',
}

export const getParsedItemFromSessionStorage = (
  key: SessionStorageKeys,
): any => {
  const savedItem = getItemFromStorage(key)
  if (savedItem) {
    try {
      return JSON.parse(savedItem)
    } catch (e) {
      console.error('Invalid item in storage')
      return null
    }
  }
  return null
}

export const saveItemToStore = (key: SessionStorageKeys, item: any) => {
  sessionStorage.setItem(key, JSON.stringify(item))
}
