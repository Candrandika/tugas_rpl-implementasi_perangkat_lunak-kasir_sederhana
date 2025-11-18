export const formatNum = (num: number): string => {
    const formater = new Intl.NumberFormat('id-ID', {
        minimumFractionDigits: 0,
    })
    return formater.format(num)
}