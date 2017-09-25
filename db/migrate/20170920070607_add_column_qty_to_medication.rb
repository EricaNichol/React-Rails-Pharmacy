class AddColumnQtyToMedication < ActiveRecord::Migration[5.1]
  def change
    add_column :medications, :qty, :string
  end
end
