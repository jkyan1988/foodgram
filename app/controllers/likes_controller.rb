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
        # binding.pry
        like = @current_user.likes.create!(like_params)
        render json: like, status: :created
    end

    def destroy
        binding.pry
        @current_user.likes.destroy(find_like)
        head :no_content
    end

    private

    def like_params
        params.permit(:post_id, :id, :user_id, :like)
    end

    def find_like
        @like = Like.find(params[:id])
    end

end
