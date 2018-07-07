class Api::V1::Admin::TicketsController < Api::V1::Admin::AdminController
	def index	
		respond_with Ticket.all
	end

	def create
		respond_with :api, :v1, Ticket.create(ticket_params)
	end

	def destroy
		respond_with Ticket.destroy(params[:id])
	end

	def update
		ticket = Ticket.find(params["id"])
		ticket.update_attributes(ticket_params)
		respond_with ticket, json: ticket
	end

	private
	def ticket_params
		params.require(:ticket).permit(
			:title, :description, :code, :close_date, :caller, :agent, 
			:service_id, :sub_service_id, :organization_id, :status
		)
	end
end