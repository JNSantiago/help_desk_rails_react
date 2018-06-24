class PublicComment < ApplicationRecord
  belongs_to :user
  belongs_to :ticket
end
