class UsersController < ApplicationController

  def edit
  end

  private

  def user_params
    params.require(:user).permit(:name, :email)
  end
  
end
