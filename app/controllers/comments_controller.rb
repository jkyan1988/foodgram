class CommentsController < ApplicationController
    skip_before_action :authorize, only: [:index, :show ]
    before_action :find_comment, only: [ :show, :update, :destroy ]

    def index
        render json: Comment.all.order("created_at DESC")
    end

    def create
        
        comment = @current_user.comments.create!(comment_params)
        render json: comment, status: :created
    end

    def show
        render json: @comment, serializer: CommentWithUserSerializer
    end

    def update
        @comment.update(comment_params)
        render json: @comment, status: :accepted
    end

    def destroy
        @current_user.comments.destroy(find_comment)
        head :no_content
    end

    private

    def comment_params
        params.permit(:comment, :user_id, :post_id, :id)
    end

    def find_comment
        @comment = Comment.find(params[:id])
    end
end
