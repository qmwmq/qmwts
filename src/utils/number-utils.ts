export default {
    isNumber(number: any) {
        number = String(number).trim()
        return number !== '' && isFinite(+number) && !isNaN(+number)
    }
}
