# README

## やること

1. DockerfileをBuild.
    - `sudo docker build . -t post:latest`
1. `crontab_post` を編集. 引数を与える.
1. コピー.
    - `sudo cp ./crontab_post /etc/cron.d/`
1. incoming webhookのURLを指定する

