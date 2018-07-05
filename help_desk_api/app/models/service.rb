class Service < ApplicationRecord
	has_many :tickets
	has_many :sub_services
end
