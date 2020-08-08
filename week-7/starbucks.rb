require 'pry'

class Coffee
    def initialize name, order, size, sugar
        name[0] = "B"
        @name = name
        @order = order
        @size = size
        @sugar = sugar
    end 

    def to_s
        "#{@name}'s #{@order}, #{@size}, #{@sugar}"
    end
end 

donny = Coffee.new "Donny", "Long Black", "Large", 1

puts donny

binding.pry