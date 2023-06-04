export default {
    isPrototypeObject(o: any) {
        return Object.prototype.toString.call(o) === '[object Object]'
    },
    isPrototypeArray(o: any) {
        return Object.prototype.toString.call(o) === '[object Array]'
    },
    isJSONObject(o: any) {
        if (this.isPrototypeObject(o))
            return true
        try {
            return this.isPrototypeObject(JSON.parse(o))
        } catch (e) {
            return false
        }
    },
    isJSONArray(o: any) {
        if (this.isPrototypeArray(o))
            return true
        try {
            return this.isPrototypeArray(JSON.parse(o))
        } catch (e) {
            return false
        }
    },
    toJSONObject(o: any) {
        if (this.isPrototypeObject(o))
            return o
        return this.isJSONObject(o) ? JSON.parse(o) : {}
    },
    toJSONArray(o: any) {
        if (this.isPrototypeArray(o))
            return o
        return this.isJSONArray(o) ? JSON.parse(o) : []
    }
}