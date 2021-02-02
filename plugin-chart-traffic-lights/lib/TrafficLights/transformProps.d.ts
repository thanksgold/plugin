import { TimeGranularity, ChartProps, QueryData } from '@superset-ui/core';
export interface TrafficLightsDatum {
    [key: string]: number | null;
}
export declare type TrafficLightsFormData = {
    colorPicker?: {
        r: number;
        g: number;
        b: number;
    };
    metric?: {
        label: string;
    } | string;
    compareLag?: string | number;
    yAxisFormat?: string;
    timeGrainSqla?: TimeGranularity;
};
export declare type TrafficLightsChartProps = ChartProps & {
    formData: TrafficLightsFormData;
    queriesData: (QueryData & {
        data?: TrafficLightsFormData[];
    })[];
};
export default function transformProps(chartProps: TrafficLightsChartProps): {
    width: number;
    height: number;
    trafficLights: number | null;
    trafficLightsFallback: {
        x: number | null;
        y: number | null;
    } | undefined;
    className: string;
    formatNumber: import("@superset-ui/core/lib/number-format/NumberFormatter").default;
    formatTime: import("@superset-ui/core/lib/time-format/TimeFormatter").default;
    headerFontSize: any;
    subheaderFontSize: any;
    mainColor: string | undefined;
    showTrendLine: any;
    startYAxisAtZero: any;
    subheader: any;
    trendLineData: {
        x: number | null;
        y: number | null;
    }[] | undefined;
    fromDatetime: any;
    toDatetime: any;
    timeRangeFixed: any;
};
//# sourceMappingURL=transformProps.d.ts.map
