export default {
    prototype(o: any) {
        return Object.prototype.toString.call(o)
    },
    isObject(o: any) {
        if (this.prototype(o) === '[object Object]')
            return true
        try {
            return this.prototype(JSON.parse(o)) === '[object Object]'
        } catch (e) {
            return false
        }
    }
}