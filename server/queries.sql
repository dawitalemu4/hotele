CREATE TABLE hotel (
    id SERIAL PRIMARY KEY,
    title TEXT,
    description TEXT,
    location TEXT,
    address TEXT,
    rating TEXT,
    price INTEGER,
    img TEXT
); 



INSERT INTO hotel (
    title, description, location, address, rating, price, img
) VALUES (
    'Park Hyatt Tokyo', 
    'If you’re looking for a luxury hotel in Nishishinjuku, look no further than Park Hyatt Tokyo. As your “home away from home,” the hotel rooms offer a flat screen TV, a refrigerator, and a minibar, and getting online is easy, with free wifi available. Guests have access to a concierge and room service while staying at Shinjuku Hyatt. In addition, Hyatt Tokyo offers a pool and breakfast, which will help make your Nishishinjuku trip additionally gratifying. And, as an added convenience, there is parking available to guests. While in Nishishinjuku be sure to experience local okonomiyaki & takoyaki favorites at Hiroshimaokonomiyaki Buchiumaya or Kobe Rokko-Michi Gyunta Shinjuku Lumine 1.',
    'Tokyo', 
    '3-7-1-2 Nishi Shinjuku, Nishishinjuku, Shinjuku 163-1055 Tokyo Prefecture',
    '4.5',
    922,
    'https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2017/04/10/1223/Park-Hyatt-Tokyo-P021-Kozue.jpg/Park-Hyatt-Tokyo-P021-Kozue.4x3.jpg'
), (
    'The Luigans Spa and Resort', 
    'Located in the Uminonakamichi Seaside Park, The Luigans Spa and Resort features an outdoor swimming pool during summer with a spacious wooden deck, dining options and relaxing spa treatments. Some guestrooms feature ocean views and a balcony, while free WiFi is available at the entire property. A free shuttle is available from JR Hakata Train Station, which is a 40-minute drive away.',
    'Fukuoka', 
    '811-0321 Fukuoka, Fukuoka, 18-25 , Saitozaki , Higashiku, Japan',
    '4',
    150,
    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/ce/33/9d/the-luigans-spa-resort.jpg?w=700&h=-1&s=1'
), (
    'W Osaka', 
    'Situated in Osaka, 200 metres from Namba Shrine, W Osaka features accommodation with a fitness centre, private parking, a terrace and a restaurant. This 5-star hotel offers room service, a 24-hour front desk and free WiFi. The property is 1.8 km from the city centre and less than 1 km from Kokoni Sunaba Ariki Monument.',
    'Osaka', 
    '542-0081 Osaka Prefecture, Osaka, Chuo-ku Minami Semba 4-1-3, Japan',
    '4.25',
    435,
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/446545772.jpg?k=274e85926910a935126dbfe2df0c61055487df1feb5b0667079052bba8f09982&o=&hp=1'
), (
    'InterContinental Yokohama Pier 8, an IHG Hotel', 
    'Well set in the centre of Yokohama, InterContinental Yokohama Pier 8, an IHG Hotel provides air-conditioned rooms, a garden, free WiFi and a terrace. Featuring room service, this property also provides guests with a restaurant. Private parking is available on site.',
    'Yokohama', 
    '231-0001 Kanagawa, Yokohama, 2-14-1 Naka-ku Shinko, Japan',
    '4.5',
    304,
    'https://img.travel.rakuten.co.jp/share/image_up/177505/LARGE/83671e34c6b72c84ded95bf15861bb488a144afc.47.9.26.3.jpg'
);



CREATE TABLE event (
    id SERIAL PRIMARY KEY,
    title TEXT,
    location TEXT,
    address TEXT,
    img TEXT
); 



INSERT INTO event (
    title, location, address, img
) VALUES (
    'Tokyo Disneyland - Halloween 2023', 
    'Tokyo', 
    'Tokyo Disney Resort, 1-1 Maihama, Urayasu, Chiba 279-0031, Japan',
    'https://www.tokyodisneyresort.jp/treasure/halloween2023/assets/img/tds/aft_mv.jpg'
), (
    'Tokyo Disneyland - Christmas 2023', 
    'Tokyo', 
    'Tokyo Disney Resort, 1-1 Maihama, Urayasu, Chiba 279-0031, Japan',
    'https://tdrexplorer.com/wp-content/uploads/2023/09/atf_mv.jpg'
), (
    'Shibuya Grand Line Store - One Piece Live-Action Pop-Up Event', 
    'Tokyo', 
    'Ichigo Jingumae Bld 1F, 6-25-16, Jingumae, Shibuya City, Tokyo',
    'https://img.japankuru.com/prg_img/img/img2023083119424510801600.jpg'
), (
    'ONE PIECE PREMIER SUMMER 2023', 
    'Osaka', 
    'Ichigo Jingumae Bld 1F, 6-25-16, Jingumae, Shibuya City, Tokyo',
    'https://jw-webmagazine.com/wp-content/uploads/2022/05/USJ-x-One-Piece-2.jpeg'
), (
    'HALLOWEEN HORROR NIGHTS', 
    'Osaka', 
    'Ichigo Jingumae Bld 1F, 6-25-16, Jingumae, Shibuya City, Tokyo',
    'https://media.wdwnt.com/2022/07/usj-no-limit-halloween-2022-a-scaled.jpg'
), (
    'SUPER NINTENDO WORLD', 
    'Osaka', 
    'Ichigo Jingumae Bld 1F, 6-25-16, Jingumae, Shibuya City, Tokyo',
    'https://www.nme.com/wp-content/uploads/2023/02/Super-Nintendo-World-atmosphere-Bex-April-May.jpg'
), (
    'JUJUTSU KAISEN: The Real 4-D', 
    'Osaka', 
    'Ichigo Jingumae Bld 1F, 6-25-16, Jingumae, Shibuya City, Tokyo',
    'https://i.ytimg.com/vi/cNHvcSGFduY/maxresdefault.jpg'
), (
    '& Sake Fukuoka', 
    'Fukuoka', 
    '2-2 Chikkohonmachi, Hakata Ward, Fukuoka, 812-0021, Japan',
    'https://i0.wp.com/www.fukuoka-now.com/wp-content/uploads/2023/08/fn_and-sake-fukuoka_2023_WEB-003.jpg?w=1400&ssl=1'
), (
    'NARUTO THE GALLERY FUKUOKA', 
    'Fukuoka', 
    '6F, 2-2-6 Jikohama, Chuo-ku, Fukuoka City',
    'https://i0.wp.com/www.fukuoka-now.com/wp-content/uploads/2023/09/fn_naruto-the-gallery_2023_cl-001.jpg?w=1200&ssl=1'
), (
    'Yokohama Oktoberfest', 
    'Yokohama', 
    '1 Chome-1 Shinko, Naka Ward, Yokohama, Kanagawa, Japan',
    'https://media.timeout.com/images/106031499/image.jpg'
);



SELECT * FROM hotel;



SELECT * FROM event;