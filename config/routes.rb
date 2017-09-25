Rails.application.routes.draw do


  root 'dashboard#index'

  namespace :api do
    resources :medications
  end

  get '/upload' => "upload#index"
  post '/upload/import' => 'upload#import'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
