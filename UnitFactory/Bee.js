import {Unit} from "./Unit.js";
import {PlantBuilder} from "../Plant/PlantBuilder.js";

export class Bee extends Unit {
    maxWeightHoney = Math.floor(Math.random() * (100 - 10 + 1)) + 10;
    weightHoney = 0;

    collectHoney() {
        const plant = this.generatorPlant();

        console.log(`${this.name} знайшов ${plant.color} ${plant.plantType}.`);

        if(plant.nectarous) {
            const honeyCollected = Math.floor(Math.random() * 10) + 1;
            this.weightHoney += honeyCollected;
            if(this.weightHoney < this.maxWeightHoney) {
                console.log(`${this.name} зібрав ${honeyCollected} г меду.`);
            } else {
                this.weightHoney = this.maxWeightHoney;
                console.log(`${this.name} більше не може нести більше меду, максимальна кількість меду ${this.maxWeightHoney}. Пора повертатись в рій.`);
            }
        } else {
            console.log(`${this.name} рослина не має меду, лети далі.`);
        }
    }

    generatorPlant() {
        const plantTypes = ['Ромашка', 'Троянда', 'Лаванда'];
        const colors = ['Жовтий', 'Червоний', 'Фіолетовий'];
        const stemTypes = ['Стебло', 'Кущ'];

        const randomPlantType = plantTypes[Math.floor(Math.random() * plantTypes.length)];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        const randomStemType = stemTypes[Math.floor(Math.random() * stemTypes.length)];

        const isNectarous = Math.random() < 0.5;

        return new PlantBuilder()
            .setPlantType(randomPlantType)
            .setNectarous(isNectarous)
            .setColor(randomColor)
            .build();
    }
}