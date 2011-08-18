function(newDoc, oldDoc, userCtx) {
    
    function require(beTrue, message) {
        if(!beTrue) throw({forbidden : message});
    }
    
    function isGeojsonPoint(geometry) {
        var x = geometry;
        return (x && x.type == "Point" && x.coordinates && x.coordinates.length == 2);
    }
    
    if(newDoc.data_type == 'artwork') {
        require(newDoc.data_source, "Artwork needs a data source. (Where did it come from?)");
        require(isGeojsonPoint(newDoc.geometry), "Geometry needs to be a valid geojson point field.");
    } 
}