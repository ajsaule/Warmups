require "pry"

# Alfred and Peter are best friends and Pokemon card traders. Each week they get together and decide to buy a new pack of Pokemon trading cards. Each pack has a total of 10 cards. Each card has the Pokemon's name and attack power.
# Alfred and Peter have not opened the pack yet, but it contains the following cards:

# 1. Put the above cards into an appropriate data structure (so that you can easily remove or change the order of cards if you needed to)

pokemon_cards = [
    {:Pikachu => 40},
    {:Rattata => 20},
    {:Pidgeot => 60},
    {:Alakazam => 80},
    {:Butterfree => 30},
    {:Gengar => 70},
    {:Moltres => 100},
    {:Vulpix => 40},
    {:Blastoise => 80},
    {:Hitmonchan => 50}
]

# 2. Firstly, keeping the cards faced down (so they cannot see), they reverse the order of the cards.
pokemon_cards.reverse!

# 3. They then split the cards into groups of 3, so they end up with 4 piles of cards (the first three with 3, and the last pile with just 1)

grouped_cards = pokemon_cards.each_slice(3).to_a # why do we need to do this 

# 4. Alfred takes the first and third piles of cards, and Peter takes the second and fourth piles. Create a new data structure for Alfred and Peter and pass them the cards.

Alfred = [grouped_cards[0] + grouped_cards[2]]

Peter = [grouped_cards[1] + grouped_cards[3]]

p Alfred
p Peter