# == Schema Information
#
# Table name: cards
#
#  id                  :integer          not null, primary key
#  birthday            :date
#  deceasedon          :date
#  poem                :text
#  province            :string(255)
#  birthplace          :string(255)
#  lastresidence       :string(255)
#  signed              :text
#  created_at          :datetime
#  updated_at          :datetime
#  input_front         :text
#  name                :string(255)
#  parting_information :text
#

class Card < ActiveRecord::Base
	has_many :pictures, :dependent => :destroy
end
