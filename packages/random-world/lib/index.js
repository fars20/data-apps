import { ResponsiveChoropleth } from '@nivo/geo'
import world from './world_countries.json';

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const sampleData =[
  {
    "id": "AFG",
    "value": 152270
  },
  {
    "id": "AGO",
    "value": 35560
  },
  {
    "id": "ALB",
    "value": 554129
  },
  {
    "id": "ARE",
    "value": 600971
  },
  {
    "id": "ARG",
    "value": 721629
  },
  {
    "id": "ARM",
    "value": 700755
  },
  {
    "id": "ATA",
    "value": 374571
  },
  {
    "id": "ATF",
    "value": 683127
  },
  {
    "id": "AUT",
    "value": 819745
  },
  {
    "id": "AZE",
    "value": 220027
  },
  {
    "id": "BDI",
    "value": 183272
  },
  {
    "id": "BEL",
    "value": 438107
  },
  {
    "id": "BEN",
    "value": 34191
  },
  {
    "id": "BFA",
    "value": 173731
  },
  {
    "id": "BGD",
    "value": 4819
  },
  {
    "id": "BGR",
    "value": 943325
  },
  {
    "id": "BHS",
    "value": 784248
  },
  {
    "id": "BIH",
    "value": 917208
  },
  {
    "id": "BLR",
    "value": 427021
  },
  {
    "id": "BLZ",
    "value": 965340
  },
  {
    "id": "BOL",
    "value": 420534
  },
  {
    "id": "BRN",
    "value": 561130
  },
  {
    "id": "BTN",
    "value": 8784
  },
  {
    "id": "BWA",
    "value": 8640
  },
  {
    "id": "CAF",
    "value": 123981
  },
  {
    "id": "CAN",
    "value": 675752
  },
  {
    "id": "CHE",
    "value": 230189
  },
  {
    "id": "CHL",
    "value": 254412
  },
  {
    "id": "CHN",
    "value": 928800
  },
  {
    "id": "CIV",
    "value": 428538
  },
  {
    "id": "CMR",
    "value": 506034
  },
  {
    "id": "COG",
    "value": 297861
  },
  {
    "id": "COL",
    "value": 127907
  },
  {
    "id": "CRI",
    "value": 792090
  },
  {
    "id": "CUB",
    "value": 846203
  },
  {
    "id": "-99",
    "value": 113357
  },
  {
    "id": "CYP",
    "value": 439401
  },
  {
    "id": "CZE",
    "value": 884132
  },
  {
    "id": "DEU",
    "value": 802222
  },
  {
    "id": "DJI",
    "value": 521300
  },
  {
    "id": "DNK",
    "value": 949864
  },
  {
    "id": "DOM",
    "value": 701718
  },
  {
    "id": "DZA",
    "value": 632893
  },
  {
    "id": "ECU",
    "value": 154853
  },
  {
    "id": "EGY",
    "value": 217998
  },
  {
    "id": "ERI",
    "value": 565779
  },
  {
    "id": "ESP",
    "value": 692444
  },
  {
    "id": "EST",
    "value": 72093
  },
  {
    "id": "ETH",
    "value": 603752
  },
  {
    "id": "FIN",
    "value": 96816
  },
  {
    "id": "FJI",
    "value": 221021
  },
  {
    "id": "FLK",
    "value": 515809
  },
  {
    "id": "FRA",
    "value": 587495
  },
  {
    "id": "GAB",
    "value": 955008
  },
  {
    "id": "GBR",
    "value": 891815
  },
  {
    "id": "GEO",
    "value": 848450
  },
  {
    "id": "GHA",
    "value": 774675
  },
  {
    "id": "GIN",
    "value": 449766
  },
  {
    "id": "GMB",
    "value": 233825
  },
  {
    "id": "GNB",
    "value": 65701
  },
  {
    "id": "GNQ",
    "value": 103549
  },
  {
    "id": "GRC",
    "value": 832335
  },
  {
    "id": "GTM",
    "value": 757756
  },
  {
    "id": "GUY",
    "value": 772418
  },
  {
    "id": "HND",
    "value": 845391
  },
  {
    "id": "HRV",
    "value": 405614
  },
  {
    "id": "HTI",
    "value": 878520
  },
  {
    "id": "HUN",
    "value": 836003
  },
  {
    "id": "IDN",
    "value": 43982
  },
  {
    "id": "IND",
    "value": 406696
  },
  {
    "id": "IRL",
    "value": 967458
  },
  {
    "id": "IRN",
    "value": 766764
  },
  {
    "id": "IRQ",
    "value": 899473
  },
  {
    "id": "ISL",
    "value": 908053
  },
  {
    "id": "ISR",
    "value": 75726
  },
  {
    "id": "ITA",
    "value": 594669
  },
  {
    "id": "JAM",
    "value": 787300
  },
  {
    "id": "JOR",
    "value": 321364
  },
  {
    "id": "JPN",
    "value": 484102
  },
  {
    "id": "KAZ",
    "value": 969542
  },
  {
    "id": "KEN",
    "value": 232390
  },
  {
    "id": "KGZ",
    "value": 548391
  },
  {
    "id": "KHM",
    "value": 634040
  },
  {
    "id": "OSA",
    "value": 944721
  },
  {
    "id": "KWT",
    "value": 25921
  },
  {
    "id": "LAO",
    "value": 666974
  },
  {
    "id": "LBN",
    "value": 242083
  },
  {
    "id": "LBR",
    "value": 505133
  },
  {
    "id": "LBY",
    "value": 637771
  },
  {
    "id": "LKA",
    "value": 484236
  },
  {
    "id": "LSO",
    "value": 808507
  },
  {
    "id": "LTU",
    "value": 763666
  },
  {
    "id": "LUX",
    "value": 1948
  },
  {
    "id": "LVA",
    "value": 661672
  },
  {
    "id": "MAR",
    "value": 327271
  },
  {
    "id": "MDA",
    "value": 835241
  },
  {
    "id": "MDG",
    "value": 256830
  },
  {
    "id": "MEX",
    "value": 890765
  },
  {
    "id": "MKD",
    "value": 840855
  },
  {
    "id": "MLI",
    "value": 528195
  },
  {
    "id": "MMR",
    "value": 379003
  },
  {
    "id": "MNE",
    "value": 828723
  },
  {
    "id": "MNG",
    "value": 17631
  },
  {
    "id": "MOZ",
    "value": 820221
  },
  {
    "id": "MRT",
    "value": 414502
  },
  {
    "id": "MWI",
    "value": 564802
  },
  {
    "id": "MYS",
    "value": 716320
  },
  {
    "id": "NAM",
    "value": 193004
  },
  {
    "id": "NCL",
    "value": 107086
  },
  {
    "id": "NER",
    "value": 347723
  },
  {
    "id": "NGA",
    "value": 385308
  },
  {
    "id": "NIC",
    "value": 466090
  },
  {
    "id": "NLD",
    "value": 564723
  },
  {
    "id": "NOR",
    "value": 352161
  },
  {
    "id": "NPL",
    "value": 938602
  },
  {
    "id": "NZL",
    "value": 169084
  },
  {
    "id": "OMN",
    "value": 51272
  },
  {
    "id": "PAK",
    "value": 877757
  },
  {
    "id": "PAN",
    "value": 915018
  },
  {
    "id": "PER",
    "value": 249694
  },
  {
    "id": "PHL",
    "value": 919730
  },
  {
    "id": "PNG",
    "value": 76713
  },
  {
    "id": "POL",
    "value": 730495
  },
  {
    "id": "PRI",
    "value": 677078
  },
  {
    "id": "PRT",
    "value": 574206
  },
  {
    "id": "PRY",
    "value": 842637
  },
  {
    "id": "QAT",
    "value": 543189
  },
  {
    "id": "ROU",
    "value": 910220
  },
  {
    "id": "RUS",
    "value": 230059
  },
  {
    "id": "RWA",
    "value": 908574
  },
  {
    "id": "ESH",
    "value": 796873
  },
  {
    "id": "SAU",
    "value": 402901
  },
  {
    "id": "SDN",
    "value": 546095
  },
  {
    "id": "SDS",
    "value": 764189
  },
  {
    "id": "SEN",
    "value": 723626
  },
  {
    "id": "SLB",
    "value": 738929
  },
  {
    "id": "SLE",
    "value": 18675
  },
  {
    "id": "SLV",
    "value": 796621
  },
  {
    "id": "ABV",
    "value": 549792
  },
  {
    "id": "SOM",
    "value": 322417
  },
  {
    "id": "SRB",
    "value": 13637
  },
  {
    "id": "SUR",
    "value": 165992
  },
  {
    "id": "SVK",
    "value": 350429
  },
  {
    "id": "SVN",
    "value": 185148
  },
  {
    "id": "SWZ",
    "value": 897444
  },
  {
    "id": "SYR",
    "value": 332972
  },
  {
    "id": "TCD",
    "value": 544010
  },
  {
    "id": "TGO",
    "value": 721896
  },
  {
    "id": "THA",
    "value": 986838
  },
  {
    "id": "TJK",
    "value": 185672
  },
  {
    "id": "TKM",
    "value": 407040
  },
  {
    "id": "TLS",
    "value": 316777
  },
  {
    "id": "TTO",
    "value": 731003
  },
  {
    "id": "TUN",
    "value": 8139
  },
  {
    "id": "TUR",
    "value": 675728
  },
  {
    "id": "TWN",
    "value": 47336
  },
  {
    "id": "TZA",
    "value": 596011
  },
  {
    "id": "UGA",
    "value": 493970
  },
  {
    "id": "UKR",
    "value": 314146
  },
  {
    "id": "URY",
    "value": 465679
  },
  {
    "id": "USA",
    "value": 888500
  },
  {
    "id": "UZB",
    "value": 997315
  },
  {
    "id": "VEN",
    "value": 622358
  },
  {
    "id": "VNM",
    "value": 651807
  },
  {
    "id": "VUT",
    "value": 912446
  },
  {
    "id": "PSE",
    "value": 756904
  },
  {
    "id": "YEM",
    "value": 202894
  },
  {
    "id": "ZAF",
    "value": 33195
  },
  {
    "id": "ZMB",
    "value": 533841
  },
  {
    "id": "ZWE",
    "value": 620123
  },
  {
    "id": "KOR",
    "value": 820436
  }
];

const Component = ({ data /* see data tab */ }) => (
  <ResponsiveChoropleth
    data={sampleData}
    features={world.features}
    margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
    colors="nivo"
    domain={[ 0, 1000000 ]}
    unknownColor="#666666"
    label="properties.name"
    valueFormat=".2s"
    projectionTranslation={[ 0.5, 0.5 ]}
    projectionRotation={[ 0, 0, 0 ]}
    enableGraticule={true}
    graticuleLineColor="#dddddd"
    borderWidth={0.5}
    borderColor="#152538"
    legends={[
      {
        anchor: 'bottom-left',
        direction: 'column',
        justify: true,
        translateX: 20,
        translateY: -100,
        itemsSpacing: 0,
        itemWidth: 94,
        itemHeight: 18,
        itemDirection: 'left-to-right',
        itemTextColor: '#444444',
        itemOpacity: 0.85,
        symbolSize: 18,
        effects: [
          {
            on: 'hover',
            style: {
              itemTextColor: '#000000',
              itemOpacity: 1
            }
          }
        ]
      }
    ]}
  />
);

export default {
  render: (id) => {
    ReactDOM.render(
      React.createElement(Component,{}),
      document.getElementById(id));
  }
};
