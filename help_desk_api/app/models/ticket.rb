class Ticket < ApplicationRecord
  belongs_to :ticket_status
  belongs_to :service
  belongs_to :sub_service
  belongs_to :organization
  has_many :attatchments
end
