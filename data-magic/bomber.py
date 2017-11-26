import requests
import json
import time

def makePost(url, body):
    # body = json.dumps(body)
    print(body)
    while True:
        r = requests.post(url, json=body)
        if r.status_code == 200:
            break
        
        time.sleep(5)