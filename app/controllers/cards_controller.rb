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
		@cards = Card.new(card_params)
	  @cards.save
	  redirect_to action: "index"
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
  	params.require(:card).permit(:first_name, :last_name, :birthday, :deceasedon, :announcement, :poem, :province, :birthplace, :lastresidence, :signed, :funeral, :visitaddress, :correspondence, :picture)
  end

end
