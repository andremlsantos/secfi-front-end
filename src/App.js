import React, { Component } from 'react';
import '../src/css/App.css';
import Header from './layout/Header';
import CurrencyPanel from './components/CurrencyPanel';
import AlphaVantageService from '../src/service/AlphaVantageService'
import CurrencyGraph from './components/CurrencyGraph';

export class App extends Component {
  constructor() {
    super();

    // state
    this.state = {
      fromCurrency: 'EUR',
      toCurrency: 'EUR',
      amount: 1,
      result: 1,
      dates: [],
      open: [],
      high: [],
      low: [],
      close: []
    }

    // binds
    this.onChangeFromCurrency = this.onChangeFromCurrency.bind(this);
    this.onChangeToCurrency = this.onChangeToCurrency.bind(this);
    this.onChangeAmount = this.onChangeAmount.bind(this);
    this.onGraphMount = this.onGraphMount.bind(this);

    // service
    this.service = new AlphaVantageService();
  }

  onChangeFromCurrency(event) {
    this.setState({
      fromCurrency: event.target.value
    });

    this.service.fetchExchangeRate(event.target.value, this.state.toCurrency, this.state.amount)
      .then(result => {
        this.setState({
          result: result
        })
      })
  }

  onChangeToCurrency(event) {
    this.setState({
      toCurrency: event.target.value
    });

    this.service.fetchExchangeRate(this.state.fromCurrency, event.target.value, this.state.amount)
      .then(result => {
        this.setState({
          result: result
        })
      })
  }

  onChangeAmount(event) {
    this.setState({
      amount: event.target.value
    });

    this.service.fetchExchangeRate(this.state.fromCurrency, this.state.toCurrency, event.target.value)
      .then(result => {
        this.setState({
          result: result
        })
      })
  }

  async onGraphMount() {
    return new Promise((resolve, reject) => {
      this.service.fetchDaily(this.state.fromCurrency, this.state.toCurrency)
        .then(result => {
          this.setState({
            dates: result.dates,
            open: result.open,
            high: result.high,
            low: result.low,
            close: result.close
          })
          resolve(result);
        })
        .catch(err => reject(err));
    })
  }

  render() {
    return (
      <div className="App">
        <Header></Header>
        <CurrencyPanel
          fromCurrency={this.state.fromCurrency}
          toCurrency={this.state.toCurrency}
          amount={this.state.amount}
          result={this.state.result}
          onGraphMount={this.onGraphMount}
          onChangeFromCurrency={this.onChangeFromCurrency}
          onChangeToCurrency={this.onChangeToCurrency}
          onChangeAmount={this.onChangeAmount}
        ></CurrencyPanel>
        <CurrencyGraph
          onGraphMount={this.onGraphMount}
          fromCurrency={this.state.fromCurrency}
          toCurrency={this.state.toCurrency}
          dates={this.state.dates}
          open={this.state.open}
          high={this.state.high}
          close={this.state.close}
        ></CurrencyGraph>
      </div>
    );
  }
}

export default App;
