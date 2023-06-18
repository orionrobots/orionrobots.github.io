"""Auto generate the autogallery from the images in a directory"""
import pyaml
import os

filtered = (item for item in os.listdir('.') if item.endswith(".jpg") or item.endswith(".png"))
output_stage_1 = [{"src": item} for item in filtered]
print(pyaml.dumps(output_stage_1).decode())
