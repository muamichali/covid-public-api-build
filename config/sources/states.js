const { DateTime } = require('luxon')
const objectHash = require('object-hash')
const stateNames = require('../state-names')

const stateParameter = {
  name: 'state',
  in: 'path',
  required: true,
  style: 'simple',
  explode: false,
  schema: {
    type: 'string',
    example: 'ca',
  },
  description:
    'Use the two-letter state code to select the current value for a single state.',
}

module.exports = {
  schema: 'States',
  path: 'states/daily.{format}',
  tags: ['States Current and Historical Data'],
  description: 'States historical data.',
  sheetId: '18oVRrHj3c183mHmq3m89_163yuYltLNlOmPerQ18E8w',
  worksheetId: '916628299',
  subDefinitions: [
    {
      key: 'statesCurrent',
      schema: 'States',
      path: 'states/current.{format}',
      tags: ['States Current and Historical Data'],
      description: 'State current values.',
    },
    {
      key: 'statesIndividualCurrent',
      schema: 'States',
      path: 'states/{state}/current.{format}',
      tags: ['States Current and Historical Data'],
      description: 'State current values.',
      parameters: [stateParameter],
    },
    {
      key: 'statesIndividualDaily',
      schema: 'States',
      path: 'states/{state}/daily.{format}',
      tags: ['States Current and Historical Data'],
      description: 'State daily values.',
      parameters: [stateParameter],
    },
    {
      key: 'statesIndividualByDate',
      schema: 'States',
      path: 'states/{state}/{date}.{format}',
      tags: ['States Current and Historical Data'],
      description: 'State date values',
      parameters: [
        stateParameter,
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
      source: 'Date',
      target: 'date',
      type: 'integer',
      graphQlType: 'Int',
      description: '',
      nullable: false,
      example: 20200501,
    },
    {
      source: 'State',
      target: 'state',
      type: 'string',
      graphQlType: 'String',
      description: '',
      nullable: false,
      example: '',
    },
    {
      source: 'fips',
      target: 'fips',
      type: 'string',
      graphQlType: 'String',
      description: '',
      nullable: true,
      example: '',
      sourceFunction: (item) =>
        typeof stateNames[item.state] !== 'undefined'
          ? stateNames[item.state].fips
          : 0,
    },
    {
      source: 'Positive',
      target: 'positive',
      type: 'integer',
      graphQlType: 'Int',
      description: '',
      nullable: true,
      example: '',
    },

    {
      source: 'positiveIncrease',
      target: 'positiveIncrease',
      type: 'integer',
      graphQlType: 'Int',
      description: '',
      nullable: true,
      example: '',
      sourceFunction: (item) => 0,
    },
    {
      source: 'Negative',
      target: 'negative',
      type: 'integer',
      graphQlType: 'Int',
      description: '',
      nullable: true,
      example: '',
    },

    {
      source: 'negativeIncrease',
      target: 'negativeIncrease',
      type: 'integer',
      graphQlType: 'Int',
      description: '',
      nullable: true,
      example: '',
      sourceFunction: (item) => 0,
    },
    {
      source: 'Pending',
      target: 'pending',
      type: 'integer',
      graphQlType: 'Int',
      description: '',
      nullable: true,
      example: '',
    },
    {
      source: 'total',
      target: 'total',
      type: 'integer',
      graphQlType: 'Int',
      description: '',
      nullable: true,
      example: '',
      sourceFunction: (item) =>
        (item.positive || 0) + (item.negative || 0) + (item.pending || 0),
    },
    {
      source: 'totalTestResults',
      target: 'totalTestResults',
      type: 'integer',
      graphQlType: 'Int',
      description: '',
      nullable: true,
      example: '',
      sourceFunction: (item) => item.positive + item.negative,
    },
    {
      source: 'totalTestResultsIncrease',
      target: 'totalTestResultsIncrease',
      type: 'integer',
      graphQlType: 'Int',
      description: '',
      nullable: true,
      example: '',
      sourceFunction: (item) => 0,
    },
    {
      source: 'posNeg',
      target: 'posNeg',
      type: 'integer',
      graphQlType: 'Int',
      description: '',
      nullable: true,
      example: '',
      sourceFunction: (item) => item.positive + item.negative,
    },
    {
      source: 'Hospitalized – Currently',
      target: 'hospitalizedCurrently',
      type: 'integer',
      graphQlType: 'Int',
      description: '',
      nullable: true,
      example: '',
    },
    {
      source: 'Hospitalized – Cumulative',
      target: 'hospitalizedCumulative',
      type: 'integer',
      graphQlType: 'Int',
      description: '',
      nullable: true,
      example: '',
    },
    {
      source: 'In ICU – Currently',
      target: 'inIcuCurrently',
      type: 'integer',
      graphQlType: 'Int',
      description: '',
      nullable: true,
      example: '',
    },
    {
      source: 'In ICU – Cumulative',
      target: 'inIcuCumulative',
      type: 'integer',
      graphQlType: 'Int',
      description: '',
      nullable: true,
      example: '',
    },
    {
      source: 'On Ventilator – Currently',
      target: 'onVentilatorCurrently',
      type: 'integer',
      graphQlType: 'Int',
      description: '',
      nullable: true,
      example: '',
    },
    {
      source: 'On Ventilator – Cumulative',
      target: 'onVentilatorCumulative',
      type: 'integer',
      graphQlType: 'Int',
      description: '',
      nullable: true,
      example: '',
    },
    {
      source: 'Recovered',
      target: 'recovered',
      type: 'integer',
      graphQlType: 'Int',
      description: '',
      nullable: true,
      example: '',
    },
    {
      source: 'Data Quality Grade',
      target: 'dataQualityGrade',
      type: 'string',
      graphQlType: 'String',
      description: '',
      nullable: true,
      example: '',
    },
    {
      source: 'Last Update ET',
      target: 'lastUpdateEt',
      type: 'integer',
      graphQlType: 'Int',
      description: '',
      nullable: true,
      example: '',
      format: (date) =>
        DateTime.fromFormat(date || 'now', 'M/d/yyyy HH:mm').toISO(),
    },

    {
      source: 'Last Update ET',
      target: 'dateModified',
      type: 'string',
      graphQlType: 'String',
      description: '',
      nullable: true,
      example: '',
      format: (date) =>
        DateTime.fromFormat(date || 'now', 'M/d/yyyy HH:mm').toISO(),
    },
    {
      source: 'Deaths',
      target: 'death',
      type: 'integer',
      graphQlType: 'Int',
      description: '',
      nullable: true,
      example: '',
    },
    {
      source: 'deathIncrease',
      target: 'deathIncrease',
      type: 'integer',
      graphQlType: 'Int',
      description: '',
      nullable: true,
      example: '',
      sourceFunction: (item) => 0,
    },
    {
      source: 'Hospitalized – Cumulative',
      target: 'hospitalized',
      type: 'integer',
      graphQlType: 'Int',
      description: '',
      nullable: true,
      example: '',
    },
    {
      source: 'hospitalizedIncrease',
      target: 'hospitalizedIncrease',
      type: 'integer',
      graphQlType: 'Int',
      description: '',
      nullable: true,
      example: '',
      sourceFunction: (item) => 0,
    },
    {
      source: 'Last Update ET',
      target: 'dateChecked',
      type: 'string',
      graphQlType: 'String',
      description: '',
      nullable: true,
      example: '',
      format: (date) =>
        DateTime.fromFormat('5/26/2020 00:00', 'M/d/yyyy HH:mm').toISO(),
    },
    {
      source: 'hash',
      target: 'hash',
      type: 'string',
      graphQlType: 'String',
      description: '',
      nullable: true,
      example: '',
      sourceFunction: (item) => objectHash(item),
    },
  ],
}
