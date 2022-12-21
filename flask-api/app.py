from flask import Flask
from flask import request
import json

from infrastructure.FlakeInterfaceAdapter import FlaskInterfaceAdapter
from interface.controllers.UserController import UserController

app = Flask(__name__)
adapter = FlaskInterfaceAdapter()


@app.route("/")
def hello():
    return "Hello, World!"


@app.get("/test")
def test_get():
    print("request.headers:")
    print(dict(request.headers))
    print("request.args:")
    print(request.args)
    print("request.args.json:")
    print(json.dumps(request.args))
    return ""


@app.post("/test")
def test_post():
    print("request.headers:")
    print(dict(request.headers))
    print("request.args:")
    print(request.args)
    print("request.json:")
    print(request.json)
    return ""


@app.get("/users")
def users_get():
    user_controller = UserController()
    return adapter.call(user_controller.get, request)