class Api::EmailsController < ApplicationController
  def create
    email = params[:email]
    Email.create(email: email)
  end
end
