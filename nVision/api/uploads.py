import os
import boto3
# from nVision.awss3 import upload_file
from flask import Flask, request, Blueprint

s3 = boto3.client('s3',
                        aws_access_key_id=f"{os.environ.get('AWS_KEY')}",
                        aws_secret_access_key= f"{os.environ.get('AWS_SECRET_KEY')}")

BUCKET_NAME='nvision'

upload_routes = Blueprint('uploads', __name__)
UPLOAD_FOLDER = "uploads"

@upload_routes.route('/', methods=['POST'])
def upload():
    if request.method == 'POST':
        f = request.files['file']
        f.save(f.filename)
        s3.upload_file(
            Bucket = BUCKET_NAME,
            Filename=f.filename,
            Key = f.filename
        )
        return 'success'
