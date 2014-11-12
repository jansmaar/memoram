class CreateCards < ActiveRecord::Migration
  def change
    create_table :cards do |t|
      t.string :first_name
      t.string :last_name
      t.date :birthday
      t.date :deceasedon
      t.string :announcement
      t.text :poem
      t.string :province
      t.string :birthplace
      t.string :lastresidence
      t.text :signed
      t.string :funeral
      t.string :visitaddress
      t.string :correspondence

      t.timestamps
    end
  end
end
