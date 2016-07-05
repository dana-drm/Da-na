import { Meteor } from 'meteor/meteor';
let Airtable = require('airtable');


let connectHandler = WebApp.connectHandlers; // get meteor-core's connect-implementation

let getAirtableData = function() {
  Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: 'keyJoo0QH6ip5yH4S'
  });

  let base = Airtable.base('appfroa8YN4yjSWIk');
  let donors = {};
  let campaigns = {};
  let stageCounts = {};

  base('Beneficiaries(Dummy)').select({
        // Selecting the first 3 records in Main View:
        maxRecords: 400,
        view: "Main View"
    }).eachPage(function page(records, fetchNextPage) {
        // This function (`page`) will get called for each page of records.
        records.forEach(function(record) {

          stageCounts[record.get('Stage')] += 1;
          let campaign_name = record.get('Name');

            campaigns[campaign_name] =
              {
                campaign_name: record.get('Name'),
                campaign_condition: record.get('Condition'),
                campaign_stage: record.get('Stage'),
                campaign_treatment: record.get('Treatment'),
                campaign_photo: record.get('Photo')[0].url,
                home_location: record.get('Home Location'),
                treatment_location: record.get('Treatment Location'),
                age: record.get('Age'),
                gender: record.get('gender'),
                hosting_chapter: record.get('Hosting Chapter'),
                family_member: record.get('Family Member'),
                donor_list: record.get('Donors(Dummy)'),
            }
        });
        fetchNextPage(campaigns);
        // console.log(campaigns)
        //callback(campaigns);
    }.bind(this),
    function done(error) {
        //console.log(campaigns);
        if (error) {
            console.log(error);
        }

        return campaigns;
    });

    console.log(campaigns);
    // return campaigns;

  };


Meteor.methods({
  getCommentsWrapAsync: function() {


      // let getData =  Meteor.wrapAsync(getAirtableData);
      //
      //
      // console.log("Async to sync")
      //
      // let resultOfAsyncToSyncAirtable = getData();
      // console.log("AFTER Async to sync")
      //
      // console.log(resultOfAsyncToSyncAirtable)
      //

    let convertAsyncToSync  = Meteor.wrapAsync( HTTP.get ),
        resultOfAsyncToSync = convertAsyncToSync("https://api.airtable.com/v0/appfroa8YN4yjSWIk/UOI?maxRecords=50&view=Main%20View&api_key=keyWQTQBrkgbMOE4w", {} );
        console.log(resultOfAsyncToSync)
      return resultOfAsyncToSync;
  }
});


/**
 * HTTP Header Security
 *
 * enforce HTTP Strict Transport Security (HSTS) to prevent ManInTheMiddle-attacks
 * on supported browsers (all but IE)
 * > http://www.html5rocks.com/en/tutorials/security/transport-layer-security
 *
 * @header Strict-Transport-Security: max-age=2592000; includeSubDomains
 */
Meteor.startup(function () {
  connectHandler.use(function (req, res, next) {
    res.setHeader('Strict-Transport-Security', 'max-age=2592000; includeSubDomains'); // 2592000s / 30 days
    return next();
  })
})
