params = {
  username: 'chocolate',
  password: 'pudding',
  friends: ['vanilla', 'strawberry', 'caramel'],
  image_url: 'https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
  data_sent_time: Time.now
}

# Write the code to:

# print the username to the console.
p params[:username]
# print the last friend from friends.
p params[:friends][- 1]
# check if the password meets the requirements of at least 8 characters.
if params[:password].length >= 8 
    p "Password good length"
else 
    p "Password at least 8 characters please"
end
# add a key-value pair to params where key is the data_sent_time and the value is the current time.
params[:data_sent_time]
# Extension
# Write code to check that the image is from the unsplash website.
is_url_from_unsplash = params[:image_url].include?('images.unsplash.com')
p is_url_from_unsplash