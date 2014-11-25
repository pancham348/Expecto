Rails.application.routes.draw do
    root to: 'static_pages#root'
    
    resource :session
    resources :users

end
