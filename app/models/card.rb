# == Schema Information
#
# Table name: cards
#
#  id            :integer          not null, primary key
#  first_name    :string(255)
#  last_name     :string(255)
#  birthday      :date
#  deceasedon    :date
#  announcement  :string(255)
#  poem          :text
#  province      :string(255)
#  birthplace    :string(255)
#  lastresidence :string(255)
#  signed        :text
#  created_at    :datetime
#  updated_at    :datetime
#  input_front   :text
#

class Card < ActiveRecord::Base
	has_many :pictures, :dependent => :destroy
end
