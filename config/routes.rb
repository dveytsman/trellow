Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :list_items, only: [:destroy]
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :boards, only: [:create, :index, :show, :update, :destroy] do
      resources :lists, only: [:create, :update, :destroy] do
        resources :list_items, only: [:create, :update]
      end
    end
  end
 root "static_pages#root"
end
