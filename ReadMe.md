
docker build -t demo  .
docker run -p 9000:8000 --env-file .env demo