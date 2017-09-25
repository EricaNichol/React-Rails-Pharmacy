class MoveColumnQtyToAfterPriceColumn < ActiveRecord::Migration[5.1]
  def up
    change_column :medications, :qty, :string, after: :price 
  end
end
