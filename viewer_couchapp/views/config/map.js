function(doc) {
  if(doc.doc_type && doc.doc_type === "config") {
    emit(doc._id, doc);
  }
}