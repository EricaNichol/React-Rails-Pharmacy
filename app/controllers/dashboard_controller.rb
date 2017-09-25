class DashboardController < ApplicationController
  def index
    @medication = Medication.all
    respond_to do |format|
      format.html
      format.json 
    end
  end

  def import
    begin
      Medication.import(params[:file])
      redirect_to root_url, notice: "Products imported."
    rescue
      redirect_to root_url, notice: "Invalid CSV file format."
    end
  end


end
