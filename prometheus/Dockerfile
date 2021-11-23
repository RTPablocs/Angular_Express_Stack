FROM prom/prometheus:v2.20.1

WORKDIR /etc/prometheus
COPY ./prometheus.yml .
EXPOSE 9090

CMD ["--config.file=/etc/prometheus/prometheus.yml"]