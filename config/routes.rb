Rails.application.routes.draw do
    root to: 'static_pages#root'
    
    resource :session
    resources :users
    
     namespace :api, defaults: { format: :json } do
       resources :businesses, except: [:new, :edit]
       resources :categories, except: [:new, :edit]
       resources :reviews
     end

end
