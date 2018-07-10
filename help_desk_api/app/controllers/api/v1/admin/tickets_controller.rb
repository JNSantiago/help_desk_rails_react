class Api::V1::Admin::TicketsController < Api::V1::Admin::AdminController
	def index
		tickets = Ticket.all
		render json: tickets.map {|ticket| ticket.attributes.merge({ status: ticket.ticket_status.description, caller_name: User.find(ticket.caller).email, agent_name: User.find(ticket.agent).email }) }
		#respond_with Ticket.all, include: services
	end

	def create
		respond_with :api, :v1, :admin, Ticket.create(ticket_params)
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
			:service_id, :sub_service_id, :organization_id, :status, :ticket_status_id
		)
	end
end