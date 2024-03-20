import {Plant} from "./Plant.js";

export class PlantBuilder {
    constructor() {
        this.plantType = null;
        this.nectarous = null;
        this.color = null;
    }

    setPlantType(plantType) {
        this.plantType = plantType;
        return this;
    }

    setNectarous(nectarous) {
        this.nectarous = nectarous;
        return this;
    }

    setColor(color) {
        this.color = color;
        return this;
    }

    build() {
        return new Plant(this);
    }
}