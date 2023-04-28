Rails.application.routes.draw do
  # resources :recipe_categories
  resources :users, only: [:index, :show]
  resources :recipes
  resources :categories, only: [:create, :index, :show]
  get "/user", to: "users#show"
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
end
