class Api::ListsController < ApplicationController
  before_action :require_login, only: [:create, :update, :destroy]


  def create
    @list = List.new(list_params)
    @list.board_id = params[:board_id]
    @list.creator_id = current_user.id
    if @list.save
      render json: @list
    else
      render @list.errors.full_messages, status: 422
    end
  end

  def update
    @list = List.find(params[:id])
    if @list.update(list_params)
      render json: @list
    else
      render @list.errors.full_messages, status: 422
    end
  end

  def destroy
    @list = List.find(params[:id])
    @list.destroy
    @board = Board.find(current_board_id)
    # render '/api/boards/show'
  end

  def list_params
    params.require(:list).permit(:title)
  end

  def current_board_id
    params[:board_id]
  end
end
