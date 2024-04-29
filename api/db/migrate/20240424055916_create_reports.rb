class CreateReports < ActiveRecord::Migration[7.0]
  def change
    create_table :reports do |t|
      t.string :cultivar, null: false
      t.string :genus,null: false, default: 'uncertain'
      t.string :report_image
      t.text :description
      t.string :growing_season
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
