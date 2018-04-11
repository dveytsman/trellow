class Api::ListItemsController < ApplicationController
  before_action :require_login, only: [:create, :update, :destroy]

  def create
    @list_item = ListItem.new(list_item_params)
    @list_item.creator_id = current_user.id
    # @list_item.list_id = params[:list_id]
    if @list_item.save
      render json: @list_item
    else
      render @list_item.errors.full_messages,
      status: 422
    end
  end

  def update
    @list_item = ListItem.find(params[:id])
    if @list_item.update(list_item_params)
      render json: @list_item
    else
      render @list_items.errors.full_messages, status: 422
    end
  end

  def destroy
    @list_item = ListItem.find(params[:id])
    @list_item.destroy
  end

  def list_item_params
    params.require(:list_item).permit(:title, :body, :list_id)
  end

end
