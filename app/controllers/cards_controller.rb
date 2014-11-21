class CardsController < ApplicationController

	def index
	  @cards = Card.all
	end
	
	def show
    @card = Card.find(params[:id])
	end
	
	def new
		@cards = Card.new
        
		
	end
	
	def edit
		@card = Card.find(params[:id])
	end
	
	def create
	  @card = Card.new(card_params)
	  if @card.save 
	  	redirect_to action: "index"
	  	if params[:images]
        #===== The magic is here ;)
	        params[:images].each { |image|
	          @card.pictures.create(image: image)
	        }
      		end
  		end
	  
  end
	
	def update
		@card = Card.find(params[:id])
		@card.update_attributes(card_params)
    redirect_to cards_path	
	end
	
	def destroy
 		@card = Card.find(params[:id])
    @card.destroy
    redirect_to cards_path
	end
	
	private
  def card_params
  	params.require(:card).permit(:name, :birthday, :deceasedon, :poem, :province, :birthplace, :lastresidence, :signed, :picture, :input_front, :parting_information)
  end

end
