import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

function EChartPieComponent({ calorieData }) {
    const chartRef = useRef(null);

    useEffect(() => {
        const chart = echarts.init(chartRef.current);

        const option = {
            tooltip: {
                trigger: "item",
            },
            legend: {
                top: "5%",
                left: "center",
            },
            series: [
                {
                    name: "Calorie Data",
                    type: "pie",
                    radius: ["40%", "60%"],
                    avoidLabelOverlap: false,
                    itemStyle: {
                        borderRadius: 10,
                        borderWidth: 2,
                    },
                    label: {
                        show: false,
                        position: "center",
                    },
                    emphasis: {
                        label: {
                            color: "white",
                            show: true,
                            fontSize: 14,
                            fontWeight: "bold",
                        },
                    },
                    labelLine: {
                        show: false,
                    },
                    data: calorieData,
                },
            ],
        };

        chart.setOption(option);

        return () => {
            chart.dispose();
        };
    }, [calorieData]);

    return (
        <div
            ref={chartRef}
            style={{ width: "100%", height: "350px", marginTop: "0.5rem" }}
        />
    );
}

export default EChartPieComponent;