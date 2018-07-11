class Service < ApplicationRecord
	paginates_per 5
	
	has_many :tickets
	has_many :sub_services
end
