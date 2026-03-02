import { prototype } from './prototype-utils2'

export const clearValues = (o: Record<string, any> | null | undefined): void => {
  if (prototype(o) === 'Object')
    for (const k in o)
      if (o.hasOwnProperty(k))
        o[k] = null
}