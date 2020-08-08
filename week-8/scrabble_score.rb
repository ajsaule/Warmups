word_1 = 'cabbage'
word_2 = 'cat'

class Scrabble 
    def initialize word  
        @word = word 
        @letter_scores = 
            {
                1 => ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
                2 => ['D', 'G'],
                3 => ['B', 'C', 'M', 'P'],
                4 => ['F', 'H', 'V', 'W', 'Y'],
                5 => ['K'],
                8 => ['J', 'K'],
                10 => ['Q', 'Z'],
            }
    end 

    def check_score 
        test_word = @word.upcase.split("")
        total_score = 0
        @letter_scores.each do |key_value, value|
            value.each do |scrabble_letter|
                test_word.each do |letter| 
                    if letter == scrabble_letter 
                        total_score += key_value
                    end
                end 
            end     
        end  
        total_score   
    end 
    
end 

p Scrabble.new(word_2).check_score

## there is probably a way to do this exercise with less loops