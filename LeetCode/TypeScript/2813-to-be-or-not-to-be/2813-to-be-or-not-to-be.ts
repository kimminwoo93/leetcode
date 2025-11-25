type ToBeOrNotToBe = {
    toBe: (val: any) => boolean;
    notToBe: (val: any) => boolean;
};

function expect(val: any): ToBeOrNotToBe {
    return {
        toBe: (compare: any) => {
            if (val !== compare) {
                throw "Not Equal";
            }
            return val === compare;
        },
        notToBe: (compare: any) => {
            if (val === compare) {
                throw "Equal";
            }
            return val !== compare;
        }
    }
};

try {
    expect(5).toBe(5); // true
    expect(5).notToBe(5); // throws "Equal"
} catch(e) {
    console.error(e);
}