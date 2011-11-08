require 'rubygems'
require 'foursquare'

oauth_key = ENV['FSQ_CLIENT_ID']
oauth_secret = ENV['FSQ_CLIENT_SECRET']

oauth = Foursquare::OAuth.new(oauth_key, oauth_secret)

request_token = oauth.request_token.token
request_secret = oauth.request_token.secret

# redirecting user to foursquare to authorize
oauth.request_token.authorize_url
# 
# # foursquare redirects back to your callback url, passing the verifier in the url params
# 
# access_token, access_secret = oauth.authorize_from_request(request_token, request_secret, verifier)
# 
# # save the user's access token and secret
# 
# 
# oauth = Foursquare::OAuth.new(oauth_key, oauth_secret)
# oauth.authorize_from_access(access_token, access_secret)
# foursquare = Foursquare::Base.new(oauth)
# 
# foursquare.test
# 
# foursquare.venues :geolat => geolat, :geolong => geolong, :limit => 10, :q => 'pizza'
# foursquare.tips :geolat => geolat, :geolong => geolong, :limit => 10
# foursquare.checkins :geolat => geolat, :geolong => geolong
# 
# checkin = {
#   :vid => vid,
#   :shout => "this is what i'm up to",
#   :venue => "Cohabitat",
#   :private => 0,
#   :twitter => 0,
#   :geolat => geolat,
#   :geolong => geolong
# }
