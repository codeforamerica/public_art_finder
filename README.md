# Public Art Finder

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