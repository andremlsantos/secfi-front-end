import React, { Component } from 'react'
import Repository from './Repository';

export class AlphaVantageService extends Component {
    constructor(props) {
        super(props);

        this.state = {
            API_KEY: "0VY8POTUN3UDETPX"
        }

        this.repository = new Repository();
    }

    // For the exchange
    async fetchExchangeRate(from, to, amount) {
        let key = this.repository.getExchangeKey(from, to);

        if (from === to) {
            // we don't need to calculate anything, just return amount
            console.log("from == to, returning amount");
            return amount;
        } else if (this.repository.isPresent(key)) {
            // we can grab the values already saved
            console.log("values already requested");
            let result = this.repository.getValue(key) * amount;
            return result.toFixed(4);
        } else {
            let API_CALL = `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${from}&to_currency=${to}&apikey=${this.state.API_KEY}`;

            return fetch(API_CALL)
                .then(res => res.json())
                .then(data => {
                    try {
                        let exchangeRate = Number(data["Realtime Currency Exchange Rate"]["5. Exchange Rate"]);
                        let result = amount * exchangeRate;

                        // save value
                        console.log("saving " + key + "  to map")
                        this.repository.saveExchange(from, to, exchangeRate);

                        return result.toFixed(4);
                    } catch (err) {
                        console.error("Thank you for using Alpha Vantage! Our standard API call frequency is 5 calls per minute and 500 calls per day.");
                        return amount;
                    }
                })
                .catch(err => console.error(err));
        }
    }

    // For the graph
    async fetchDaily(from, to) {
        let key = this.repository.getDailyKey(from, to);

        if (this.repository.isPresent(key)) {
            // we already did request, lets return values
            console.log("returning old values from daily");
            return this.repository.getValue(key);
        } else {
            let API_CALL = `https://www.alphavantage.co/query?function=FX_DAILY&from_symbol=${from}&to_symbol=${to}&outputsize=compact&apikey=${this.state.API_KEY}`
            let dates = [];
            let open = [];
            let high = [];
            let low = [];
            let close = [];

            return fetch(API_CALL)
                .then(res => res.json())
                .then(data => {
                    if (data["Time Series FX (Daily)"] != null) {
                        for (var key in data["Time Series FX (Daily)"]) {
                            dates.push(key);
                            open.push(data["Time Series FX (Daily)"][key]["1. open"]);
                            high.push(data["Time Series FX (Daily)"][key]["2. high"]);
                            low.push(data["Time Series FX (Daily)"][key]["3. low"]);
                            close.push(data["Time Series FX (Daily)"][key]["4. close"]);
                        }

                        let result = {
                            dates: dates.reverse(),
                            open: open.reverse(),
                            high: high.reverse(),
                            low: low.reverse(),
                            close: close.reverse()
                        }

                        this.repository.saveDaily(from, to, result);
                        return result;
                    } else {
                        // Problems with request, we remove the values...
                        console.info("Removing key " + this.repository.getDailyKey(from, to) + " due problems");
                        this.repository.removeDaily(from, to);
                        // return default value EUR: EUR
                        return this.repository.getValue(this.repository.getDailyKey("EUR", "EUR"));
                    }
                })
                .catch(err => {
                    console.error(err)
                });
        }
    }
}

export default AlphaVantageService
