class Log < ApplicationRecord
  belongs_to :user
  belongs_to :action

  validates :date, presence: true
end
