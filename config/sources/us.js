module.exports = {
  schema: 'Us',
  formats: ['json', 'csv'],
  path: 'us/daily.{format}',
  tags: ['US Current and Historical Data'],
  description: 'US historic values.',
  endpoint: 'https://covidtracking.com/api/v1/us/daily.json',
  subDefinitions: [
    {
      key: 'usCurrent',
      schema: 'Us',
      path: 'us/current.{format}',
      tags: ['US Current and Historical Data'],
      description: 'US current values.',
    },
    {
      key: 'usDates',
      schema: 'Us',
      path: 'us/{date}.{format}',
      tags: ['US Current and Historical Data'],
      description: 'US current values.',
      parameters: [
        {
          name: 'date',
          in: 'path',
          required: true,
          style: 'simple',
          explode: false,
          schema: {
            type: 'string',
            example: '20200501',
          },
          description:
            'Use the ISO-formatted date, without hyphens, to select just the data for a specific date.',
        },
      ],
    },
  ],
  fieldDefinitions: [
    {
      source: 'date',
      target: 'date',
      type: 'integer',
      graphQlType: 'Int',
      description: '',
      nullable: false,
      example: 20200501,
    },
    {
      source: 'states',
      target: 'states',
      type: 'integer',
      graphQlType: 'Int',
      description: '',
      nullable: false,
      example: 50,
    },
    {
      source: 'positive',
      target: 'positive',
      type: 'integer',
      graphQlType: 'Int',
      description: '',
      nullable: true,
      example: 50,
    },

    {
      source: 'negative',
      target: 'negative',
      type: 'integer',
      graphQlType: 'Int',
      description: '',
      nullable: true,
      example: 50,
    },
    {
      source: 'pending',
      target: 'pending',
      type: 'integer',
      graphQlType: 'Int',
      description: '',
      nullable: true,
      example: 50,
    },
    {
      source: 'hospitalizedCurrently',
      target: 'hospitalizedCurrently',
      type: 'integer',
      graphQlType: 'Int',
      description: '',
      nullable: true,
      example: 50,
    },
    {
      source: 'hospitalizedCumulative',
      target: 'hospitalizedCumulative',
      type: 'integer',
      graphQlType: 'Int',
      description: '',
      nullable: true,
      example: 50,
    },
    {
      source: 'inIcuCurrently',
      target: 'inIcuCurrently',
      type: 'integer',
      graphQlType: 'Int',
      description: '',
      nullable: true,
      example: 50,
    },
    {
      source: 'inIcuCumulative',
      target: 'inIcuCumulative',
      type: 'integer',
      graphQlType: 'Int',
      description: '',
      nullable: true,
      example: 50,
    },
    {
      source: 'onVentilatorCurrently',
      target: 'onVentilatorCurrently',
      type: 'integer',
      graphQlType: 'Int',
      description: '',
      nullable: true,
      example: 50,
    },
    {
      source: 'onVentilatorCumulative',
      target: 'onVentilatorCumulative',
      type: 'integer',
      graphQlType: 'Int',
      description: '',
      nullable: true,
      example: 50,
    },

    {
      source: 'recovered',
      target: 'recovered',
      type: 'integer',
      graphQlType: 'Int',
      description: '',
      nullable: true,
      example: 50,
    },
    {
      source: 'dateChecked',
      target: 'dateChecked',
      type: 'string',
      graphQlType: 'String',
      description: '',
      nullable: true,
      example: 50,
    },
    {
      source: 'death',
      target: 'death',
      type: 'integer',
      graphQlType: 'Int',
      description: '',
      nullable: true,
      example: 50,
    },
    {
      source: 'hospitalized',
      target: 'hospitalized',
      type: 'integer',
      graphQlType: 'Int',
      description: '',
      nullable: true,
      example: 50,
    },
    {
      source: 'total',
      target: 'total',
      type: 'integer',
      graphQlType: 'Int',
      description: '',
      nullable: true,
      example: 50,
      sourceFuntion: (item) => item.posNeg,
    },
    {
      source: 'totalTestResults',
      target: 'totalTestResults',
      type: 'integer',
      graphQlType: 'Int',
      description: '',
      nullable: true,
      example: 50,
    },
    {
      source: 'posNeg',
      target: 'posNeg',
      type: 'integer',
      graphQlType: 'Int',
      description: '',
      nullable: true,
      example: 50,
    },
    {
      source: 'deathIncrease',
      target: 'deathIncrease',
      type: 'integer',
      graphQlType: 'Int',
      description: '',
      nullable: true,
      example: 50,
    },
    {
      source: 'hospitalizedIncrease',
      target: 'hospitalizedIncrease',
      type: 'integer',
      graphQlType: 'Int',
      description: '',
      nullable: true,
      example: 50,
    },
    {
      source: 'negativeIncrease',
      target: 'negativeIncrease',
      type: 'integer',
      graphQlType: 'Int',
      description: '',
      nullable: true,
      example: 50,
    },
    {
      source: 'positiveIncrease',
      target: 'positiveIncrease',
      type: 'integer',
      graphQlType: 'Int',
      description: '',
      nullable: true,
      example: 50,
    },
    {
      source: 'totalTestResultsIncrease',
      target: 'totalTestResultsIncrease',
      type: 'integer',
      graphQlType: 'Int',
      description: '',
      nullable: true,
      example: 50,
    },
    {
      source: 'hash',
      target: 'hash',
      type: 'string',
      graphQlType: 'String',
      description: 'A hash for this record',
      nullable: false,
      example: 50,
    },
  ],
}