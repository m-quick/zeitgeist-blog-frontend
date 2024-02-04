FROM python:3.12-slim-bookworm

RUN pip install poetry

WORKDIR /code
COPY poetry.lock pyproject.toml /code/

RUN poetry install

COPY . /code

CMD [ "poetry", "run", "uvicorn", "posts:app", "--host=0.0.0.0", "--port=8000"]