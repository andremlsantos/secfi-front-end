import React, { Component } from 'react'

export class StorageService extends Component {
    constructor() {
        super();

        this.map = new Map();
    }

    isPresent(key) {
        return this.map.get(key) != null
    }

    // get values from corresponding key
    getValue(key) {
        return this.map.get(key);
    }

    // key used to save exchange values
    getExchangeKey(from, to) {
        return `${from}-${to}`;
    }

    // key used to save daily graph values
    getDailyKey(from, to) {
        return `${from}-daily-${to}`;
    }

    // when we save exchange rate from Eur to Usd, we can also automatically calculate Usd to Eur
    saveExchange(from, to, exchangeRate) {
        let key = this.getExchangeKey(from, to);
        let value = exchangeRate;
        console.log("saving", key, value);
        this.map.set(key, value);

        let reversedKey = this.getExchangeKey(to, from);
        let reversedValue = 1 / exchangeRate;
        console.log("saving", reversedKey, reversedValue);
        this.map.set(reversedKey, reversedValue);
    }

    // saves daily graph values to map
    saveDaily(from, to, result) {
        let key = this.getDailyKey(from, to);
        console.log("Saving " + key + " to daily map ")
        this.map.set(key, result);
    }

    // remove daily graph value from map
    removeDaily(from, to) {
        this.map.delete(this.getDailyKey(from, to));
    }

    // removes exchange value from map
    removeExchange(from, to) {
        this.map.delete(this.getExchangeKey(from, to));
    }
}

export default StorageService
