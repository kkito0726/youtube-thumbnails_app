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
  descriptions = [item['snippet']['description'] for item in items] 
  
  res = {
    "channelTitles": channel_titles,
    "videoTitles": video_titles,
    "videoIds": video_ids,
    "thumbnails": thumbnails,
    "publishTimes": publishTimes,
    "descriptions": descriptions
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
  descriptions = [item['snippet']['description'] for item in items] 
  
  res = {
    "channelTitles": channel_titles,
    "videoTitles": video_titles,
    "videoIds": video_ids,
    "thumbnails": thumbnails,
    "publishTimes": publishTimes,
    "descriptions": descriptions
  }
  
  return res

def search_video_info(API_KEY, video_id):
  params = {
    'key': API_KEY,
    'part': 'snippet',
    'id': video_id
  }
  
  data = requests.get("https://www.googleapis.com/youtube/v3/videos", params=params).json()
  items = data["items"]
  print(items)
  channel_titles =[item['snippet']['channelTitle'] for item in items]
  video_titles = [item['snippet']['title'] for item in items]
  thumbnails = [item['snippet']['thumbnails']['high']['url'] for item in items]
  # publishTimes = [item['snippet']['publishTime'] for item in items]
  descriptions = [item['snippet']['description'] for item in items] 
  
  res = {
    "channelTitles": channel_titles,
    "videoTitles": video_titles,
    "thumbnails": thumbnails,
    # "publishTimes": publishTimes,
    "descriptions": descriptions
  }
  
  return res

def get_comments(API_KEY, video_id):
  params = {
    'key': API_KEY,
    'part': 'snippet',
    'videoId': video_id,
    'textFormat': 'plaintext',
    'order': 'relevance',
    'maxResults': 50,
  }
  
  data = requests.get("https://www.googleapis.com/youtube/v3/commentThreads", params=params).json()
  items = data["items"]
  
  comment_list = [item['snippet']['topLevelComment']['snippet'] for item in items]
  
  authors = [item['authorDisplayName'] for item in comment_list]
  published_at = [item['publishedAt'] for item in comment_list]
  comments = [item['textDisplay'] for item in comment_list]
  like_counts = [item['likeCount'] for item in comment_list]
  author_channel_url = [item['authorChannelUrl'] for item in comment_list]
  
  res = {
    "authors": authors,
    "publishedAt": published_at,
    "comments": comments,
    "likeCounts": like_counts,
    "authorChannelUrls": author_channel_url
  }
  
  return res
  
if __name__ == '__main__':
  with open("./API_KEY.txt", "r") as f:
    API_KEY = f.read()
    
  res = get_comments(API_KEY, "638qlfTOXhM")
  
  print(res)
  