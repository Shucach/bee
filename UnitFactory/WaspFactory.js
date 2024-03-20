import {UnitAbstractFactory} from "./UnitAbstractFactory.js";
import {Wasp} from "./Wasp.js";

export class WaspFactory extends UnitAbstractFactory {
    createWasp(name) {
        return new Wasp(name, Math.floor(Math.random() * 10) + 1, Math.floor(Math.random() * 10) + 1);
    }
}