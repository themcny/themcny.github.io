
class Food
	def edible
		puts "Yes, it is edible."
	end
end

class Meat < Food
	def protein
		puts "Yes, it is protein from an animal."
	end
end

steak = Meat.new
steak.edible
steak.protein

########################################################

class Food
	def edible
		puts "Yes, it is edible."
	end

	def willeat?
		true
	end
end

class RottenApple < Food
	def edible
		puts "No. No longer edible."
	end
end

apple = RottenApple.new
apple.edible

#########################################################

class Food
	def initialize(type)
		@type = type
	end

	def edible?
		edible = true
	end
end

class Fruit < Food
	def intialize(type)
		super(type)
	end
	def type
		puts "#{@type}"
	end
end


orange = Fruit.new('orange')
orange.type