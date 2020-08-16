# # The Board
# ​
# Write a program that creates a string that represents a grid, using new-line characters to separate lines. 
# At each position of the grid there is either a space or a “#” character. The characters should form a chess board.
# Printing this string should show something like this:
# ​
# ```
# # # # # # # # #
#  # # # # # # # #
# # # # # # # # #
#  # # # # # # # #
# # # # # # # # #
#  # # # # # # # #
# # # # # # # # #
#  # # # # # # # # 
# ```

# loop # space # concatenation # 

def the_board repeats
    (repeats/2).times do 
        puts "# " * repeats 
        puts " #" * repeats
    end 
end 
       
the_board 8