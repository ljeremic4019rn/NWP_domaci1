// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import {Transaction} from "../app/model";

export const environment = {
  production: false,
  entityExtraction: 'https://api.dandelion.eu/datatxt/nex/v1\n',
  textSimilarity: 'https://api.dandelion.eu/datatxt/sim/v1',
  languageDetection: 'https://api.dandelion.eu/datatxt/li/v1\n',
  sentimentAnalysis: 'https://api.dandelion.eu/datatxt/sent/v1\n',

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
