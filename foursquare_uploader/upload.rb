begin
  require 'sinatra'
  require 'omniauth'
  require 'omniauth-foursquare'
  require 'foursquare2'
  require 'json'
  require 'curb'
rescue LoadError
  require 'rubygems'
  retry
end

use Rack::Session::Cookie
use OmniAuth::Builder do
 provider :foursquare, ENV['FSQ_CLIENT_ID'], ENV['FSQ_CLIENT_SECRET']
end

set :port, 3000
enable :sessions
oauth_key = ENV['FSQ_CLIENT_ID']
oauth_secret = ENV['FSQ_CLIENT_SECRET']
couchview = 'http://127.0.0.1:5984/public_art_sf/_design/process/_view/foursquare'

get '/' do
  <<-HTML
    <a href='/auth/foursquare'>Sign in to foursquare</a>
  HTML
end

get '/auth/:name/callback' do
  auth = request.env['omniauth.auth']

  token = auth[:credentials][:token]
  puts token
  # Create the client
  client = Foursquare2::Client.new({:oauth_token => token})

  # get the list of pieces
  the_couch = Curl::Easy.http_get(couchview)

  resp = JSON.parse(the_couch.body_str)
  rows = resp['rows']
  allart = rows.map {|art| art['value'] }
  puts allart[0]
  client.add_venue(allart[0])

  # allart.each { |piece| puts piece }
  # Hit the API with whatever we want

end