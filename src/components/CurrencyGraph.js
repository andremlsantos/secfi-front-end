import React, { Component } from 'react'
import Slider from '@material-ui/core/Slider';
import { Line } from 'react-chartjs-2';
import '../css/CurrencyGraph.css'

export class CurrencyGraph extends Component {
    constructor(props) {
        super(props);

        this.state = {
            chartData: {},
            days: "30"
        }

        this.onChangeDays = this.onChangeDays.bind(this);
    }

    componentWillMount() {
        this.props.onGraphMount()
            .then(result => {
                this.setState({
                    chartData: this.buildChartData(result)
                });
            })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.fromCurrency !== this.props.fromCurrency || prevProps.toCurrency !== this.props.toCurrency) {
            this.props.onGraphMount()
                .then(result => {
                    this.setState({
                        chartData: this.buildChartData(result)
                    });
                })
                .catch(err => {
                    console.error("Something happen andre?")
                })
        }
    }

    buildChartData(result) {
        return {
            labels: this.filterData(result.dates, this.state.days),
            datasets: [
                {
                    label: 'Close',
                    data: this.filterData(result.close, this.state.days),
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.05)'
                    ],
                    borderColor: 'rgba(255, 99, 132, 0.8)',
                    borderDash: [1],
                    fill: false

                },
                {
                    label: 'Open',
                    data: this.filterData(result.open, this.state.days),
                    backgroundColor: [
                        'rgba(23, 99, 132, 0.05)'
                    ],
                    borderColor: 'rgba(23, 99, 132, 0.8)',
                    borderDash: [3]
                },
                {
                    label: 'High',
                    data: this.filterData(result.high, this.state.days),
                    backgroundColor: [
                        'rgba(44, 173, 221, 0.05)'
                    ],
                    borderColor: 'rgba(44, 173, 221, 0.8)',
                    borderDash: [7],
                },
                {
                    label: 'Low',
                    data: this.filterData(result.low, this.state.days),
                    backgroundColor: [
                        'rgba(170, 161, 17, 0.05)'
                    ],
                    borderColor: 'rgba(170, 161, 17, 0.8)',
                    borderDash: [5],
                    fill: false
                }
            ]
        }
    }

    buildChartOptions() {
        return {
            title: {
                display: true,
                text: this.props.fromCurrency + " vs " + this.props.toCurrency,
                fontSize: 25,
                fontColor: '#0E6D90'
            },
            legend: {
                display: true,
                position: "right",
                labels: {
                    fontColor: '#0E6D90'
                }
            },
            tooltips: {
                display: true
            },
            scales: {
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Value',
                        fontColor: '#0E6D90',
                        fontSize: 20
                    }
                }],
                xAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Time',
                        fontColor: '#0E6D90',
                        fontSize: 20
                    }
                }]
            }
        }
    }

    // return last x elements in array
    filterData(arr, amount) {
        return arr.slice(Math.max(arr.length - amount, 0));
    }

    onChangeDays(event) {
        this.setState({
            days: event.target.value
        })
        this.props.onGraphMount()
            .then(result => {
                this.setState({
                    chartData: this.buildChartData(result)
                });
            })
            .catch(err => {
                console.error("Something happen andre?")
            })
    }

    render() {
        return (
            <div className="container">
                <Line
                    data={this.state.chartData}
                    options={this.buildChartOptions()}
                />
                <div className="inputContainer">
                    <input type="range" onChange={this.onChangeDays} step="10" min="10" max="100" value={this.state.days} />
                    <span>{this.state.days}</span>
                </div>
            </div>
        )
    }
}

export default CurrencyGraph
