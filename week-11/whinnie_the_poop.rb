def openJarsOfHoney num_jars, num_visits
    jars_obj = {}
    # loop through create hash of jars
    num_jars.times do |key|
        jars_obj[key] = "closed"
    end
    # loop through hash toggle @ 1st run % 2, 2nd run % 3 
    num_visits.times do |i|
        i = i + 1
        jars_obj.each do |k, v| 
            if k % i == 0 && v == "open" 
                v == "closed"
            elsif k % i == 0 && v == "closed" 
                v == "open"
            end 
        end
    end
    # count through all the open jars
    all_open_arr = []
    jars_obj.each do |k, v|
        if v == "open"
            all_open_arr.push k
        end
    end
    all_open_arr
end

p openJarsOfHoney 100, 100