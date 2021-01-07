import { ResponsiveBar } from '@nivo/bar'
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const sampleData = [
  {
    "country": "AD",
    "hot dog": 138,
    "hot dogColor": "hsl(196, 70%, 50%)",
    "burger": 130,
    "burgerColor": "hsl(347, 70%, 50%)",
    "sandwich": 99,
    "sandwichColor": "hsl(272, 70%, 50%)",
    "kebab": 109,
    "kebabColor": "hsl(90, 70%, 50%)",
    "fries": 158,
    "friesColor": "hsl(62, 70%, 50%)",
    "donut": 78,
    "donutColor": "hsl(245, 70%, 50%)"
  },
  {
    "country": "AE",
    "hot dog": 145,
    "hot dogColor": "hsl(42, 70%, 50%)",
    "burger": 48,
    "burgerColor": "hsl(188, 70%, 50%)",
    "sandwich": 69,
    "sandwichColor": "hsl(234, 70%, 50%)",
    "kebab": 81,
    "kebabColor": "hsl(259, 70%, 50%)",
    "fries": 154,
    "friesColor": "hsl(157, 70%, 50%)",
    "donut": 154,
    "donutColor": "hsl(131, 70%, 50%)"
  },
  {
    "country": "AF",
    "hot dog": 189,
    "hot dogColor": "hsl(336, 70%, 50%)",
    "burger": 173,
    "burgerColor": "hsl(23, 70%, 50%)",
    "sandwich": 172,
    "sandwichColor": "hsl(44, 70%, 50%)",
    "kebab": 198,
    "kebabColor": "hsl(330, 70%, 50%)",
    "fries": 61,
    "friesColor": "hsl(326, 70%, 50%)",
    "donut": 33,
    "donutColor": "hsl(337, 70%, 50%)"
  },
  {
    "country": "AG",
    "hot dog": 76,
    "hot dogColor": "hsl(127, 70%, 50%)",
    "burger": 148,
    "burgerColor": "hsl(7, 70%, 50%)",
    "sandwich": 95,
    "sandwichColor": "hsl(264, 70%, 50%)",
    "kebab": 162,
    "kebabColor": "hsl(245, 70%, 50%)",
    "fries": 21,
    "friesColor": "hsl(242, 70%, 50%)",
    "donut": 35,
    "donutColor": "hsl(148, 70%, 50%)"
  },
  {
    "country": "AI",
    "hot dog": 0,
    "hot dogColor": "hsl(308, 70%, 50%)",
    "burger": 189,
    "burgerColor": "hsl(207, 70%, 50%)",
    "sandwich": 53,
    "sandwichColor": "hsl(289, 70%, 50%)",
    "kebab": 97,
    "kebabColor": "hsl(279, 70%, 50%)",
    "fries": 158,
    "friesColor": "hsl(282, 70%, 50%)",
    "donut": 171,
    "donutColor": "hsl(88, 70%, 50%)"
  },
  {
    "country": "AL",
    "hot dog": 16,
    "hot dogColor": "hsl(132, 70%, 50%)",
    "burger": 18,
    "burgerColor": "hsl(37, 70%, 50%)",
    "sandwich": 177,
    "sandwichColor": "hsl(132, 70%, 50%)",
    "kebab": 25,
    "kebabColor": "hsl(1, 70%, 50%)",
    "fries": 18,
    "friesColor": "hsl(104, 70%, 50%)",
    "donut": 63,
    "donutColor": "hsl(226, 70%, 50%)"
  },
  {
    "country": "AM",
    "hot dog": 28,
    "hot dogColor": "hsl(191, 70%, 50%)",
    "burger": 119,
    "burgerColor": "hsl(141, 70%, 50%)",
    "sandwich": 178,
    "sandwichColor": "hsl(152, 70%, 50%)",
    "kebab": 143,
    "kebabColor": "hsl(125, 70%, 50%)",
    "fries": 47,
    "friesColor": "hsl(180, 70%, 50%)",
    "donut": 149,
    "donutColor": "hsl(175, 70%, 50%)"
  }
];


const Component = ({ data /* see data tab */ }) => (
  <ResponsiveBar
    data={sampleData}
    keys={[ 'hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut' ]}
    indexBy="country"
    margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
    padding={0.3}
    colors={{ scheme: 'nivo' }}
    defs={[
      {
        id: 'dots',
        type: 'patternDots',
        background: 'inherit',
        color: '#38bcb2',
        size: 4,
        padding: 1,
        stagger: true
      },
      {
        id: 'lines',
        type: 'patternLines',
        background: 'inherit',
        color: '#eed312',
        rotation: -45,
        lineWidth: 6,
        spacing: 10
      }
    ]}
    fill={[
      {
        match: {
          id: 'fries'
        },
        id: 'dots'
      },
      {
        match: {
          id: 'sandwich'
        },
        id: 'lines'
      }
    ]}
    borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'country',
      legendPosition: 'middle',
      legendOffset: 32
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'food',
      legendPosition: 'middle',
      legendOffset: -40
    }}
    labelSkipWidth={12}
    labelSkipHeight={12}
    labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
    legends={[
      {
        dataFrom: 'keys',
        anchor: 'bottom-right',
        direction: 'column',
        justify: false,
        translateX: 120,
        translateY: 0,
        itemsSpacing: 2,
        itemWidth: 100,
        itemHeight: 20,
        itemDirection: 'left-to-right',
        itemOpacity: 0.85,
        symbolSize: 20,
        effects: [
          {
            on: 'hover',
            style: {
              itemOpacity: 1
            }
          }
        ]
      }
    ]}
    animate={true}
    motionStiffness={90}
    motionDamping={15}
  />
);

export default {
  render: (id) => {
    ReactDOM.render(
      React.createElement(Component,{}),
      document.getElementById(id));
  }
};
