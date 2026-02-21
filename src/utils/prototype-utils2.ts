type Type =
    'Array'
    | 'Blob'
    | 'Boolean'
    | 'Date'
    | 'File'
    | 'FormData'
    | 'Function'
    | 'HTMLDocument'
    | 'Map'
    | 'Null'
    | 'Number'
    | 'Object'
    | 'RegExp'
    | 'Set'
    | 'String'
    | 'Symbol'
    | 'Undefined'
    | 'URLSearchParams'
    | 'Window'
export const prototype = (o: any): Type => {
  return Object.prototype.toString.call(o).replace('[object ', '').replace(']', '') as Type
}