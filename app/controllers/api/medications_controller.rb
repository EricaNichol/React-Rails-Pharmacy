module Api
  class MedicationsController < ApplicationController

    # #
    # def import
    #   Medication.import(params[:file])
    #   redirect_to root_url, notice: "We did it"
    # end


    def index
      @medication = Medication.all
      # pretty generate json , but it's in an object,
      # so first make it to json and parse
      render json: JSON.pretty_generate( JSON.parse(@medication.to_json) )
    end



    def create

    end

  end
end
