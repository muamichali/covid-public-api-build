module.exports = {
  schema: 'RaceStatesCombined',
  path: 'race/states-combined.{format}',
  tags: ['Racial data tracker'],
  description: 'Racial data on states who combine race and ethnicity',
  sheetId: '1FnrtpGkm9tuWg8FLavkIHhJSx0Z-X5QJUfbkPhgL3JQ',
  worksheetId: '1387219534',
  fieldDefinitions: [
    {
      source: 'state',
      target: 'state',
      type: 'string',
      graphQlType: 'String',
      description: 'State abbreviation',
      nullable: false,
    },
    {
      source: 'name',
      target: 'stateName',
      type: 'string',
      graphQlType: 'String',
      description: 'State name',
      nullable: false,
    },
    {
      source: 'unknownRaceEthPos',
      target: 'unknownRaceEthPos',
      type: 'number',
      graphQlType: 'Int',
      description: '',
      nullable: true,
    },
    {
      source: 'unknownRaceEthDeath',
      target: 'unknownRaceEthDeath',
      type: 'number',
      graphQlType: 'Int',
      description: '',
      nullable: true,
    },
    {
      source: 'knownRaceEthPos',
      target: 'knownRaceEthPos',
      type: 'number',
      graphQlType: 'Int',
      description: '',
      nullable: true,
    },
    {
      source: 'knownRaceEthDeath',
      target: 'knownRaceEthDeath',
      type: 'number',
      graphQlType: 'Int',
      description: '',
      nullable: true,
    },
    {
      source: 'blackPositives',
      target: 'blackPositives',
      type: 'number',
      graphQlType: 'Int',
      description: '',
      nullable: true,
    },
    {
      source: 'blackDeaths',
      target: 'blackDeaths',
      type: 'number',
      graphQlType: 'Int',
      description: '',
      nullable: true,
    },
    {
      source: 'blackPctPop',
      target: 'blackPctPop',
      type: 'number',
      graphQlType: 'Int',
      description: '',
      nullable: true,
    },
    {
      source: 'blackPctPos',
      target: 'blackPctPos',
      type: 'number',
      graphQlType: 'Int',
      description: '',
      nullable: true,
    },
    {
      source: 'blackPctDeath',
      target: 'blackPctDeath',
      type: 'number',
      graphQlType: 'Int',
      description: '',
      nullable: true,
    },
    {
      source: 'blackPosDispFlag',
      target: 'blackPosDispFlag',
      type: 'number',
      graphQlType: 'Int',
      description: '',
      nullable: true,
    },
    {
      source: 'blackDeathDispFlag',
      target: 'blackDeathDispFlag',
      type: 'number',
      graphQlType: 'Int',
      description: '',
      nullable: true,
    },
    {
      source: 'blackPosCaution',
      target: 'blackPosCaution',
      type: 'number',
      graphQlType: 'Int',
      description: '',
      nullable: true,
    },
    {
      source: 'blackDeathCaution',
      target: 'blackDeathCaution',
      type: 'number',
      graphQlType: 'Int',
      description: '',
      nullable: true,
    },
    {
      source: 'blackANHPINotes',
      target: 'blackANHPINotes',
      type: 'string',
      graphQlType: 'String',
      description: '',
      nullable: true,
    },
    {
      source: 'blackPosNotes',
      target: 'blackPosNotes',
      type: 'number',
      graphQlType: 'Int',
      description: '',
      nullable: true,
    },
    {
      source: 'blackDeathNotes',
      target: 'blackDeathNotes',
      type: 'number',
      graphQlType: 'Int',
      description: '',
      nullable: true,
    },
    {
      source: 'asianPositives',
      target: 'asianPositives',
      type: 'number',
      graphQlType: 'Int',
      description: '',
      nullable: true,
    },
    {
      source: 'asianDeaths',
      target: 'asianDeaths',
      type: 'number',
      graphQlType: 'Int',
      description: '',
      nullable: true,
    },
    {
      source: 'asianPctPop',
      target: 'asianPctPop',
      type: 'number',
      graphQlType: 'Int',
      description: '',
      nullable: true,
    },
    {
      source: 'asianPctPos',
      target: 'asianPctPos',
      type: 'number',
      graphQlType: 'Int',
      description: '',
      nullable: true,
    },
    {
      source: 'asianPctDeath',
      target: 'asianPctDeath',
      type: 'number',
      graphQlType: 'Int',
      description: '',
      nullable: true,
    },
    {
      source: 'asianPosDispFlag',
      target: 'asianPosDispFlag',
      type: 'number',
      graphQlType: 'Int',
      description: '',
      nullable: true,
    },
    {
      source: 'asianDeathDispFlag',
      target: 'asianDeathDispFlag',
      type: 'number',
      graphQlType: 'Int',
      description: '',
      nullable: true,
    },
    {
      source: 'asianPosCaution',
      target: 'asianPosCaution',
      type: 'number',
      graphQlType: 'Int',
      description: '',
      nullable: true,
    },
    {
      source: 'asianDeathCaution',
      target: 'asianDeathCaution',
      type: 'number',
      graphQlType: 'Int',
      description: '',
      nullable: true,
    },
    {
      source: 'asianANHPINotes',
      target: 'asianANHPINotes',
      type: 'string',
      graphQlType: 'String',
      description: '',
      nullable: true,
    },
    {
      source: 'asianPosNotes',
      target: 'asianPosNotes',
      type: 'number',
      graphQlType: 'Int',
      description: '',
      nullable: true,
    },
    {
      source: 'asianDeathNotes',
      target: 'asianDeathNotes',
      type: 'number',
      graphQlType: 'Int',
      description: '',
      nullable: true,
    },
    {
      source: 'aianPositives',
      target: 'aianPositives',
      type: 'number',
      graphQlType: 'Int',
      description: '',
      nullable: true,
    },
    {
      source: 'aianDeaths',
      target: 'aianDeaths',
      type: 'number',
      graphQlType: 'Int',
      description: '',
      nullable: true,
    },
    {
      source: 'aianPctPop',
      target: 'aianPctPop',
      type: 'number',
      graphQlType: 'Int',
      description: '',
      nullable: true,
    },
    {
      source: 'aianPctPos',
      target: 'aianPctPos',
      type: 'number',
      graphQlType: 'Int',
      description: '',
      nullable: true,
    },
    {
      source: 'aianPctDeath',
      target: 'aianPctDeath',
      type: 'number',
      graphQlType: 'Int',
      description: '',
      nullable: true,
    },
    {
      source: 'aianPosDispFlag',
      target: 'aianPosDispFlag',
      type: 'number',
      graphQlType: 'Int',
      description: '',
      nullable: true,
    },
    {
      source: 'aianDeathDispFlag',
      target: 'aianDeathDispFlag',
      type: 'number',
      graphQlType: 'Int',
      description: '',
      nullable: true,
    },
    {
      source: 'aianPosCaution',
      target: 'aianPosCaution',
      type: 'number',
      graphQlType: 'Int',
      description: '',
      nullable: true,
    },
    {
      source: 'aianDeathCaution',
      target: 'aianDeathCaution',
      type: 'number',
      graphQlType: 'Int',
      description: '',
      nullable: true,
    },
    {
      source: 'aianANHPINotes',
      target: 'aianANHPINotes',
      type: 'string',
      graphQlType: 'String',
      description: '',
      nullable: true,
    },
    {
      source: 'aianPosNotes',
      target: 'aianPosNotes',
      type: 'number',
      graphQlType: 'Int',
      description: '',
      nullable: true,
    },
    {
      source: 'aianDeathNotes',
      target: 'aianDeathNotes',
      type: 'number',
      graphQlType: 'Int',
      description: '',
      nullable: true,
    },
    {
      source: 'nhpiPositives',
      target: 'nhpiPositives',
      type: 'number',
      graphQlType: 'Int',
      description: '',
      nullable: true,
    },
    {
      source: 'nhpiDeaths',
      target: 'nhpiDeaths',
      type: 'number',
      graphQlType: 'Int',
      description: '',
      nullable: true,
    },
    {
      source: 'nhpiPctPop',
      target: 'nhpiPctPop',
      type: 'number',
      graphQlType: 'Int',
      description: '',
      nullable: true,
    },
    {
      source: 'nhpiPctPos',
      target: 'nhpiPctPos',
      type: 'number',
      graphQlType: 'Int',
      description: '',
      nullable: true,
    },
    {
      source: 'nhpiPctDeath',
      target: 'nhpiPctDeath',
      type: 'number',
      graphQlType: 'Int',
      description: '',
      nullable: true,
    },
    {
      source: 'nhpiPosDispFlag',
      target: 'nhpiPosDispFlag',
      type: 'number',
      graphQlType: 'Int',
      description: '',
      nullable: true,
    },
    {
      source: 'nhpiDeathDispFlag',
      target: 'nhpiDeathDispFlag',
      type: 'number',
      graphQlType: 'Int',
      description: '',
      nullable: true,
    },
    {
      source: 'nhpiPosCaution',
      target: 'nhpiPosCaution',
      type: 'number',
      graphQlType: 'Int',
      description: '',
      nullable: true,
    },
    {
      source: 'nhpiDeathCaution',
      target: 'nhpiDeathCaution',
      type: 'number',
      graphQlType: 'Int',
      description: '',
      nullable: true,
    },
    {
      source: 'nhpiANHPINotes',
      target: 'nhpiANHPINotes',
      type: 'string',
      graphQlType: 'String',
      description: '',
      nullable: true,
    },
    {
      source: 'nhpiPosNotes',
      target: 'nhpiPosNotes',
      type: 'number',
      graphQlType: 'Int',
      description: '',
      nullable: true,
    },
    {
      source: 'nhpiDeathNotes',
      target: 'nhpiDeathNotes',
      type: 'number',
      graphQlType: 'Int',
      description: '',
      nullable: true,
    },
    {
      source: 'twoPositives',
      target: 'twoPositives',
      type: 'number',
      graphQlType: 'Int',
      description: '',
      nullable: true,
    },
    {
      source: 'twoDeaths',
      target: 'twoDeaths',
      type: 'number',
      graphQlType: 'Int',
      description: '',
      nullable: true,
    },
    {
      source: 'twoPctPop',
      target: 'twoPctPop',
      type: 'number',
      graphQlType: 'Int',
      description: '',
      nullable: true,
    },
    {
      source: 'twoPctPos',
      target: 'twoPctPos',
      type: 'number',
      graphQlType: 'Int',
      description: '',
      nullable: true,
    },
    {
      source: 'twoPctDeath',
      target: 'twoPctDeath',
      type: 'number',
      graphQlType: 'Int',
      description: '',
      nullable: true,
    },
    {
      source: 'twoPosDispFlag',
      target: 'twoPosDispFlag',
      type: 'number',
      graphQlType: 'Int',
      description: '',
      nullable: true,
    },
    {
      source: 'twoDeathDispFlag',
      target: 'twoDeathDispFlag',
      type: 'number',
      graphQlType: 'Int',
      description: '',
      nullable: true,
    },
    {
      source: 'twoPosCaution',
      target: 'twoPosCaution',
      type: 'number',
      graphQlType: 'Int',
      description: '',
      nullable: true,
    },
    {
      source: 'twoDeathCaution',
      target: 'twoDeathCaution',
      type: 'number',
      graphQlType: 'Int',
      description: '',
      nullable: true,
    },
    {
      source: 'twoANHPINotes',
      target: 'twoANHPINotes',
      type: 'string',
      graphQlType: 'String',
      description: '',
      nullable: true,
    },
    {
      source: 'twoPosNotes',
      target: 'twoPosNotes',
      type: 'number',
      graphQlType: 'Int',
      description: '',
      nullable: true,
    },
    {
      source: 'twoDeathNotes',
      target: 'twoDeathNotes',
      type: 'number',
      graphQlType: 'Int',
      description: '',
      nullable: true,
    },
    {
      source: 'whitePositives',
      target: 'whitePositives',
      type: 'number',
      graphQlType: 'Int',
      description: '',
      nullable: true,
    },
    {
      source: 'whiteDeaths',
      target: 'whiteDeaths',
      type: 'number',
      graphQlType: 'Int',
      description: '',
      nullable: true,
    },
    {
      source: 'whitePctPop',
      target: 'whitePctPop',
      type: 'number',
      graphQlType: 'Int',
      description: '',
      nullable: true,
    },
    {
      source: 'whitePctPos',
      target: 'whitePctPos',
      type: 'number',
      graphQlType: 'Int',
      description: '',
      nullable: true,
    },
    {
      source: 'whitePctDeath',
      target: 'whitePctDeath',
      type: 'number',
      graphQlType: 'Int',
      description: '',
      nullable: true,
    },
    {
      source: 'whitePosDispFlag',
      target: 'whitePosDispFlag',
      type: 'number',
      graphQlType: 'Int',
      description: '',
      nullable: true,
    },
    {
      source: 'whiteDeathDispFlag',
      target: 'whiteDeathDispFlag',
      type: 'number',
      graphQlType: 'Int',
      description: '',
      nullable: true,
    },
    {
      source: 'whitePosCaution',
      target: 'whitePosCaution',
      type: 'number',
      graphQlType: 'Int',
      description: '',
      nullable: true,
    },
    {
      source: 'whiteDeathCaution',
      target: 'whiteDeathCaution',
      type: 'number',
      graphQlType: 'Int',
      description: '',
      nullable: true,
    },
    {
      source: 'whiteANHPINotes',
      target: 'whiteANHPINotes',
      type: 'string',
      graphQlType: 'String',
      description: '',
      nullable: true,
    },
    {
      source: 'whitePosNotes',
      target: 'whitePosNotes',
      type: 'number',
      graphQlType: 'Int',
      description: '',
      nullable: true,
    },
    {
      source: 'whiteDeathNotes',
      target: 'whiteDeathNotes',
      type: 'number',
      graphQlType: 'Int',
      description: '',
      nullable: true,
    },
    {
      source: 'otherPositives',
      target: 'otherPositives',
      type: 'number',
      graphQlType: 'Int',
      description: '',
      nullable: true,
    },
    {
      source: 'otherDeaths',
      target: 'otherDeaths',
      type: 'number',
      graphQlType: 'Int',
      description: '',
      nullable: true,
    },
    {
      source: 'otherPctPop',
      target: 'otherPctPop',
      type: 'number',
      graphQlType: 'Int',
      description: '',
      nullable: true,
    },
    {
      source: 'otherPctPos',
      target: 'otherPctPos',
      type: 'number',
      graphQlType: 'Int',
      description: '',
      nullable: true,
    },
    {
      source: 'otherPctDeath',
      target: 'otherPctDeath',
      type: 'number',
      graphQlType: 'Int',
      description: '',
      nullable: true,
    },
    {
      source: 'otherPosDispFlag',
      target: 'otherPosDispFlag',
      type: 'number',
      graphQlType: 'Int',
      description: '',
      nullable: true,
    },
    {
      source: 'otherDeathDispFlag',
      target: 'otherDeathDispFlag',
      type: 'number',
      graphQlType: 'Int',
      description: '',
      nullable: true,
    },
    {
      source: 'otherPosCaution',
      target: 'otherPosCaution',
      type: 'number',
      graphQlType: 'Int',
      description: '',
      nullable: true,
    },
    {
      source: 'otherDeathCaution',
      target: 'otherDeathCaution',
      type: 'number',
      graphQlType: 'Int',
      description: '',
      nullable: true,
    },
    {
      source: 'otherANHPINotes',
      target: 'otherANHPINotes',
      type: 'string',
      graphQlType: 'String',
      description: '',
      nullable: true,
    },
    {
      source: 'otherPosNotes',
      target: 'otherPosNotes',
      type: 'number',
      graphQlType: 'Int',
      description: '',
      nullable: true,
    },
    {
      source: 'otherDeathNotes',
      target: 'otherDeathNotes',
      type: 'number',
      graphQlType: 'Int',
      description: '',
      nullable: true,
    },
    {
      source: 'latinXPositives',
      target: 'latinXPositives',
      type: 'number',
      graphQlType: 'Int',
      description: '',
      nullable: true,
    },
    {
      source: 'latinXDeaths',
      target: 'latinXDeaths',
      type: 'number',
      graphQlType: 'Int',
      description: '',
      nullable: true,
    },
    {
      source: 'latinXPctPop',
      target: 'latinXPctPop',
      type: 'number',
      graphQlType: 'Int',
      description: '',
      nullable: true,
    },
    {
      source: 'latinXPctPos',
      target: 'latinXPctPos',
      type: 'number',
      graphQlType: 'Int',
      description: '',
      nullable: true,
    },
    {
      source: 'latinXPctDeath',
      target: 'latinXPctDeath',
      type: 'number',
      graphQlType: 'Int',
      description: '',
      nullable: true,
    },
    {
      source: 'latinXPosDispFlag',
      target: 'latinXPosDispFlag',
      type: 'number',
      graphQlType: 'Int',
      description: '',
      nullable: true,
    },
    {
      source: 'latinXDeathDispFlag',
      target: 'latinXDeathDispFlag',
      type: 'number',
      graphQlType: 'Int',
      description: '',
      nullable: true,
    },
    {
      source: 'latinXPosCaution',
      target: 'latinXPosCaution',
      type: 'number',
      graphQlType: 'Int',
      description: '',
      nullable: true,
    },
    {
      source: 'latinXDeathCaution',
      target: 'latinXDeathCaution',
      type: 'number',
      graphQlType: 'Int',
      description: '',
      nullable: true,
    },
    {
      source: 'latinXANHPINotes',
      target: 'latinXANHPINotes',
      type: 'string',
      graphQlType: 'String',
      description: '',
      nullable: true,
    },
    {
      source: 'latinXPosNotes',
      target: 'latinXPosNotes',
      type: 'number',
      graphQlType: 'Int',
      description: '',
      nullable: true,
    },
    {
      source: 'latinXDeathNotes',
      target: 'latinXDeathNotes',
      type: 'number',
      graphQlType: 'Int',
      description: '',
      nullable: true,
    },
  ],
}
