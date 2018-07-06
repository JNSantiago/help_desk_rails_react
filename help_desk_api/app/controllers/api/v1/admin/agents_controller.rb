class Api::V1::Admin::AgentsController < Api::V1::Admin::AdminController
	def index
		respond_with User.all
	end
end