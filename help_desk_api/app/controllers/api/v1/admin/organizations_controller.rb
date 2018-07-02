class Api::V1::Admin::OrganizationsController < Api::V1::Admin::AdminController
	def index
		respond_with Organization.all
	end

	def create
		respond_with :api, :v1, :admin, Organization.create(organization_params)
	end

	def destroy
		respond_with Organization.destroy(params[:id])
	end

	def update
		organization = Organization.find(params["id"])
		organization.update_attributes(organization_params)
		respond_with organization, json: organization
	end

	private
	def organization_params
		params.require(:organization).permit(:name, :status)
	end
end