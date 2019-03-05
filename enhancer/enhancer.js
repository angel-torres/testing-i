module.exports = {
    success,
    fail,
    repair,
    add
}

// const item1 = {
//     name: 'Sowrd of Doom',
//     type: 'sword',
//     durability: 100,
//     enhancement: 0,
// }

function add(a, b) {
    return a+b;
}

function success(item) {
    if (item.type === 'sword') {
        if (item.enhancement <= 7) {
            return {
                ...item,
                name: `[+${item.enhancement + 1}] ${item.name}`,
                enhancement: item.enhancement + 1
            }
        } else if (item.enhancement === 15) {
            return {
                ...item,
                name: `[+PRI] ${item.name}`,
                enhancement: item.enhancement + 1
            }
        } else if (item.enhancement === 16) {
            return {
                ...item,
                name: `[+DUO] ${item.name}`,
                enhancement: item.enhancement + 1
            }
        } else {
            return item;
        }
    } else if (item.type === 'armor') {
        if (item.enhancement <= 5) {
            return {
                ...item,
                name: `[+${item.enhancement + 1}] ${item.name}`,
                enhancement: item.enhancement + 1
            }
        } else {
            return item;
        }
    }
}

function fail(item) {
    if (item.enhancement <= 14) {
        return {
            ...item, 
            durability: item.durability - 5
        }
    } else if ( item.enhancement > 14) {
        return {
            ...item,
            durability: item.durability - 10
        }
    }
}

function repair(item) {
    return null
}