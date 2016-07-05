import { Meteor } from 'meteor/meteor';
// let Airtable = require('airtable');
//
//
// let connectHandler = WebApp.connectHandlers; // get meteor-core's connect-implementation
//
//
// Meteor.methods({
//   getCommentsWrapAsync: function() {
//
//
//       // let getData =  Meteor.wrapAsync(getAirtableData);
//       //
//       //
//       // console.log("Async to sync")
//       //
//       // let resultOfAsyncToSyncAirtable = getData();
//       // console.log("AFTER Async to sync")
//       //
//       // console.log(resultOfAsyncToSyncAirtable)
//       //
//
//     let convertAsyncToSync  = Meteor.wrapAsync( HTTP.get ),
//         resultOfAsyncToSync = convertAsyncToSync("https://api.airtable.com/v0/appfroa8YN4yjSWIk/UOI?maxRecords=50&view=Main%20View&api_key=keyWQTQBrkgbMOE4w", {} );
//         console.log(resultOfAsyncToSync)
//       return resultOfAsyncToSync;
//   }
// });
//
//
// /**
//  * HTTP Header Security
//  *
//  * enforce HTTP Strict Transport Security (HSTS) to prevent ManInTheMiddle-attacks
//  * on supported browsers (all but IE)
//  * > http://www.html5rocks.com/en/tutorials/security/transport-layer-security
//  *
//  * @header Strict-Transport-Security: max-age=2592000; includeSubDomains
//  */
// Meteor.startup(function () {
//   connectHandler.use(function (req, res, next) {
//     res.setHeader('Strict-Transport-Security', 'max-age=2592000; includeSubDomains'); // 2592000s / 30 days
//     return next();
//   })
// })
