# It's approaching lunch hour… let's collect orders. Create a new file called lunch_orders.rb to complete this exercise.

counter = 1 
user_name = ""

# Create a program that collects lunch orders. Prompt:
# Name for order: (enter name)
def get_user_name 
    print "Name for order: "
    user_name = gets.chomp 
    get_user_order 
end 


def get_user_order
    loop do 
        print "#{user_name} wants to order: "
        all_orders["#{user_name}"][0] = gets.chomp 
        print "Add another item to the order (y/ n)"
        yes_no = gets.chomp
        if yes_no != "n"
            break
        end 
    end 
end 

get_user_name

all_orders =  [
   { user_name => [] }
]

puts "#{all_orders[:user_name]} wants to order #{all_orders[:user_name][:order1]}"
puts "#{all_orders[:user_name]} wants to order #{all_orders[:user_name][:order2]}"

# {name} wants to order: (enter item)
# Store the name/order data. When storing data, do it in such a way that additional order items may be added for the person's name.
# Example: Greg can order a Burger, and then add Fries to his order later.
# After storing data, prompt the user with:
# Add another item to the order? (y/n)
# Repeat steps 1 & 2 if the answer is "y"
# After the user completes adding orders, print out:
# "All orders: {order data}"
# Keep going...
# Rather than printing out a blob of raw lunch order data, print each name's orders on a separate line, formatted as one of the following:

# "Greg ordered a sandwich"
# "Peter ordered a burger & fries"
# "Travis ordered a salad, apple & water"
# You may have to do some hunting in Ruby docs!