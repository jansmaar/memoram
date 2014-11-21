class AddFieldsToPIcture < ActiveRecord::Migration
  def change
    add_column :pictures, :card_id, :integer
  end
end
