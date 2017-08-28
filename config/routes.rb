Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :stories do 
      resources :comments, only: [:create]
    end 
    resources :comments, only: [:destroy, :update]
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]

    post "users/:id/follow", to: "users#follow"
    post "users/:id/unfollow", to: "users#unfollow"

    post "likes/:id", to: "stories#add_like"
    delete "likes/:id", to: "stories#remove_like"
  end
end
