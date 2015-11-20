class Hangman
	def initialize(answer)
		@answer = answer
		@answer_letters = @answer.split('')
		@count = 0
		@blanks_array = Array.new(@answer_letters.length, "_")
	end

	def guess
		# puts "Guess a letter:"
		@letter = gets.chomp
		#Raise an Error if they input anything other than a leter
	end

	def include?
		if @answer_letters.include?(@letter)
			return true
		else
			return false
		end
	end

	def match_locations
		match_index = []
		@answer_letters.each_with_index do |char, index|
			if char == @letter
				match_index << index
			end
		end
		return match_index
	end

	def blanks
		@blanks_array
	end

	def wrong_guesses
		@count += 1
	end

	def stick_fig
		stick_head = "O"
		stick_arm_l = "\\"
		stick_arm_r = "/"
		stick_body = "| \n |"
		stick_leg_l = "/"
		stick_leg_r = "\\" 
	end

	def lose?
		if @count > 10
			puts "You have lost Hangman!"
			puts "The correct word was #{@answer}"
			return true
		end
		false
	end

	def win?
		if !@blanks_array.include?("_")
			puts "You Win!"
			return true
		end
		false
	end

	def good_guess
		blanks
		let = match_locations
		let.each do |x|
			@blanks_array[x] = @letter
		end
	end

	def update
		if include?
			good_guess
		else
			wrong_guesses
		end
		lose?
		win?
		@blanks_array.join(' ')
	end

end