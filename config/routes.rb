Rails.application.routes.draw do
  # resources :recipe_categories
  resources :categories, only: [:index]
  resources :recipe_categories
  # resources :recipes, only: [:create, :update, :destroy, :index, :show]
  resources :recipes
  resources :users, only: [:index, :show]
  get "/user", to: "users#show"
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
