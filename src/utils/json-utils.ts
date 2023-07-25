export default {
    isPrototypeObject(o: any): boolean {
        return Object.prototype.toString.call(o) === '[object Object]'
    },
    isPrototypeArray(o: any): boolean {
        return Object.prototype.toString.call(o) === '[object Array]'
    },
    isJSONObject(o: any): boolean {
        if (this.isPrototypeObject(o))
            return true
        try {
            return this.isPrototypeObject(JSON.parse(o))
        } catch (e) {
            return false
        }
    },
    isJSONArray(o: any): boolean {
        if (this.isPrototypeArray(o))
            return true
        try {
            return this.isPrototypeArray(JSON.parse(o))
        } catch (e) {
            return false
        }
    },
    toJSONObject<T>(o: any): T {
        if (this.isPrototypeObject(o))
            return o
        return this.isJSONObject(o) ? JSON.parse(o) : {}
    },
    toJSONArray<T>(o: any): T[] {
        if (this.isPrototypeArray(o))
            return o
        return this.isJSONArray(o) ? JSON.parse(o) : []
    },
    optionalChaining(o: any = {}, chain: string): any {
        const chaining = chain.split('.')
        for (const key of chaining)
            o = o[key] || ''
        return o
    }
}