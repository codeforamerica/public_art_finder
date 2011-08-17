function(doc) { 
    if(doc.source =='San Francisco Arts Commission') emit(doc.accession_id, doc); 
}