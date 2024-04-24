class LogsController < ApplicationController
  before_action :authenticate_user! 

  def index
    year = params[:year]
    month = params[:month]
    
    if year && month
      start_date = Date.new(year.to_i, month.to_i, 1)
      end_date = start_date.end_of_month
      logs = current_user.logs.where(date: start_date..end_date)
    else
      logs = current_user.logs
    end
    
    logs = logs.includes(:action).order(date: :desc)
    Rails.logger.debug "Sending logs to front-end: #{logs.as_json(include: :action)}"
    render json: logs.as_json(include: :action)
  end
  
  def create
    # actions テーブルに name を保存
    action = current_user.actions.create!(log_params.slice(:name))
    # logs テーブルに date と note を保存
    log = action.logs.create!(log_params.slice(:date, :note).merge(user_id: current_user.id))
    if log.persisted?
      render json: { status: 'success', log: log }, status: :created
    else
      render json: { status: 'error', errors: log.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    log.destroy!

  end

  private

  def log_params
    params.require(:log).permit(:date, :note, :name, :year, :month)
  end
end
