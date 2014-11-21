class RemoveFieldFromCard < ActiveRecord::Migration
  def change
    remove_column :cards, :correspondence, :string
    remove_column :cards, :visitaddress, :string
    remove_column :cards, :funeral, :string
  end
end
