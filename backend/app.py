from flask import Flask, request, jsonify
import youtube
app = Flask(__name__)

with open("./API_KEY.txt", "r") as f:
  API_KEY = f.read()

# http://127.0.0.1:5000/api/channel?channel_url=チャンネルのURL
@app.route('/api/channel')
def get_thumbnails():
  # クエリパラメータからchannel_idを取得
  channel_url = request.args.to_dict()["q"]
  channel_id = youtube.find_channel_id(API_KEY, channel_url)
  
  res = youtube.get_thumbnails_urls(API_KEY, channel_id)
  return jsonify(res)

@app.route('/api/keyword')
def query_search():
  query = request.args.to_dict()["q"]
  res = youtube.get_query_search(API_KEY, query)
  
  return jsonify(res)

@app.route('/good')
def good():
    name = "Good"
    return name

if __name__ == "__main__":
    app.run(debug=True)