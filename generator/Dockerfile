FROM python:3.11-slim
WORKDIR /generator
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
CMD ["python", "generate.py"]
