from flask import Flask, request, jsonify
import youtube
app = Flask(__name__)

with open("./API_KEY.txt", "r") as f:
  API_KEY = f.read()

# http://127.0.0.1:5000/api/channel?channel_url=チャンネルのURL
@app.route('/api/channel')
def get_thumbnails():
  # クエリパラメータからchannel_idを取得
  channel_url = request.args.to_dict()["channel_url"]
  channel_id = youtube.find_channel_id(API_KEY, channel_url)
  
  res = youtube.get_thumbnails_urls(API_KEY, channel_id)
  return jsonify(res)

@app.route('/good')
def good():
    name = "Good"
    return name

if __name__ == "__main__":
    app.run(debug=True)