function(doc, req) {
  return ((doc.type && doc.type === "artwork") || doc._id.indexOf('_design') > -1);
}