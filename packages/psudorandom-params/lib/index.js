import { Slider, Grid, Box, Text } from '@modulz/radix';
import { useState,useEffect } from 'react';
import { generateTimeSeries } from '@fars20/random-sources';

const Component = ({ data  }) => {

  const [ sd, setSD ] = useState(5);
  const [ m, setM ] = useState(0);
  const [ precession, setPrecession ] = useState(1000);

  useEffect(()=>{
    const series = generateTimeSeries({
      from: "2019-09-18T20:00:00Z",
      to: "2019-09-18T20:00:20Z",
      precession: 1000, //optional
      sd: 1 //optional
    });

    const data = series ? series.map((data)=>{
        const [x,y] = data;
        return {
         x: x.toString(),y
        }
      }) : [];

    PubSub.publish('line.series.data-app-0.9629204273312086',{
      payload: [{
        id: 'werwer',
        color: 'hsl(134, 70%, 50%)',
        data
      }]
    })

  },[sd,precession]);

  return <Grid p={5} gap={5}>
    <Box>
      <Text color={'text'} >Standard Deviation</Text>
    </Box>
    <Box>
      <Slider value={sd} onChange={(event)=>{
      setSD(event.target.value);
    }} />
    </Box>
    <Box>
      <Box>
        <Text color={'text'}  > Precession </Text>
      </Box>
    <Slider value={precession} min={1000}  max={2000} onChange={(event)=>{
      console.log(event.target.value);
      setPrecession(event.target.value);
    }}  />
    </Box>
  </Grid>;
}

export default {
  render: (id) => {
    ReactDOM.render(
      React.createElement(Component,{}),
      document.getElementById(id));
  }
};
