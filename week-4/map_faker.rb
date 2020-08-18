# Time to fool some archaeologists
# You are a villain trying to trap an adventuring archaeologist. Write a function 'make_fake_map' that takes two numbers as arguments and returns an array of arrays to represent a map. 
# It should be filled with the 'A' character, except for one, which should be an uppercase X(as below). The position of X should be determined randomly.

# fake_map_arr = [
#     ["A", "A", "A", "A", "A"],
#     ["A", "A", "A", "A", "A"],
#     ["A", "A", "A", "A", "A"],
#     ["A", "A", "A", "A", "A"],
#     ["A", "A", "A", "A", "A"]
# ]

generated_map = []

def make_fake_map columns, rows
    # how to generate 5x5 array 
    row = []
    rows.times do 
    # but this won't work for each array
        columns.times do 
            # create empty arrays in existing array
            row << "A"
        end 
    generated_map << row
    end 
    generated_map[rand(num1)][rand(num2)] = "X"
    generated_map
end 

puts make_fake_map