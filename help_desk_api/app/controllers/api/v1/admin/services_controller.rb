class Api::V1::Admin::ServicesController < Api::V1::Admin::AdminController
	def index
		services = Service.all.page(params[:page])
		paginate json: services
	end

	def create
		respond_with :api, :v1, :admin, Service.create(service_params)
	end

	def destroy
		respond_with Service.destroy(params[:id])
	end

	def update
		service = Service.find(params["id"])
		service.update_attributes(service_params)
		respond_with service, json: service
	end

	private
	def service_params
		params.require(:service).permit(:name, :description)
	end
end