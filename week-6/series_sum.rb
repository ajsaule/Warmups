def series_sum max 
    base_num = 1
    denominator = 4 
    increment = 3 
    max.times do 
        if max == 0
            0
        else if max == 1
            base_num += 1 / denominator
        else 
            base_num += 1 / denominator += increment
        end 
    end 
    p base_num
end 

series_sum 0
series_sum 1
series_sum 2
series_sum 5