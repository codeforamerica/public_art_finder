begin
  require 'foursquare2'
  require 'json'
  require 'curb'
rescue LoadError
  require 'rubygems'
  retry
end

oauth_key = ENV['FSQ_CLIENT_ID']
oauth_secret = ENV['FSQ_CLIENT_SECRET']
token = ENV['FSQ_TOKEN']

couchview = 'http://127.0.0.1:5984/public_art_phl2/_design/phl2/_view/foursquare'
couchresults = 'http://admin:admin@127.0.0.1:5984/public_art_phl_4sq/'

puts token
# Create the client
client = Foursquare2::Client.new({:oauth_token => token})

# get the list of pieces
the_couch = Curl::Easy.http_get(couchview)
resp = JSON.parse(the_couch.body_str)

# Format the results
rows = resp['rows']
allart = rows.map {|art| art['value'] }

# Cycle through
allart.each do |teh_artz|
  begin
    # Add the venue
    response = client.add_venue(teh_artz)
    puts "This worked"
    puts teh_artz
    puts '===================='
    # Save the response to our couch
    more_couch = Curl::Easy.http_put(couchresults+'/'+response['id'], JSON.generate(response));
    puts JSON.parse(more_couch.body_str)
  rescue
    puts "This didn't work"
    puts teh_artz
    puts '===================='
  end
end

