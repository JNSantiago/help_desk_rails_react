class Api::V1::Admin::AgentsController < Api::V1::Admin::AdminController
	def index
		paginate json: User.all.page(params[:page])
	end
end