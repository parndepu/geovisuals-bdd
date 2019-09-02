# (c) 2019, Suphanut Jamonnak
# preprocess all gps file (json)
import os
import json
from pymongo import MongoClient

client = MongoClient('localhost', 27017)
db = client['geovisuals_bdd']
collection_train = db['train']
collection_val = db['val']

bdd_train_path = '../resources/bdd100k/info/100k/train/'
bdd_val_path = '../resources/bdd100k/info/100k/val/'

def show_data(data):
    """ Show all gps information """

    file_id = data['id']
    ride_id = data['rideID']
    file_name = data['filename']
    start_time = data['startTime']
    end_time = data['endTime']

    for location in data['locations']:
        loc_latitude = location['latitude']
        loc_longitude = location['longitude']

    for gps in data['gps']:
        gps_timestamp = location['timestamp']

    print([file_id, ride_id, file_name, start_time, end_time, loc_latitude, loc_longitude, gps_timestamp])

def read_directory(dir_path, collection):
    """ Read files in directory """

    file_count = 0

    for file_name in os.listdir(dir_path):
        try:
            with open(dir_path + file_name) as json_file:
                data = json.load(json_file)
                #show_data(data)
                collection.insert_one(data)
    
            print('Insert ' + file_name + ' to mongodb.')
            file_count += 1

        except Exception as e:
            print(e)
            pass

    print('Finish import with ' + str(file_count) + ' total files.')
            

if __name__ == '__main__':
    """ Main """

    # Read 100k info directory
    read_directory(bdd_train_path, collection_train)
    #read_directory(bdd_val_path, collection_val)
    # Close mongodb client
    client.close()