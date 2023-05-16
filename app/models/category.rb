class Category < ApplicationRecord
  has_many :menu_items, dependent: :destroy

  def to_param
  	short_name
  end
end
