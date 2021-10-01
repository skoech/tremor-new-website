import BrowserOnly from '@docusaurus/BrowserOnly';
import React, { Component } from "react";

class BenchmarkChart extends Component {
    constructor(props) {
        super(props);
        this.shortCommitHash = props.commitList.map((c) => c.slice(0, 6));
        this.state = {
            title: props.title,
            options: {
                chart: {
                    width: '100px',
                    height: 0.5,
                    parentHeightOffset: 0.5,
                    id: props.title + "-chart",
                    events: {
                        markerClick: (c1, c2, { dataPointIndex }) =>
                            window.open(
                                `https://github.com/tremor-rs/tremor-runtime/commit/${props.commitList[dataPointIndex]}`
                            ),
                    },
                },
                yaxis: [{
                    title: {
                        text: "MB/s",
                    }
                },
                {
                    opposite: true,
                    title: {
                        text: "events/s",
                    }
                }],
                xaxis: {
                    labels: {
                        show: false,
                    },
                    categories: this.shortCommitHash,
                    tooltip: {
                        enabled: false,
                    },
                },
                legend: {
                    show: true,
                    showForSingleSeries: true,
                    position: "bottom",
                },
            },
            series: [
                {
                    name: props.title + " mbps",
                    data: props.mbps,
                },
                {
                    name: props.title + " eps",
                    data: props.eps,
                },
            ],
        };
    }

    render() {
        return (
            <BrowserOnly>
                {() => {
                    const Chart = require("react-apexcharts");
                    return (<Chart
                        options={this.state.options}
                        series={this.state.series}
                        type="line"
                    />);
                }}

            </BrowserOnly>
        );
    }
}

export default BenchmarkChart;
