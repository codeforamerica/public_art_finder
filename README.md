# Public Art Finder

## Description
So.. what is a 'Public Art Finder' anyway?

The app as it's name implies provides a way for a local community to find and identify public art within their area. An area in this case usually refers to a metropolitan city. It is an app maintained by Code for America, originally built by 2011 Fellow John Mertens (@mertonium) while working with the city of Philadelphia. It has now been [deployed in other cities](http://commons.codeforamerica.org/apps/public-art-finder-mapper-mobile).

A running instance of the app can be seen at http://phl.publicartapp.mobi/

It looks like this:
![*Philadelphia instance screenshot](https://skitch.com/tinio/eciwr/public-art-finder)
TODO: This should be screenshot from the iPhone Simulator

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
