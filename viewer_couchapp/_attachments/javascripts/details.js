(function(m){
  m.Details = function(options) {
    var _options = $.extend({
      detailTarget: '.detail-container',
      detailHeader: '.detail-header'
    }, options),
    _id;

    function _refreshDetail(id) {
        var $container = $('div[data-url*="details.html?id='+id+'"]'),
            $detailTarget = $(_options.detailTarget, $container).html('Loading...');
        
        $.ajax({
            url: '/assetid?key="'+id+'"',
            crossDomain: true,
            dataType: 'jsonp',
            success: function (mural, textStatus, jqXHR) {            
                // Structure the data a bit
                setImages(mural);

                // Set the page title
                $(_options.detailHeader, $container).html(mural.title);
                
                var detailsHtml = imageHtml = '';
                detailsHtml += '<div class="details_title">'+mural.title+'</div>';

                if(mural.imgs.length > 0) {
                    detailsHtml += (mural.imgs[0] != "images/noimage.png") ? '<img src="'+mural.imgs[0]+'" />' : '';
                    if(mural.imgs.length > 1) {
                        for(var i=1; i < mural.imgs.length; i++) {
                            imageHtml += '<img src="'+mural.imgs[i]+'" />';
                        }
                    }
                }
                detailsHtml += '<ul>';
                // Dump everything else onto the page
                detailsHtml += '<li>A piece by '+mural.artist+'</li>';
                detailsHtml += '<li><strong>Description</strong> '+mural.description+'</li>';
                $.each(mural, function(i, n) {
                    var hideFields = config.hide_fields || ['_id','_rev','_attachments','geometry','title','id','imgs','doc_type','image_urls','artist','description','thumb'];
                    if(n != '' && hideFields.indexOf(i) === -1) {
                        detailsHtml += '<li><strong>'+i.replace('_',' ')+'</strong>'+n+'</li>';
                    }
                });
                detailsHtml += '<ul>';
                detailsHtml += imageHtml;
                detailsHtml = '<div class="details_wrapper">'+detailsHtml+'</div>';
                $detailTarget.html(detailsHtml);
                //$detailTarget.html($('description', $detail).text());
                
            },
            error: function(xhr, status, error) {
                console.log('server-side failure with status code ' + status);
            }
        });
    };
    
    //http://stackoverflow.com/questions/901115/get-querystring-values-in-javascript
    function _getParameterByName( name )
    {
      name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
      var regexS = "[\\?&]"+name+"=([^&#]*)";
      var regex = new RegExp( regexS );
      var results = regex.exec( window.location.href );
      if( results == null )
        return "";
      else
        return decodeURIComponent(results[1].replace(/\+/g, " "));
    }
    
    //http://stackoverflow.com/questions/27928/how-do-i-calculate-distance-between-two-latitude-longitude-points
    function _calcDistance(point1, point2) {
        var R = 6371; // Radius of the earth in km
        var dLat = (point2[0]-point1[0]).toRad();  // Javascript functions in radians
        var dLon = (point2[1]-point1[1]).toRad(); 
        var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
                Math.cos(point1[0].toRad()) * Math.cos(point2[0].toRad()) * 
                Math.sin(dLon/2) * Math.sin(dLon/2); 
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
        var d = R * c; // Distance in km
        
        return d;
    }
    
    
    //Init the app
    (function init() {
       //Get the id from the url
       _id = _getParameterByName('id');
       _refreshDetail(_id);
    })();
  };
})(Mural);

//Go go go go go!!
$('.detail-page').live('pageshow',function(event){
    Mural.Details();
});