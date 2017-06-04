class Api::EmailsController < ApplicationController
  def create
    debugger
    email = params[:email]
    Email.create(email: email)
  end
end
