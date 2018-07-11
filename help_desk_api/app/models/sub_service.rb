class SubService < ApplicationRecord
	paginates_per 5

  belongs_to :service
  has_many :tickets
end
