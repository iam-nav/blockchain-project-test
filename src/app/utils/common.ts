
function formatNumber(number: string) {
    // Ensure number is treated as a float and round to 2 decimal places
    const roundedNumber = parseFloat(number).toFixed(2);

    // Add commas for thousand separators
    const parts = roundedNumber.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    // Return the formatted number
    return parts.join(".");
}

function updateNumber(num: number) {
    // Check if the number is negative
    const isNegative = num < 0;

    // Special case for 0
    if (num === 0) {
        return '+0.00';
    }

    // Format the number
    let formattedNum = Math.abs(num).toFixed(2); // Always format to 2 decimal places

    // Add '+' sign if not negative and not already prefixed with '+' (for non-zero numbers)
    if (num !== 0 && !isNegative && formattedNum[0] !== '+') {
        formattedNum = '+' + formattedNum;
    }

    // Add the negative sign back if the number was negative
    if (isNegative) {
        formattedNum = '-' + formattedNum;
    }

    return formattedNum;
}

function colorUpdate(numberString: string) {
    // Ensure numberString is treated as a float and round to 2 decimal places
    const number = parseFloat(numberString);

    // Check if the parsed number is NaN (Not a Number)
    if (isNaN(number)) {
        return "#666666"; // Return default color if the input is not a valid number
    }

    const roundedNumber = number.toFixed(2); // Convert to fixed 2 decimal places

    // Add commas for thousand separators
    const parts = roundedNumber.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    // Determine the color based on the value
    let color;
    if (number < 0) {
        color = "#FF5454";
    } else if (number > 1) {
        color = "#6DFFDC";
    } else {
        color = "#666666";
    }

    // Return the determined color
    return color;
}

function getIcon(name: string) {
    switch (name) {
        case 'BTC':
            return '/img/crypto/btc.png';
        case 'ETH':
            return '/img/crypto/eth.png'
        case 'DOGE':
            return '/img/crypto/doge.png'
        case 'ALGO':
            return '/img/crypto/algo.png'
        case 'DOT':
            return '/img/crypto/dot.png'
        case 'UNI':
            return '/img/crypto/uni.png';
        case 'COMP':
            return '/img/crypto/comp.png'
        default:
            break;
    }
}

function totalChange(amount: number): string {
    // Check if amount is negative
    if (amount < 0) {
        return `-$${Math.abs(amount).toFixed(2)}`;
    } else {
        return `$${amount.toFixed(2)}`;
    }
}

export { formatNumber, colorUpdate, updateNumber,getIcon,totalChange }