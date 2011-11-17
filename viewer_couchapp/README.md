# Public Art Finder

*Note: This software is a CouchApp*

CouchApps are web applications which can be served directly from [CouchDB](http://couchdb.apache.org). This gives them the nice property of replicating just like any other data stored in CouchDB. They are also simple to write as they can use the built-in jQuery libraries and plugins that ship with CouchDB.

[More info about CouchApps here.](http://couchapp.org)

1. *Get art data ready* - There are a lot of ways to do this.  I've written a [case study documenting how we did this for the City of Boston](http://mertonium.com/2011/09/a-data-liberation-walkthrough/).  You should have at least [these fields](https://github.com/mertonium/public_art_finder/blob/master/public_art_finder_template.json) in your documents.
1. *Replicate viewer_couchapp* - either install the `viewer_couchapp` from this repo, or just replicate it with the following cURL command:
`curl -X POST http://user:pass@YOURCOUCH/_replicate -d '{"source":"http://mertonium.iriscouch.com/apps","target":"YOURDB", "doc_ids":["_design/viewer"]}' -H "Content-type: application/json"`
1. *Create appconfig document* - Just a simple document to put in your db. I would use [this Gist](https://gist.github.com/1368786) as a starting point.  The fields are pretty self explanitory.
1. *Setup vhosts for pretty urls* - If you are using Iriscouch, there are [directions here](http://getsatisfaction.com/iriscouch/topics/custom_domain-hslrb). Once you get your domain pointing to your couch, you need to setup a vhost record in your Couch configuration.  It should point to `/your_db_name/_design/viewer/_rewrite/`
1. Go, go, go!

