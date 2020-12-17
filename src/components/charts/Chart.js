import "../../../node_modules/react-vis/dist/style.css";
import React from 'react';
import {AutoSizer, List} from 'react-virtualized';

import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries,
  VerticalBarSeriesCanvas,
  LabelSeries,
  ChartLabel
} from 'react-vis';

const blueData = [
  {x: '1', y: 100},
  {x: '2', y: 200},
  {x: '3', y: 300},
  {x: '4', y: 400},
  {x: '5', y: 500},
  {x: '6', y: 600},
  {x: '7', y: 700},
  {x: '8', y: 800},
  {x: '9', y: 900},
  {x: '11', y: 1200},
  {x: '12', y: 1300},
  {x: '13', y: 1400},
  {x: '14', y: 1500}
];



class Chart extends React.Component {
  state = {
    useCanvas: false
  }

  render() {
    const {useCanvas} = this.state;
    const content = useCanvas ? 'TOGGLE TO SVG' : 'TOGGLE TO CANVAS';
    const BarSeries = useCanvas ? VerticalBarSeriesCanvas : VerticalBarSeries;
    return (
      <div>
       
        <XYPlot
          xType="ordinal"
          width={900}
          height={300}
          xDistance={100}
          >
          
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis title="No. of years"/>
          <YAxis title="Asset Balance (in Lakhs)"/>
          
          
          <BarSeries
            className="vertical-bar-series-example"
            />
          <BarSeries data={blueData} color="#239ade"/>
         
        </XYPlot>
     
      </div>
    );
  }
}

export default Chart;
