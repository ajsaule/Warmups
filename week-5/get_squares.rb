numArrOne = [4, 5, 6, 16, 15, 4]

def get_squares numArr
    arr = []
    numArr.each do |n|
        sqrt = Math.sqrt(n)
        if sqrt % 1 == 0 #sqrt.to_s =~ /\.0/
            arr.push(n)
        end 
    end 
    arr.sort.uniq
    # arr - no need for a return line
end 

puts get_squares numArrOne

# puts Math.sqrt(35)
