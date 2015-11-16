require_relative 'hangman'
require_relative 'dictionary'

File.readlines('dictionary.txt').each do |word|
	dictionary << word.chomp
end

random_word = dictionary[rand(dictionary.length-1)]

