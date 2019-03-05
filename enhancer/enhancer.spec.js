const { success, fail, repair, add} = require('./enhancer.js');



const itemSword = {
    name: 'Sword of Doom',
    type: 'sword',
    durability: 100,
    enhancement: 0,
}

const itemSword2 = {
    name: 'Sword of Doom',
    type: 'sword',
    durability: 100,
    enhancement: 15,
}

const itemSword3 = {
    name: 'Sword of Doom',
    type: 'sword',
    durability: 100,
    enhancement: 16,
}

const itemSword3Expected = {
    name: '[+DUO] Sword of Doom',
    type: 'sword',
    durability: 100,
    enhancement: 17,
}

const itemSwordExpected = {
    name: '[+1] Sword of Doom',
    type: 'sword',
    durability: 100,
    enhancement: 1,
}

const itemArmor = {
    name: 'Sword of Doom',
    type: 'armor',
    durability: 100,
    enhancement: 3,
}

const itemArmorExpected = {
    name: '[+4] Sword of Doom',
    type: 'armor',
    durability: 100,
    enhancement: 4,
}

describe ('enhancer.js', () => {
    describe('success()', () => {
        test('sword enhancement should increase by 1', () => {
            expect(success(itemSword).enhancement).toBe(1);
        });
    });
});

describe ('enhancer.js', () => {
    describe('success()', () => {
        test('sword name should increase have [+number] infront of it', () => {
            expect(success(itemSword).name).toBe('[+1] Sword of Doom');
        });
    });
});

describe ('enhancer.js', () => {
    describe('success()', () => {
        test('sword object should equal itemExpected', () => {
            expect(success(itemSword)).toEqual(itemSwordExpected);
        });
    });
});

describe ('enhancer.js', () => {
    describe('success()', () => {
        test('armor enhancement should increase by 1', () => {
            expect(success(itemArmor).enhancement).toBe(4);
        });
    });
});

describe ('enhancer.js', () => {
    describe('success()', () => {
        test('armor name should increase have [+number] infront of it', () => {
            expect(success(itemArmor).name).toBe('[+4] Sword of Doom');
        });
    });
});

describe ('enhancer.js', () => {
    describe('success()', () => {
        test('armor object should equal itemExpected', () => {
            expect(success(itemArmor)).toEqual(itemArmorExpected);
        });
    });
});

describe ('enhancer.js', () => {
    describe('success()', () => {
        test('sword name should have PRI', () => {
            expect(success(itemSword2).name).toBe('[+PRI] Sword of Doom');
        });
    });
});

describe ('enhancer.js', () => {
    describe('success()', () => {
        test('sword name should have DUO', () => {
            expect(success(itemSword3).name).toBe('[+DUO] Sword of Doom');
        });
    });
});

describe ('enhancer.js', () => {
    describe('success()', () => {
        test('sword name should have DUO', () => {
            expect(success(itemSword3)).toEqual(itemSword3Expected);
        });
    });
});

describe ('enhancer.js', () => {
    describe('fail()', () => {
        test('item durability decreases by 5', () => {
            expect(fail(itemSword).durability).toBe(95);
        });
    });
});

describe ('enhancer.js', () => {
    describe('fail()', () => {
        test('item durability decreases by 10', () => {
            expect(fail(itemSword2).durability).toBe(90);
        });
    });
});

