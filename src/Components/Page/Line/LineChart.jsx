import { Box, useTheme } from "@mui/material";
import { ResponsiveLine } from '@nivo/line'
export default function LineChart({isDashboard}) {
    const data =[
        {
          "id": "japan",
          "color": "hsl(354, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 245
            },
            {
              "x": "helicopter",
              "y": 139
            },
            {
              "x": "boat",
              "y": 178
            },
            {
              "x": "train",
              "y": 129
            },
            {
              "x": "subway",
              "y": 90
            },
            {
              "x": "bus",
              "y": 111
            },
            {
              "x": "car",
              "y": 16
            },
            {
              "x": "moto",
              "y": 240
            },
            {
              "x": "bicycle",
              "y": 93
            },
            {
              "x": "horse",
              "y": 64
            },
            {
              "x": "skateboard",
              "y": 270
            },
            {
              "x": "others",
              "y": 30
            }
          ]
        },
        {
          "id": "france",
          "color": "hsl(7, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 67
            },
            {
              "x": "helicopter",
              "y": 294
            },
            {
              "x": "boat",
              "y": 56
            },
            {
              "x": "train",
              "y": 268
            },
            {
              "x": "subway",
              "y": 101
            },
            {
              "x": "bus",
              "y": 30
            },
            {
              "x": "car",
              "y": 83
            },
            {
              "x": "moto",
              "y": 164
            },
            {
              "x": "bicycle",
              "y": 236
            },
            {
              "x": "horse",
              "y": 133
            },
            {
              "x": "skateboard",
              "y": 23
            },
            {
              "x": "others",
              "y": 213
            }
          ]
        },
        {
          "id": "us",
          "color": "hsl(285, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 105
            },
            {
              "x": "helicopter",
              "y": 286
            },
            {
              "x": "boat",
              "y": 17
            },
            {
              "x": "train",
              "y": 178
            },
            {
              "x": "subway",
              "y": 146
            },
            {
              "x": "bus",
              "y": 6
            },
            {
              "x": "car",
              "y": 259
            },
            {
              "x": "moto",
              "y": 113
            },
            {
              "x": "bicycle",
              "y": 86
            },
            {
              "x": "horse",
              "y": 156
            },
            {
              "x": "skateboard",
              "y": 174
            },
            {
              "x": "others",
              "y": 26
            }
          ]
        },
        {
          "id": "germany",
          "color": "hsl(323, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 209
            },
            {
              "x": "helicopter",
              "y": 260
            },
            {
              "x": "boat",
              "y": 297
            },
            {
              "x": "train",
              "y": 260
            },
            {
              "x": "subway",
              "y": 212
            },
            {
              "x": "bus",
              "y": 149
            },
            {
              "x": "car",
              "y": 79
            },
            {
              "x": "moto",
              "y": 242
            },
            {
              "x": "bicycle",
              "y": 65
            },
            {
              "x": "horse",
              "y": 29
            },
            {
              "x": "skateboard",
              "y": 58
            },
            {
              "x": "others",
              "y": 65
            }
          ]
        },
        {
          "id": "norway",
          "color": "hsl(274, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 172
            },
            {
              "x": "helicopter",
              "y": 122
            },
            {
              "x": "boat",
              "y": 63
            },
            {
              "x": "train",
              "y": 253
            },
            {
              "x": "subway",
              "y": 140
            },
            {
              "x": "bus",
              "y": 233
            },
            {
              "x": "car",
              "y": 71
            },
            {
              "x": "moto",
              "y": 86
            },
            {
              "x": "bicycle",
              "y": 50
            },
            {
              "x": "horse",
              "y": 288
            },
            {
              "x": "skateboard",
              "y": 145
            },
            {
              "x": "others",
              "y": 128
            }
          ]
        }
      ]
      const theme = useTheme();
  return (
    <Box sx={{height:isDashboard?"350px": "75vh"}} >
       <ResponsiveLine
        data={data}
        curve="catmullRom"
        theme={
            {
 
    "text": {
        "fontSize": 11,
        "fill": theme.palette.text.primary,
        "outlineWidth": 0,
        "outlineColor": "transparent"
    },
    "axis": {
        "domain": {
            "line": {
                "stroke": theme.palette.divider,
                "strokeWidth": 1
            }
        },
        "legend": {
            "text": {
                "fontSize": 12,
                "fill": theme.palette.text.primary,
                "outlineWidth": 0,
                "outlineColor": "transparent"
            }
        },
        "ticks": {
            "line": {
                "stroke": theme.palette.divider,
                "strokeWidth": 1
            },
            "text": {
                "fontSize": 11,
                "fill": theme.palette.text.primary,
                "outlineWidth": 0,
                "outlineColor": "transparent"
            }
        }
    },
    "grid": {
        "line": {
            "stroke": theme.palette.divider,
            "strokeWidth": 0
        }
    },
    "legends": {
        "title": {
            "text": {
                "fontSize": 11,
                "fill": theme.palette.text.primary,
                "outlineWidth": 0,
                "outlineColor": "transparent"
            }
        },
        "text": {
            "fontSize": 11,
            "fill": theme.palette.text.primary,
            "outlineWidth": 0,
            "outlineColor": "transparent"
        },
        "ticks": {
            "line": {},
            "text": {
                "fontSize": 10,
                "fill": theme.palette.text.primary,
                "outlineWidth": 0,
                "outlineColor": "transparent"
            }
        }
    },
    "annotations": {
        "text": {
            "fontSize": 13,
            "fill": theme.palette.text.primary,
            "outlineWidth": 2,
            "outlineColor": "#ffffff",
            "outlineOpacity": 1
        },
        "link": {
            "stroke": "#000000",
            "strokeWidth": 1,
            "outlineWidth": 2,
            "outlineColor": "#ffffff",
            "outlineOpacity": 1
        },
        "outline": {
            "stroke": "#000000",
            "strokeWidth": 2,
            "outlineWidth": 2,
            "outlineColor": "#ffffff",
            "outlineOpacity": 1
        },
        "symbol": {
            "fill": "#000000",
            "outlineWidth": 2,
            "outlineColor": "#ffffff",
            "outlineOpacity": 1
        }
    },
    "tooltip": {
        "wrapper": {},
        "container": {
            "background": theme.palette.background.paper,
            "color": theme.palette.text.primary,
            "fontSize": 12
        },
        "basic": {},
        "chip": {},
        "table": {},
        "tableCell": {},
        "tableCellValue": {}
    }
}
        }
        
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: isDashboard ? null : "transportation",
            legendOffset: 36,
            legendPosition: 'middle',
            truncateTickAt: 0
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: isDashboard ? null : "cout",
            legendOffset: -40,
            legendPosition: 'middle',
            truncateTickAt: 0
        }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabel="data.yFormatted"
        pointLabelYOffset={-24}
        areaBaselineValue={20}
        enableTouchCrosshair={true}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />

      
    </Box>
  )
}
