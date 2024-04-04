class Action < ApplicationRecord
  belongs_to :user
  has_many :logs

  validates :name, presence: true
end
