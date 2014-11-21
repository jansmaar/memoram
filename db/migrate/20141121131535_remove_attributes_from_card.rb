class RemoveAttributesFromCard < ActiveRecord::Migration
  def change
    remove_column :cards, :announcement, :string
    remove_column :cards, :last_name, :string
    remove_column :cards, :first_name, :string
  end
end
