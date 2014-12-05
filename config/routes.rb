Rails.application.routes.draw do
    root to: 'static_pages#root'
    
    resource :session
    
    
     namespace :api do
       resources :users
       resources :photos
       resources :businesses, except: [:new, :edit]
       resources :categories, except: [:new, :edit]
       resources :neighborhoods, except: [:new, :edit]
       resources :reviews
     end

end
 