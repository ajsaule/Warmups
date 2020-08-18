def switch_up string 
    mutated_string = ""
    string.split("").each do |letter|
        if letter == letter.downcase
            mutated_string += letter.upcase
        else 
            mutated_string += letter.downcase
        end
        # if letter == letter.downcase
        #     letter.upcase!
        # else 
        #     letter.downcase!
        # end
    end
    mutated_string
end
    
p switch_up("Hello hello hello")

def switch_up_v2 string 
    puts string.comp.swapcase
end 