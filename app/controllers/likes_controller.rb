class LikesController < ApplicationController
    skip_before_action :authorize, only: [:index, :show ]
    before_action :find_like, only: [ :show, :destroy]
    def index
        render json: Like.all
    end

    def show
        render json: @like, serializer: LikesSerializer
    end

    def create
        
        like = @current_user.likes.create!(like_params)
        render json: like, status: :created
    end

    def destroy
        @current_user.likes.destroy(find_like)
        head :no_content
    end

    private

    def like_params
        params.permit(:id, :user_id, :post_id)
    end

    def find_like
        @like = Like.find(params[:id])
    end

end
