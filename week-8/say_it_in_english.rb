class Say
    def initialize number 
        @number = number 
        @zero_to_nineteen = 
            {   
                0 => "zero",
                1 => "one",
                2 => "two",
                3 => "three",
                4 => "four",
                5 => "five",
                6 => "six",
                7 => "seven",
                8 => "eight",
                9 => "nine",
                10 => "ten",
                11 => "eleven",
                12 => "twelve",
                13 => "thirteen",
                14 => "fourteen",
                15 => "fifteen",
                16 => "sixteen",
                17 => "seventeen",
                18 => "eighteen",
                19 => "nineteen",
            }
            
        @twenty_to_ninety =
            {
                2 => "twenty",
                3 => "thirty",
                4 => "forty",
                5 => "fifty",
                6 => "sixty",
                7 => "seventy",
                8 => "eighty",
                9 => "ninety"
            }
    end

    def in_english 
        if @number >= 0 && @number <= 20
            @zero_to_nineteen[@number]
        elsif @number >= 21 && @number <= 99
            digits = @number.to_s.split("")
            tens = @twenty_to_ninety[digits[0].to_i]
            ones = @zero_to_nineteen[digits[1].to_i]
            "#{tens}-#{ones}"
        else
            'Number must be between 0 and 99 inclusive'
        end 
    end 

end 

puts Say.new(105).in_english
