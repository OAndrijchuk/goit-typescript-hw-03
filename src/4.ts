class Key {
    private signature: number = Math.random();
    constructor() { }
    
    public getSignature():number {
        return this.signature;
    }
}

class Person {
    
    constructor(private key: Key) { }
    
    public getKey(): Key {
        return this.key;
    }
}

class House {
    private tenants: Person[];
    protected door: boolean;
    protected key: Key;
    constructor(
        door: boolean,
        key: Key
    ) { 
        this.door = door;
        this.key = key;
    }
    
    public comeIn(tenant: Person): void {
        if (this.door) {
            this.tenants.push(tenant)
        }
    }
    public openDoor(key: Key):void {
        console.log(key.getSignature());
    }
}

class MyHouse extends House {

    constructor(key: Key) { 
        super(false, key)
    }

    public openDoor(key: Key):void {
        if (this.key.getSignature() === key.getSignature()) {
            this.door = true;
        } 
    }
}


const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};