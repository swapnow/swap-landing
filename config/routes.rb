Rails.application.routes.draw do
  root 'static_pages#index'

  namespace :api do
    defaults format: :json do
      resources :emails, only: [:create]
    end
  end
end
