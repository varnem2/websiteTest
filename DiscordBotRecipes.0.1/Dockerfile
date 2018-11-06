FROM ubuntu:16.04



RUN apt-get update
RUN apt-get upgrade -y
RUN apt-get update
RUN apt-get install git-core nodejs npm -y
RUN git config --global user.name varnem2
RUN git config --global user.email 42308489+varnem2@users.noreply.github.com
RUN git clone https://github.com/varnem2/websiteTest.git
RUN git clone https://github.com/varnem2/effective-pancake.git /websiteTest/DiscordBotRecipes.0.1/effective-pancake/

WORKDIR /websiteTest/DiscordBotRecipes.0.1

CMD [ "node ", "index.js"]
