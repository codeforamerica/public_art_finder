# Public Art Finder

So... perhap you're asking youself, what is a 'Public Art Finder' anyway?

Well, the app as it's name implies provides a way for a local community to find and identify public art within their area. An area in this case usually refers to a metropolitan city. It is an app maintained by Code for America, originally built by 2011 Fellow John Mertens (@mertonium) while working with the city of Philadelphia. It has now been [deployed in other cities](http://commons.codeforamerica.org/apps/public-art-finder-mapper-mobile).

A running instance of the app can be seen at http://phl.publicartapp.mobi/

It looks like this:
![Philadelphia instance screenshot](https://img.skitch.com/20120815-ci654xnbdb6bfgbe6pgk7hynpm.jpg "Philadelphia Public Art Finder")
TODO: This should be screenshot from the iPhone Simulator

Do you have public art in your city? Would you like to have this be deployed in your area? Are you a local developer? If you answered yes to all of these questions, then awesome! First thing you need to know is that this is a CouchApp. If you're not familiar with what a CouchApp is, start by [reading up here](http://couchapp.org/page/index). Cool? Great. Now go ahead, fork the code and follow the setup instructions below. When the deployment is done and all set up, please submit an entry for the instance on [Civic Commons](http://commons.codeforamerica.org/apps/public-art-finder-mapper-mobile). Now pat yourself in the back, you ROCK!

## How to setup the 'viewer' mobile app

1. **Get  a CouchDB instance**
  - [Couchbase Server](http://www.couchbase.com/products-and-services/couchbase-single-server)  (great for local dev)
  - [Iriscouch](http://www.iriscouch.com) or [Cloudant](https://cloudant.com/#!/solutions/cloud) (for free hosted couch)
2. **Install couchapps**
  - [recline](https://github.com/maxogden/recline) or run:
 `curl -X POST http://user:pass@YOURCOUCH/_replicate
-d '{"source":"http://max.iriscouch.com/apps","target":"YOURDB", "doc_ids":["_design/recline"]}' -H "Content-type: application/json"`
  - [geojson-utils](https://github.com/vmx/geocouch-utils) or run:
`curl -X POST http://user:pass@YOURCOUCH/_replicate -d '{"source":"http://max.iriscouch.com/apps","target":"YOURDB", "doc_ids":["_design/geo"]}' -H "Content-type: application/json"`
  - viewer_couchapp (from this repo) or run:
  `curl -X POST http://user:pass@YOURCOUCH/_replicate -d '{"source":"http://mertonium.iriscouch.com/apps","target":"YOURDB", "doc_ids":["_design/viewer"]}' -H "Content-type: application/json"`
3. **Upload data**
  - Via recline
  - Also upload template (so that the correct fields are in recline)
4. **Clean the data**
  - Examples of common transforms
  - Make sure that the default fields are there
  - remove any columns you don't want
5. **Visit the app.**
  
(put on [datacouch](http://datacouch.com/)?)
