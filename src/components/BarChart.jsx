import { useTheme } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";
import { tokens } from "../theme";
import { mockGameBarData } from "../data/mockData"; // your casino data

const BarChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const palette = tokens(theme.palette.mode);

  // fallback color map for keys (if your data doesn't include per-field color)
  const fallbackColorByKey = {
    Slots: palette.greenAccent[500],
    "Instant Win": palette.blueAccent[300],
    "Live Casino": palette.redAccent[400],
    "Table Games": palette.greenAccent[300],
    Roulette: palette.blueAccent[500],
    Poker: palette.redAccent[300],
    Crash: palette.yellowAccent ? palette.yellowAccent[400] : "#E6B800", // optional
  };

  return (
    <ResponsiveBar
      data={mockGameBarData}
      theme={{
        axis: {
          domain: {
            line: { stroke: palette.grey[100] },
          },
          legend: { text: { fill: palette.grey[100] } },
          ticks: {
            line: { stroke: palette.grey[100], strokeWidth: 1 },
            text: { fill: palette.grey[100] },
          },
        },
        legends: { text: { fill: palette.grey[100] } },
      }}
      // keys should match the properties in your mockGameBarData objects
      keys={["Slots", "Instant Win", "Live Casino", "Table Games", "Roulette", "Poker", "Crash"]}
      indexBy="provider"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}

      /**
       * CUSTOM COLORS FUNCTION:
       * Nivo calls this for every bar. We read a field like "SlotsColor"
       * from the data item (e.g. data["SlotsColor"]) — if it exists we use it,
       * otherwise fall back to the key-based palette.
       *
       * The function receives a `bar` object with properties like: id, data, indexValue.
       * Using data[`${id}Color`] aligns with your mock data naming convention.
       */
      colors={({ id, data }) => {
        // try per-row color (e.g. data["SlotsColor"])
        const colorField = `${id}Color`;
        if (data && Object.prototype.hasOwnProperty.call(data, colorField)) {
          return data[colorField];
        }
        // fallback to our key color map (string or hex)
        return fallbackColorByKey[id] || palette.blueAccent[300];
      }}

      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "#38bcb2",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "#eed312",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "Game Provider",
        legendPosition: "middle",
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "Revenue ($k)",
        legendPosition: "middle",
        legendOffset: -50,
      }}
      enableLabel={false}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
      legends={[
        {
          dataFrom: "keys",
          anchor: "bottom-right",
          direction: "column",
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: "left-to-right",
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            { on: "hover", style: { itemOpacity: 1 } },
          ],
        },
      ]}
      role="application"
      barAriaLabel={(e) => `${e.id}: ${e.formattedValue} for provider: ${e.indexValue}`}
    />
  );
};

export default BarChart;
