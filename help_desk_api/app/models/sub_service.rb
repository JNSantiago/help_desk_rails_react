class SubService < ApplicationRecord
  belongs_to :service
  has_many :tickets
end
