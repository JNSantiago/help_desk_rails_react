class Api::V1::Admin::SubServicesController < Api::V1::Admin::AdminController
	def index
		subservices = SubService.all
		respond_with subservices.map{ |sub| sub.attributes.merge(service_name: sub.service.name) }
	end

	def create
		respond_with :api, :v1, :admin, SubService.create(sub_service_params)
	end

	def destroy
		respond_with SubService.destroy(params[:id])
	end

	def update
		sub_service_params = SubService.find(params["id"])
		sub_service_params.update_attributes(sub_service_params)
		respond_with sub_service_params, json: sub_service_params
	end

	private
	def sub_service_params
		params.require(:sub_service).permit(:name, :description, :service_id, :status)
	end
end