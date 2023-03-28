Rails.application.routes.draw do
  # resources :recipe_categories
  resources :categories, only: [:index]
  resources :recipes, only: [:create, :update, :destroy, :index]
  resources :users, only: [:create, :show]
  post "/login", to: "session#create"
  delete "/logout", to: "session#destroy"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
