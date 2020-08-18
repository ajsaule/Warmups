# First Ruby warmup

print "Ask Dan a question: "
dan_prompt = gets.chomp
puts "type q to quit

"

loop do 
    if dan_prompt.end_with? "?"
        puts "Sure"
    elsif dan_prompt == text.match(/[A-Z]/)
        puts "Whoaa, chill out!"
    elsif dan_prompt == text.match(/[A-Za-z]/)
        puts "Whatever"
    elsif dan_prompt == ""
        puts "Fine, be that way"
    elsif dan_prompt == "q"
        puts "Cya later"
        break 
    end
    print "Ask Dan a question: "
    dan_prompt = gets.chomp
end      