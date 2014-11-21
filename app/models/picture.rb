# == Schema Information
#
# Table name: pictures
#
#  id                 :integer          not null, primary key
#  created_at         :datetime
#  updated_at         :datetime
#  image_file_name    :string(255)
#  image_content_type :string(255)
#  image_file_size    :integer
#  image_updated_at   :datetime
#  card_id            :integer
#

class Picture < ActiveRecord::Base
	belongs_to :card

	has_attached_file :image, :styles => { :medium => "300x300>", :thumb => "100x100>" },
	 :path => ":rails_root/public/system/:attachment/:id/:style/:filename",
      :url => "/system/:attachment/:id/:style/:filename"

    validates_attachment_content_type :image, :content_type => ["image/jpg", "image/jpeg", "image/png", "image/gif"]
end
