import { CarPart } from './car-part';

// const is a ES2015 feature that makes sure CARPARTS can't be reassigned.
export const CARPARTS: CarPart[] = [{
    "id": 1,
    "name": "Super Tires",
    "description": "These tires are the very best",
    "inStock": 5,
    "price": 4.99,
    "today": new Date('2016-10-01T12:00:00')
},
    {
        "id": 2,
        "name": "Reinforced Shocks",
        "description": "Shocks made from kryptonite",
        "inStock": 4,
        "price": 9.99,
        "today": new Date('2016-10-05T12:00:00')
    },
    {
        "id": 3,
        "name": "Padded Seats",
        "description": "Super soft seats for a smooth ride",
        "inStock": 0,
        "price": 24.99,
        "today": new Date('2016-10-10T12:00:00')
    }];