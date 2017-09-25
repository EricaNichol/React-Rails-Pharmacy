class Medication < ApplicationRecord
  require 'csv'

  def self.import(file)
    #a class method import,
    #with file passed through as argument
    #loop
    CSV.foreach(file.path, headers: true) do |row|

      Medication.create! row.to_hash
      
    end
  end

end
