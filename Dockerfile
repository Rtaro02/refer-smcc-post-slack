FROM ubuntu:20.04

RUN apt update && \
    apt install -y \
    git \
    sudo \
    python3 \
    python3-pip \
    zip \
    wget

ENV TERRA_VERSION="0.12.26"
RUN wget https://releases.hashicorp.com/terraform/${TERRA_VERSION}/terraform_${TERRA_VERSION}_linux_amd64.zip && \
    unzip terraform_${TERRA_VERSION}_linux_amd64.zip && \
    sudo cp terraform /usr/local/bin/

#COPY $HOME/.ssh /root/.ssh
