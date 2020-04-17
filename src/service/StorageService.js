import React, { Component } from 'react'

export class StorageService extends Component {
    constructor() {
        super();

        this.map = new Map();
    }

    isPresent(key) {
        return this.map.get(key) != null
    }

    getValue(key) {
        return this.map.get(key);
    }

    getExchangeKey(from, to) {
        return `${from}-${to}`;
    }

    getDailyKey(from, to) {
        return `${from}-daily-${to}`;
    }

    saveExchangeToMap(from, to, exchangeRate) {
        let key = this.getExchangeKey(from, to);
        let value = exchangeRate;
        console.log("saving", key, value);
        this.map.set(key, value);

        let reversedKey = this.getExchangeKey(to, from);
        let reversedValue = 1 / exchangeRate;
        console.log("saving", reversedKey, reversedValue);
        this.map.set(reversedKey, reversedValue);
    }

    removeDailyFromMap(from, to) {
        this.map.delete(this.getDailyKey(from, to));
    }

    saveDailyToMap(from, to, result) {
        let key = this.getDailyKey(from, to);
        console.log("Saving " + key + " to daily map ")
        this.map.set(key, result);
    }
}

export default StorageService
