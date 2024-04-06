class Api::V1::LogsController < ApplicationController
  before_action :authenticate_api_v1_user! 

  def index
    logs = current_api_v1_user.logs.includes(:action).order(date: :desc)
    render json: logs.as_json(include: :action)
  end
  
  def create
    # actions テーブルに name を保存
    action = current_api_v1_user.actions.create!(log_params.slice(:name))
    # logs テーブルに date と note を保存
    log = action.logs.create!(log_params.slice(:date, :note).merge(user_id: current_api_v1_user.id))
    if log.persisted?
      render json: { status: 'success', log: log }, status: :created
    else
      render json: { status: 'error', errors: log.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def log_params
    params.require(:log).permit(:date, :note, :name)
  end
end
