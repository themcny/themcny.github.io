require_relative "hangman"
#require_relative "dictionary"

dictionary = []

File.readlines('dictionary.txt').each do |word|
	dictionary << word.chomp
end

random_word = dictionary[rand(dictionary.length-1)]

game = Hangman.new(random_word)
game.lose?
game.win?

while !game.lose? && !game.win?
	p "Guess a letter:"
	p game.guess
	p game.update
end

#loop through while lose? and win? return false