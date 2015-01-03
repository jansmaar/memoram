class CardsController < ApplicationController

	def index
	@q = Card.search(params[:q])
	@cards = @q.result(distinct: true).paginate(:page => params[:page], :per_page => 7)
	#@cards = Card.all
	end
	
	def show
    @card = Card.find(params[:id])
       respond_to do |format|
      format.html
      format.pdf do
        render :pdf => "#{@card.name}",
        	:template => 'cards/pdf.html.slim',
        	:page_size => "A4",
        	:disposition => 'attachment',
        	:no_background => true,
        	:orientation => 'Landscape'
    	end
		end
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

	def startpage
		@q = Card.search(params[:q])
		@cards = @q.result(distinct: true).paginate(:page => params[:page], :per_page => 7)
	end

	def assortment

	end
	
	private
  def card_params
  	params.require(:card).permit(:name, :birthday, :deceasedon, :poem, :province, :birthplace, :lastresidence, :signed, :picture, :input_front, :parting_information, :first_name,
																	:last_name, :street_name, :house_number, :addition, :zip_code, :address, :email, :phone_number, :shipping_date, :quantity, :country)
  end

end
