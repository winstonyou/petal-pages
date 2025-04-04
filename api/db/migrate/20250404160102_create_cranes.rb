class CreateCranes < ActiveRecord::Migration[8.0]
  def change
    create_table :cranes do |t|
      t.integer :rating
      t.text :rose
      t.text :thorn
      t.text :bud

      t.timestamps
    end
  end
end
