arr = [14, 5, 7, 2, 25, 10, 20, 40, -4, 3, 3, 25, 2, 6, 5]
evenArr = []

arr.each do |num|
    if num % 2 == 0 && num % 5 == 0 
        evenArr.push num
    end 
end 

p evenArr