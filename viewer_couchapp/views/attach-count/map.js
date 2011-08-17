function(doc) {
    if(doc.source =='San Francisco Arts Commission') {
        if(doc._attachments) emit(null, Object.keys(Object(doc._attachments)).length);
    }
}