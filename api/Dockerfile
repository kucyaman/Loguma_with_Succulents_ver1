FROM ruby:3.2.2

RUN apt-get update -qq && apt-get install -y nodejs postgresql-client
WORKDIR /api
COPY . /api
RUN bundle install
COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh

EXPOSE 3000
CMD ["rails", "server", "-b", "0.0.0.0"]