function(head, req) {
  var manifest = "";
  var i = 0;
  var the_files = [
    'stylesheets/images/ajax-loader.png',
    'stylesheets/jquery.mobile-1.0a4.1.min.css',
    'images/mural-dialogue-box.png',
    'images/mural-icon-pin-32.png',
    'images/mosaic_header.png',
    'images/mosaic-marker.png',
    'images/location-icon-pin-32.png',
    'images/noimage.png',
    'javascripts/jquery.mobile-1.0a4.1.min.js',
    'javascripts/infobox_packed.js',
    'javascripts/jquery-1.5.2.min.js',
  ];
  for (; i < the_files.length; i += 1) {
    manifest += ("/" + the_files[i] + "\n");
  }
  return { 
    "headers": { "Content-Type": "text/cache-manifest"}, 
    "body": "CACHE MANIFEST\n" + manifest +"NETWORK:\n*"
  };
}