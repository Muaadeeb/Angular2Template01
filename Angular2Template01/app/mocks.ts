import { CarPart } from './car-part';

// const is a ES2015 feature that makes sure CARPARTS can't be reassigned.
export const CARPARTS: CarPart[] = [
{
    "id": 1,
    "name": "Super Tires",
    "description": "These tires are the very best",
    "inStock": 5,
    "price": 4.99,
    "image": "/images/tire.PNG",
    "featured": false
    },
    {
        "id": 2,
        "name": "Reinforced Shocks",
        "description": "Shocks made from kryptonite",
        "inStock": 4,
        "price": 9.99,
        "image": "/images/shocks.PNG",
        "featured": true
    },
    {
        "id": 3,
        "name": "Padded Seats",
        "description": "Super soft seats for a smooth ride",
        "inStock": 0,
        "price": 24.99,
        "image": "/images/seats.PNG",
        "featured": false
    }];