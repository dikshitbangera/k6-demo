# k6 Performance Testing with InfluxDB Cloud and Grafana Cloud

This project demonstrates how to run k6 performance tests from GitHub Actions, send the results to InfluxDB Cloud, and visualize them in Grafana Cloud.

## Features
- Parameterized load test (TPS configurable from GitHub Actions UI)
- Results sent to InfluxDB Cloud (v2.x)
- Real-time monitoring in Grafana Cloud
- Custom k6 binary built with xk6-output-influxdb extension

---

## Prerequisites
- [InfluxDB Cloud](https://cloud2.influxdata.com/) account (with bucket, org, and API token)
- [Grafana Cloud](https://grafana.com/products/cloud/) account
- GitHub repository with Actions enabled

---

## Project Structure
- `test.js` – k6 test script (TPS is set via environment variable)
- `.github/workflows/k6-influxdb.yml` – GitHub Actions workflow for running the test and pushing results
- `docker-compose.yml` – (Optional) For local InfluxDB/Grafana setup

---

## How It Works
1. **Trigger the Workflow**
   - Go to the GitHub Actions tab and run the workflow manually.
   - Set the desired TPS (transactions per second) as input.

2. **Workflow Steps**
   - Checks out the code
   - Installs dependencies and builds a custom k6 binary with the InfluxDB output extension
   - Runs the k6 test, sending results to InfluxDB Cloud

3. **Visualize in Grafana Cloud**
   - Add your InfluxDB Cloud instance as a data source in Grafana Cloud
   - Import a k6 dashboard or create your own to monitor results

---

## Grafana Cloud Setup
1. Go to **Connections > Data sources** in Grafana Cloud.
2. Add a new **InfluxDB** data source:
   - URL: Your InfluxDB Cloud URL
   - Organization: Your InfluxDB Cloud org
   - Bucket: Your bucket
   - Token: Your API token
   - Query language: **Flux** (recommended)
3. Import a k6 dashboard from [Grafana Dashboards](https://grafana.com/grafana/dashboards/?search=k6) or create your own.

---

## Security
- Store your InfluxDB Cloud API token as a GitHub Actions secret (`INFLUXDB_TOKEN`).
- Never commit sensitive credentials to the repository.

---

## Local Development (Optional)
You can use `docker-compose.yml` to run InfluxDB and Grafana locally for development/testing. Update your k6 output and Grafana data source accordingly.

---

## References
- [k6 Documentation](https://k6.io/docs/)
- [xk6-output-influxdb](https://github.com/grafana/xk6-output-influxdb)
- [InfluxDB Cloud](https://cloud2.influxdata.com/)
- [Grafana Cloud](https://grafana.com/products/cloud/)