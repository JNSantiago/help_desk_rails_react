Rails.application.routes.draw do
	namespace :api, defaults: { format: :json } do
		namespace :v1 do
			mount_devise_token_auth_for 'User', at: 'auth'
			namespace :admin do
				resources :tickets, only: [:index, :create, :destroy, :update]
				resources :services, only: [:index, :create, :destroy, :update]
				resources :sub_services, only: [:index, :create, :destroy, :update]
				resources :organizations, only: [:index, :create, :destroy, :update]
			end
		end
	end
end
