import {UnitAbstractFactory} from "./UnitAbstractFactory.js";
import {Bee} from "./Bee.js";

export class BeeFactory extends UnitAbstractFactory {
    createBee(name) {
        return new Bee(name, Math.floor(Math.random() * 10) + 1, Math.floor(Math.random() * 10) + 1);
    }
}