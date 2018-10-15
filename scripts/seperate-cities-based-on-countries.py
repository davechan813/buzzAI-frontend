import json

with open('../src/static/cities.json') as i:
    cities = json.load(i)
    for city in cities: # first pass: create empty list
        with open('../src/static/cities/cities-' + city['country'] + '.json', 'w+') as f:
            json.dump([], f)
    
    for city in cities: # second pass: add each json to list
        with open('../src/static/cities/cities-' + city['country'] + '.json', 'r+') as i:
            city_list = json.load(i)
            with open('../src/static/cities/cities-' + city['country'] + '.json', 'w+') as o:
                city_list.append(city)
                json.dump(city_list, o)
                print 'parsed ' + city['label'] + ' in ' + city['country']