## @superset-ui/plugin-chart-traffic-lights

[![Version](https://img.shields.io/npm/v/@superset-ui/plugin-chart-traffic-lights.svg?style=flat-square)](https://www.npmjs.com/package/@superset-ui/plugin-chart-traffic-lights)

This plugin provides Traffic Lights for Superset.

### Usage

Configure `key`, which can be any `string`, and register the plugin. This `key` will be used to lookup this chart throughout the app.

```js
import TrafficLightsChartPlugin from '@superset-ui/plugin-chart-traffic-lights';

new TrafficLightsChartPlugin()
  .configure({ key: 'traffic-lights' })
  .register();
```

Then use it via `SuperChart`. See [storybook](https://apache-superset.github.io/superset-ui/?selectedKind=plugin-chart-traffic-lights) for more details.

```js
<SuperChart
  chartType="traffic-lights"
  width={600}
  height={600}
  formData={...}
  queriesData={[{
    data: {...},
  }]}
/>
```

### File structure generated

```
├── package.json
├── README.md
├── tsconfig.json
├── src
│   ├── TrafficLights.tsx
│   ├── images
│   │   └── thumbnail.png
│   ├── index.ts
│   ├── plugin
│   │   ├── buildQuery.ts
│   │   ├── controlPanel.ts
│   │   ├── index.ts
│   │   └── transformProps.ts
│   └── types.ts
├── test
│   └── index.test.ts
└── types
    └── external.d.ts
```