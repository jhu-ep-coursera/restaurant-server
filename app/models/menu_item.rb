class MenuItem < ApplicationRecord
 	belongs_to :category, optional: true
end
