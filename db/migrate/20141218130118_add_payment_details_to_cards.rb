class AddPaymentDetailsToCards < ActiveRecord::Migration
  def change
    add_column :cards, :first_name, :string
    add_column :cards, :last_name, :string
    add_column :cards, :street_name, :string
    add_column :cards, :house_number, :string
    add_column :cards, :addition, :string
    add_column :cards, :zip_code, :string
    add_column :cards, :address, :string
    add_column :cards, :email, :string
    add_column :cards, :phone_number, :string
    add_column :cards, :shipping_date, :date
    add_column :cards, :quantity, :string
    add_column :cards, :country, :string
  end
end
