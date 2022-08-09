class CommentsController < ApplicationController
    before_action :find_comment, only: [ :show, :update, :destroy ]

    def index
        render json: Comment.all
    end

    def create
        comment = @current_user.comments.create!(comment_params)
        render json: comment, status: :created
    end

    def show
        render json: @comment
    end

    def update
        @comment.update(comment_params)
        render json: @comment, status: :accepted
    end

    def destroy_all
        @current_user.comments.destroy(find_comment)
        head :no_content
    end

    private

    def comment_params
        params.permit(:comment, :description)
    end

    def find_comment
        @comment = Comment.find(params[:id])
    end
end
