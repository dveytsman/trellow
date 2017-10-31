class Api::BoardsController < ApplicationController
  before_action :require_login

  def index
    @boards = current_user.boards
    render :index
  end

  def create
    @board = Board.new(board_params)
    @board.creator_id = current_user.id
    if @board.save
      render :show
    else
      render json: @board.errors.full_messages, status: 422
    end
  end

  def show
    @board = Board.find(params[:id])
    render :show
  end

  def board_params
    params.require(:board).permit(:creator_id, :title)
  end
end
