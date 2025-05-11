// utility functions to be bused across the application will be written from here


export const formatCurrency = (currency, amount, decimals)=>{
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
    }).format(amount)
}