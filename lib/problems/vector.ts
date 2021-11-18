class Dot<T> {
    data: T;
    previous: Dot<T> | null = null;
    next: Dot<T> | null = null;
    constructor(data: T) {
        this.data = data;
    }
}

class Vector<T> {
    length: number = 0;
    private _first: Dot<T> | null = null;
    private _last: Dot<T> | null = null;

    public get first() {
        return this._first?.data;
    }
    public get last() {
        return this._last?.data;
    }

    push(value: T) {
        if (this._first == null) {
            this._first = new Dot(value);
            this._last = this._first;


        } else {
            let dot: Dot<T> = this._first;
            while (dot.next != null) {
                dot = dot.next;
            }

            let next: Dot<T> = new Dot(value);
            next.previous = dot;
            dot.next = next;
            this._last = dot.next;
        }

        this.length++;
    }

    at(index: number) {
        if (this.length == 0)
            return null;

        let dot: Dot<T> = this._first!;

        while (index > 0 && dot?.next != null) {
            dot = dot.next;
            index--;
        }

        return index == 0 ? dot.data : null;
    }
}

function addends(list: Vector<number>, value: number): Vector<number[]> {
    let result: Vector<number[]> = new Vector();

    for (let index = 0; index < list.length; index++) {
        let element: number = list.at(index)!;

        if (element <= value) {
            for (let sub_index = index + 1; sub_index < list.length; sub_index++) {
                let sub_element: number = list.at(sub_index)!;

                if (element + sub_element == value) {
                    result.push([element, sub_element]);
                    console.log([element, sub_element]);
                    break;
                }
            }
        }

    }

    return result;
}

export function demo_Vector() {
    let vector: Vector<number> = new Vector();

    console.log('Start');

    vector.push(1);
    vector.push(2);
    vector.push(3);
    vector.push(4);
    vector.push(5);
    vector.push(6);
    vector.push(7);
    vector.push(8);
    vector.push(9);
    vector.push(10);
    vector.push(11);
    vector.push(12);

    addends(vector, 13);

    console.log('End');
}
