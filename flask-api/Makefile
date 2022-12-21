install:
	pip install -r requirements.txt

test:
	python -m pytest

unit-test:
	python -m pytest tests/unit-test

api-test:
	python -m pytest tests/api-test

sync-lib:
	rm -f requirements.txt
	pip freeze > requirements.txt