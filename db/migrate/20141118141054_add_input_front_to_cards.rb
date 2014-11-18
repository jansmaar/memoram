class AddInputFrontToCards < ActiveRecord::Migration
  def change
    add_column :cards, :input_front, :text
  end
end
