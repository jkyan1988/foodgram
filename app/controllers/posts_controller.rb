class PostsController < ApplicationController
    skip_before_action :authorize, only: :index
    before_action :find_post, only: [ :show, :update, :destroy]
    def index
        render json: Post.all
    end

    def create
        post = @current_user.posts.create!(post_params)
        render json: post, status: :created
    end

    def show
        render json: @post
    end

    def update
        @post.update(post_params)
        render json: @post, status: :accepted
    end

    def destroy_all
        @current_user.posts.destroy(find_post)
        head :no_content
    end

    private

    def post_params
        params.permit(:post, :description)
    end

    def find_post
        @post = Post.find(params[:id])
    end
end
