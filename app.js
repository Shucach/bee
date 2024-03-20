import readline from 'readline';

import { BeeFactory } from "./UnitFactory/BeeFactory.js";
import {WaspFactory} from "./UnitFactory/WaspFactory.js";

console.log(`Привіт, це пригодницька історія про один день із життя бджоли.`);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function makeStep(playerBee) {
    rl.question(`${playerBee.name}, продовжити збір меду 'honey' чи повернутись 'return': `, (answer) => {
        let choice = answer.toLowerCase();
        if (choice === 'honey') {
            playerBee.collectHoney();
            const randomChance = Math.random();
            if (randomChance < 0.4) {
                // TODO: спробувати втекти
                console.log(`На вас напали!`);
                initiateCombat(playerBee);
            } else {
                makeStep(playerBee);
            }
        } else if (choice === 'return') {
            if(playerBee.weightHoney > 0) {
                console.log(`${playerBee.name}, ви назбирали ${playerBee.weightHoney} г меду та повертаєтесь додому, ви молодець!`);
            } else {
                console.log(`${playerBee.name}, ви повернулись з порожніми лапками, невдовзі ваш рій загине!`);
            }
            rl.close();
        } else {
            console.log("Будь ласка, введіть 'collect' або 'return'.");
        }
    });
}

function initiateCombat(playerBee) {
    // TODO: випадковий ворог
    const enemy = new WaspFactory().createWasp('Шершень 11');
    console.log(`Ви бєтесь з ${enemy.name}!`);

    while (playerBee.health > 0 && enemy.health > 0) {
        const playerDamage = Math.floor(Math.random() * playerBee.strength) + 1;
        const enemyDamage = Math.floor(Math.random() * enemy.strength) + 1;

        console.log(`${playerBee.name} атакує ${enemy.name} та завдає ${playerDamage} пошкодження.`);
        enemy.health -= playerDamage;

        if (enemy.health <= 0) {
            console.log(`Ви перемогли ${enemy.name}!`);
            makeStep(playerBee);
            break;
        }

        console.log(`${enemy.name} атакує ${playerBee.name} та завдає ${enemyDamage} пошкодження.`);
        playerBee.health -= enemyDamage;

        if (playerBee.health <= 0) {
            console.log(`${enemy.name} переміг вас! Ви програли, рій залишиться без меду та загине!`);
            rl.close();
            break;
        }
    }
}

rl.question("Як до вас звертатись?: ", (playerName) => {
    const playerBee = new BeeFactory().createBee(playerName);
    rl.question(`${playerName}, виберіть дію: вилетіти за медом 'honey' або залишитись в вулику 'stay': `, (answer) => {
        answer = answer.toLocaleString();
        if(answer === 'honey') {
            playerBee.collectHoney();
            makeStep(playerBee);
        } else if (answer === 'stay') {
            console.log(`Гру завершено, ви ледача бдіжла ${playerName}, невдовзі ваш рій загине!`);
            rl.close();
        } else {
            console.log("Будь ласка, введіть 'honey' або 'stay'.");
        }
    });
});
