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
#  first_name          :string(255)
#  last_name           :string(255)
#  street_name         :string(255)
#  house_number        :string(255)
#  addition            :string(255)
#  zip_code            :string(255)
#  address             :string(255)
#  email               :string(255)
#  phone_number        :string(255)
#  shipping_date       :date
#  quantity            :string(255)
#  country             :string(255)
#

class Card < ActiveRecord::Base
	has_many :pictures, :dependent => :destroy
	#validates :quantity, :format => { :with => /\A\d+(?:\.\d{0,2})?\z/ }, :numericality => {:greater_than => 10, :less_than => 1000}
end
