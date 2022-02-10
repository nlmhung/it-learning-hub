Rails.application.routes.draw do
  root to: 'page/home#index'
  devise_for :students, controllers: {
    sessions: 'students/sessions',
    registrations: 'students/registrations',
    passwords: 'students/passwords',
  }
  devise_for :admins, controllers: {
    sessions: 'admins/sessions',
    registrations: 'admins/registrations',
    passwords: 'admins/passwords',
  }
  
  get "/dashboard", to: "dashboard#index"
  
  scope module: 'pages' do   
  end

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
