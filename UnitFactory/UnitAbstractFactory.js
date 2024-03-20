export class UnitAbstractFactory {
    createBee(name) {
        throw new Error('Метод createBee() має бути перевизначений в підкласах');
    }

    createWasp(name) {
        throw new Error('Метод createWasp() має бути перевизначений в підкласах');
    }
}