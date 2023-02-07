import requests
import time
  
def find_channel_id(API_KEY, channel_url):
  params = {
    "key": API_KEY,
    "part": "snippet",
    "type": "channel",
    "q": channel_url
  }
  data = requests.get("https://www.googleapis.com/youtube/v3/search", params=params).json()
  channel_id = data['items'][0]['id']['channelId']
  
  return channel_id

def get_thumbnails_urls(API_KEY, channel_id, order="date", max_results=50):
  params = {
    "key": API_KEY,
    "part": "snippet",
    "channelId": channel_id,
    "type": "video",
    "order": order,
    "maxResults": max_results
  }
  
  data = requests.get("https://www.googleapis.com/youtube/v3/search", params=params).json()
  
  items = data["items"]
  channel_titles =[item['snippet']['channelTitle'] for item in items]
  video_titles = [item['snippet']['title'] for item in items]
  thumbnails = [item['snippet']['thumbnails']['high']['url'] for item in items]
  video_ids = [item['id']['videoId'] for item in items]
  publishTimes = [item['snippet']['publishTime'] for item in items]
  
  res = {
    "channelTitles": channel_titles,
    "videoTitle": video_titles,
    "videoIds": video_ids,
    "thumbnails": thumbnails,
    "publishTimes": publishTimes
  }
  
  return res

def get_query_search(API_KEY, query, max_results=50):
  params = {
    "key": API_KEY,
    "part": "snippet",
    "q": query,
    "type": "video",
    "maxResults": max_results
  }
  
  data = requests.get("https://www.googleapis.com/youtube/v3/search", params=params).json()
  items = data["items"]
  
  channel_titles = [item['snippet']['channelTitle'] for item in items]
  video_titles = [item['snippet']['title'] for item in items]
  thumbnails = [item['snippet']['thumbnails']['high']['url'] for item in items]
  video_ids = [item['id']['videoId'] for item in items]
  publishTimes = [item['snippet']['publishTime'] for item in items]
  
  res = {
    "channelTitles": channel_titles,
    "videoTitle": video_titles,
    "videoIds": video_ids,
    "thumbnails": thumbnails,
    "publishTimes": publishTimes
  }
  
  return res
if __name__ == '__main__':
  with open("./API_KEY.txt", "r") as f:
    API_KEY = f.read()
    
  res = get_query_search(API_KEY, "ポケモン")
  
  print(res)
  