function calculateTaxes(income) {
    if (!Number.isFinite(income)) {
        throw new Error('Invalid income!')
    }
    if (income > 30000) {
        return income * 0.25;
    } else {
        return income * 0.15;
    }
}

function removeDupes(values) {
    const arr = [...new Set(values)];
    if (typeof values === 'string') return arr.join('')
    return arr;
}

function remove(arr, val) {
    return arr.filter((el) => {
        return el !== val
    })
}

const usernames = [];
let nameInput = document.getElementById('username');

function submitForm() {
    usernames.push(nameInput.value);
}