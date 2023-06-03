export default {
    // 判断是否数字
    ifNaN(number: any, substitute: any) {
        return this.isNumber(number) ? +number : substitute
    },
    isNumber(number: any) {
        number = String(number).trim()
        return number !== '' && isFinite(+number) && !isNaN(+number)
    },
    // 增加千分位分隔符
    thousandths(number: any, fixed: number = 2) {
        if (!this.isNumber(number))
            return ''
        number = (+number).toFixed(fixed)
        return number.replace(/\d+/, (x: string) => {
            return x.replace(/(\d)(?=(\d{3})+$)/g, (y: string) => {
                return y + ','
            })
        })
    },
}
