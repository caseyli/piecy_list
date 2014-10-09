class CarsController < ApplicationController
  def index
    respond_to do |format|
      
      format.html {
        if params[:max]
          @cars_count = params[:max]
        else
          @cars_count = Car.count
        end
      }      
      
      format.json { 
        @cars = Car.limit(params[:limit]).offset(params[:offset])
        render :json => @cars.to_json
      }
    end
  end
end
