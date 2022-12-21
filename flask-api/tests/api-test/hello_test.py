import pytest

from app import create_app


def test_normal(client):
    # Arrange
    expected = b"Hello, World!"

    # Act
    response = client.get("/")

    # Assert
    assert response.status_code == 200
    assert response.data == expected
