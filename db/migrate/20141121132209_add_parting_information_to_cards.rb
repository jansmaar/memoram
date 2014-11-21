class AddPartingInformationToCards < ActiveRecord::Migration
  def change
    add_column :cards, :parting_information, :text
  end
end
