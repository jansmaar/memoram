class RemoveFieldsFromCard < ActiveRecord::Migration
  def change
    remove_column :cards, :picture_file_name, :string
    remove_column :cards, :picture_content_type, :string
    remove_column :cards, :picture_file_size, :string
    remove_column :cards, :picture_updated_at, :string
  end
end
