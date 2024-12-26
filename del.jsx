// CREATE DATABASE final_project;


// use final_project;
// CREATE TABLE `final_project`.`categories` (
//   id INT PRIMARY KEY AUTO_INCREMENT,
//   title VARCHAR(255) ,
//   short_desc VARCHAR(255),
//   image VARCHAR(255)
// );


// use final_project;
// insert into categories(name,image)
// values("Bullion coins","https://firebasestorage.googleapis.com/v0/b/lahiye5.appspot.com/o/South%20Vietnamese%20Dong_1.png?alt=media&token=66db7a6e-bafd-406c-aaad-0eebb1bcab1e"),
// ("Exclusive coins","https://firebasestorage.googleapis.com/v0/b/lahiye5.appspot.com/o/ISK_2.png?alt=media&token=cc07f7a0-342d-4413-b510-44aca3ad76fe"),
// ("Commemorative coins","https://firebasestorage.googleapis.com/v0/b/lahiye5.appspot.com/o/Looney_1.png?alt=media&token=628b72f8-00d8-4c69-a288-91b293ec236a")



// use final_project;
// CREATE TABLE `final_project`.`coins` (
//   id INT PRIMARY KEY AUTO_INCREMENT,
//   title VARCHAR(255) ,
//   short_desc VARCHAR(255),
//   image VARCHAR(255)
// );


// use final_project;
// ALTER TABLE coins
// ADD category_id INT;


// ALTER TABLE `final_project`.`coins` 
// DROP COLUMN `category_id`;



// use final_project;
// CREATE TABLE `final_project`.`coins` (
//   id INT PRIMARY KEY AUTO_INCREMENT,
//   title VARCHAR(255),
//   short_desc VARCHAR(255),
//   description VARCHAR(255),
//   image VARCHAR(255),
//   image2 VARCHAR(255),
//   category_id VARCHAR(255),
//   issuing_country VARCHAR(255),
//   composition VARCHAR(255),
//   quality VARCHAR(255),
//   denomination VARCHAR(255),
//   year VARCHAR(255),
//   weight VARCHAR(255),
//   price  VARCHAR(255)
// );




// USE final_project;
// ALTER TABLE `coins` MODIFY COLUMN `description` VARCHAR(500);




// INSERT INTO `final_project`.`coins` (`title`, `short_desc`, `description`, `image`, `image2`, `category_id`, `issuing_country`, `composition`, `quality`, `denomination`, `year`, `weight`, `price`) VALUES ('Canadian Beaver', '\"Canadian beaver\". Unique coin with the image of a beaver. Face value - 5 cents. Created under Elizabeth II.', 'In the center of the obverse is a portrait of Queen Elizabeth II, the profile is directed to the right. The inscription on the left semicircle (English) ELIZABETH II, on the right semicircle D · G · REGINA (ELIZABETH II QUEEN by the Grace of GOD) with dots. Below is a mint mark.', 'https://firebasestorage.googleapis.com/v0/b/lahiye5.appspot.com/o/Canadian%20Beaver_1.png?alt=media&token=5bc0c236-e544-4393-bc6c-e6441f414fc3', 'https://firebasestorage.googleapis.com/v0/b/lahiye5.appspot.com/o/Canadian%20Beaver_2.png?alt=media&token=965b54c7-3d34-4b11-af3b-edd35aaa5d84', '3', 'CANADA', 'nickel', 'BU', '5 cents', '1965', '4.54', '40');
// INSERT INTO `final_project`.`coins` (`title`, `short_desc`, `description`, `image`, `image2`, `category_id`, `issuing_country`, `composition`, `quality`, `denomination`, `year`, `weight`, `price`) VALUES ('Looney', '\"Looney\". Unique coin with the image of a goat. Canadian dollar symbol.', 'The reverse of the coin depicts a black goat - a symbol of Canada and an inscription divided into the lower and upper semicircle \"Canadian dollar\".', 'https://firebasestorage.googleapis.com/v0/b/lahiye5.appspot.com/o/Looney_1.png?alt=media&token=628b72f8-00d8-4c69-a288-91b293ec236a', 'https://firebasestorage.googleapis.com/v0/b/lahiye5.appspot.com/o/Looney_2.png?alt=media&token=9c28425a-3347-4000-a34e-edff692d12e9', '3', 'CANADA', 'gold', 'BU', '1 dollar', '1970', '5.4 ', '65');
// INSERT INTO `final_project`.`coins` (`title`, `short_desc`, `description`, `image`, `image2`, `category_id`, `issuing_country`, `composition`, `quality`, `denomination`, `year`, `weight`, `price`) VALUES ('Jefferson', 'Unique coin featuring Thomas Jefferson, the 3rd American president. Face value - 5 cents.', 'The obverse of the coin depicts a bust of the 3rd American president, Thomas Jefferson. The inscription on the right semicircle \"IN GOD WE TRUST\". Below is the inscription “FREEDOM” and the year of minting. Under the image of Jefferson was a monogram of an engraver. The initials of the engraver FS first appeared on coins in 1966.', 'https://firebasestorage.googleapis.com/v0/b/lahiye5.appspot.com/o/Jefferson_1.png?alt=media&token=3c24eea5-ebde-4210-bb84-ed3805f7dbe7', 'https://firebasestorage.googleapis.com/v0/b/lahiye5.appspot.com/o/Jefferson_2.png?alt=media&token=da11a9f9-767c-4703-a26d-b5df45ce1615', '3', 'CANADA', 'nickel', 'BU', '5 cents', '1966', '3.54 ', '35');
// INSERT INTO `final_project`.`coins` (`title`, `short_desc`, `description`, `image`, `image2`, `category_id`, `issuing_country`, `composition`, `quality`, `denomination`, `year`, `weight`, `price`) VALUES ('Kennedy', 'The unique coin is made in honor of the assassination of the 35th president of Texas.', 'On November 22, 1963, in connection with the assassination of the 35th President John F. Kennedy in Dallas (Texas), it was decided to perpetuate the memory of President Kennedy on a coin.', 'https://firebasestorage.googleapis.com/v0/b/lahiye5.appspot.com/o/Kennedy_1.png?alt=media&token=c89b0d68-5fc2-40cf-a20d-228e6210381f', 'https://firebasestorage.googleapis.com/v0/b/lahiye5.appspot.com/o/Kennedy_2.png?alt=media&token=18882729-2026-42ab-8cd0-79940f23b4b6', '3', 'CANADA', 'nickel', 'BU', 'HALF DOLLAR', '1963', '4.3 ', '43');
// INSERT INTO `final_project`.`coins` (`title`, `short_desc`, `description`, `image`, `image2`, `category_id`, `issuing_country`, `composition`, `quality`, `denomination`, `year`, `weight`, `price`) VALUES ('Canadian Cent', '\"Canadian cent.\" A unique coin with the image of maple leaves - symbols of Canada. Face value - 1 cent.', 'On May 3, 2012, the Department of the Treasury of Canada announced the cessation of production of a 1 cent coin. The latest issues of the famous 1-cent maple leaf were minted in 2012.', 'https://firebasestorage.googleapis.com/v0/b/lahiye5.appspot.com/o/Canadian%20Cent_1.png?alt=media&token=bddf95de-580a-41bd-9c8f-110ab382010d', 'https://firebasestorage.googleapis.com/v0/b/lahiye5.appspot.com/o/Canadian%20Cent_2.png?alt=media&token=fad055d0-5d48-4e23-9d07-7d21512b81c4', '3', 'CANADA', 'Steel', 'BU', '1 cent', '1965', '2.7', '8');
// INSERT INTO `final_project`.`coins` (`title`, `short_desc`, `description`, `image`, `image2`, `category_id`, `issuing_country`, `composition`, `quality`, `denomination`, `year`, `weight`, `price`) VALUES ('A penny ', '\"A penny\". A unique coin with a shield image with 13 vertical stripes.', 'Minted from 1793 to the present day.', 'https://firebasestorage.googleapis.com/v0/b/lahiye5.appspot.com/o/A%20penny_1.png?alt=media&token=99034f4a-d921-405c-9f6a-53f22512a872', 'https://firebasestorage.googleapis.com/v0/b/lahiye5.appspot.com/o/A%20penny_2.png?alt=media&token=62718d59-f359-490d-8e72-db9ddd348568', '3', 'CANADA', 'Steel', 'BU', '1 cent', '1793', '5.1 ', '8');
// INSERT INTO `final_project`.`coins` (`title`, `short_desc`, `description`, `image`, `image2`, `category_id`, `issuing_country`, `composition`, `quality`, `denomination`, `year`, `weight`, `price`) VALUES ('25 cents', 'Unique coin depicting a caribou (reindeer). The face value of the coin is equal to a quarter of the Canadian dollar.', 'The obverse depicts Queen Elizabeth II. The caribou (reindeer) is depicted on the reverse.', 'https://firebasestorage.googleapis.com/v0/b/lahiye5.appspot.com/o/25%20cents_1.png?alt=media&token=fdad7a00-915f-4310-8bce-f5f6ba90a2bf', 'https://firebasestorage.googleapis.com/v0/b/lahiye5.appspot.com/o/25%20cents_2.png?alt=media&token=ec40f191-300d-42da-a97d-cef523d257fe', '3', 'CANADA', 'nickel', 'BU', '25 cents', '1966', '5.7 ', '80');
// INSERT INTO `final_project`.`coins` (`title`, `short_desc`, `description`, `image`, `image2`, `category_id`, `issuing_country`, `composition`, `quality`, `denomination`, `year`, `weight`, `price`) VALUES ('Dim Sum', 'Dim Sum is a 10-cent coin of the United States that has been minted from 1946 to the present. This is a unique coin with the image of a torch, oak and olive branches.', 'The obverse of the coin depicts a portrait of the 32nd President of the United States, Franklin D. Roosevelt, and the reverse depicts a torch, oak and olive branches above the motto “E pluribus unum” - “Out of many.”', 'https://firebasestorage.googleapis.com/v0/b/lahiye5.appspot.com/o/Dim%20Sum_1.png?alt=media&token=efd57637-43ac-4002-afb2-978d12858f47', 'https://firebasestorage.googleapis.com/v0/b/lahiye5.appspot.com/o/Dim%20Sum_2.png?alt=media&token=43b7eba0-89e7-4324-8fd7-ade33d375577', '3', 'CANADA', 'nickel', 'BU', '10 cents', '1946', '4.25 g', '10');



// INSERT INTO `final_project`.`coins` (`title`, `short_desc`, `description`, `image`, `image2`, `category_id`, `issuing_country`, `composition`, `quality`, `denomination`, `year`, `weight`, `price`) VALUES ('Lion sedge', 'Indian coin with the image of a lion Ashoka. Face value 1 one rupee. 1975 edition.', 'It depicts the lion Ashok on his pedestal. It is surrounded by the inscription of the name of the country in two languages, meaning and date, surrounded by stylized stalks of grain.', 'https://firebasestorage.googleapis.com/v0/b/lahiye5.appspot.com/o/Lion%20sedge_1.png?alt=media&token=4bff6e81-733d-43b8-8e93-bebe1b9689b3', 'https://firebasestorage.googleapis.com/v0/b/lahiye5.appspot.com/o/Lion%20sedge_2.png?alt=media&token=f36539bd-d0b8-431c-898a-367bb63c5a27', '2', 'India', 'steel', 'BU', '1 rupee', '1975', '4.95', '76');
// INSERT INTO `final_project`.`coins` (`title`, `short_desc`, `description`, `image`, `image2`, `category_id`, `issuing_country`, `composition`, `quality`, `denomination`, `year`, `weight`, `price`) VALUES ('Rial', 'Iranian silver coin with the image of a lion. Face value 5000 five thousand dinars (5 five taps). 1928 year.', 'It depicts a bust of Reza Shah, whose head is turned to the right.', 'https://firebasestorage.googleapis.com/v0/b/lahiye5.appspot.com/o/Rial_1.png?alt=media&token=a8684502-702d-446d-b044-987423be4bf9', 'https://firebasestorage.googleapis.com/v0/b/lahiye5.appspot.com/o/Rial_2.png?alt=media&token=8d4e0879-da84-49cc-badd-41bf2c5d48b8', '2', ' Iran', 'silver', 'BU', '5000 dinars', '1928', '6.12', '98');
// INSERT INTO `final_project`.`coins` (`title`, `short_desc`, `description`, `image`, `image2`, `category_id`, `issuing_country`, `composition`, `quality`, `denomination`, `year`, `weight`, `price`) VALUES ('ISK', 'Icelandic coin with a picture of a fish. Face value 1 Icelandic krona', 'Initially, the krone consisted of 100 Eire (ISL. EYRIR, MN. CH. ISL. Aurar), but since January 1, 1995 Eire has not been used in monetary circulation.', 'https://firebasestorage.googleapis.com/v0/b/lahiye5.appspot.com/o/ISK_1.png?alt=media&token=5a39965d-77e7-4fe5-85c7-b7a189b372a0', 'https://firebasestorage.googleapis.com/v0/b/lahiye5.appspot.com/o/ISK_2.png?alt=media&token=cc07f7a0-342d-4413-b510-44aca3ad76fe', '2', 'Iceland', 'nickel', 'BU', '1 Icelandic krona', '2007', '5.42', '78');
// INSERT INTO `final_project`.`coins` (`title`, `short_desc`, `description`, `image`, `image2`, `category_id`, `issuing_country`, `composition`, `quality`, `denomination`, `year`, `weight`, `price`) VALUES ('Yemen', 'Coin of South Arabia (Yemen) with the image of a viral boat. Coin in 25 twenty five fils.', 'An octagonal star with dots is depicted on one side of the coin.East African shillings were exchanged for dinars until July 1, 1965 at a ratio of 20 shillings = 1 dinar.', 'https://firebasestorage.googleapis.com/v0/b/lahiye5.appspot.com/o/Yemen_1.png?alt=media&token=ce1788c3-9c8d-447b-9a1a-62a5a6f0e937', 'https://firebasestorage.googleapis.com/v0/b/lahiye5.appspot.com/o/Yemen_2.png?alt=media&token=c05d5cc4-678c-41a1-81b4-3edf2d69eb66', '2', 'Yemen', 'nickel', 'BU', '25 fils', '1964', '5.47', '69');
// INSERT INTO `final_project`.`coins` (`title`, `short_desc`, `description`, `image`, `image2`, `category_id`, `issuing_country`, `composition`, `quality`, `denomination`, `year`, `weight`, `price`) VALUES ('Woman', '1 yuan Chinese coin with a picture of a woman. 1986 edition.', 'On one side of the coin is a woman sitting on a stone. Doves fly around her', 'https://firebasestorage.googleapis.com/v0/b/lahiye5.appspot.com/o/Woman_1.png?alt=media&token=98b15a60-8aac-4ad2-a9e4-0dede18febc0', 'https://firebasestorage.googleapis.com/v0/b/lahiye5.appspot.com/o/Woman_2.png?alt=media&token=d27e30ac-7642-418c-b67f-9a0792a3f262', '2', 'China', 'nickel', 'BU', '1 yuan', '1986', '6.02', '48');
// INSERT INTO `final_project`.`coins` (`title`, `short_desc`, `description`, `image`, `image2`, `category_id`, `issuing_country`, `composition`, `quality`, `denomination`, `year`, `weight`, `price`) VALUES ('Alligator', 'Chinese coin with the image of an alligator. 5 yuan Chinese coin. 1998 edition.', 'It depicts a Chinese alligator on the banks of the river.', 'https://firebasestorage.googleapis.com/v0/b/lahiye5.appspot.com/o/Alligator_1.png?alt=media&token=f97d63d5-ee74-4c1d-b8d7-7d9d4380cefa', 'https://firebasestorage.googleapis.com/v0/b/lahiye5.appspot.com/o/Alligatorv_2.png?alt=media&token=e602902e-6589-43d6-ac5a-dfe9c7f117b4', '2', 'China', 'nickel', 'BU', '5 yuan', '1998', '7.24', '78');
// INSERT INTO `final_project`.`coins` (`title`, `short_desc`, `description`, `image`, `image2`, `category_id`, `issuing_country`, `composition`, `quality`, `denomination`, `year`, `weight`, `price`) VALUES ('The Golden Panda', 'Chinese coin with the image of two pandas. 5 yuan Chinese coin. 1993 edition.', 'On one side of the coin are two pandas. At the top of the coin are Chinese characters in an arc.', 'https://firebasestorage.googleapis.com/v0/b/lahiye5.appspot.com/o/The%20Golden%20Panda_1.png?alt=media&token=97dcf799-41fe-4585-bf3e-58efdd5a2974', 'https://firebasestorage.googleapis.com/v0/b/lahiye5.appspot.com/o/The%20Golden%20Panda_2.png?alt=media&token=8e61cd14-d5a0-4a1f-a85c-80fe8fac6daf', '2', 'China', 'nickel', 'BU', '5 yuan', '1993', '7.24', '82');
// INSERT INTO `final_project`.`coins` (`title`, `short_desc`, `description`, `image`, `image2`, `category_id`, `issuing_country`, `composition`, `quality`, `denomination`, `year`, `weight`, `price`) VALUES ('Costa Rica', 'Costa - African coin with the image of manatee. Costa Rican coin of 100 columns. It has been produced since 1974.', 'On one side of the coin is a shield with a sailing ship in front of the mountains. Below is the release date of the coin.', 'https://firebasestorage.googleapis.com/v0/b/lahiye5.appspot.com/o/Costa%20Rica_1.png?alt=media&token=bf81206f-d271-48af-bea8-68c78a85c7c1', 'https://firebasestorage.googleapis.com/v0/b/lahiye5.appspot.com/o/Costa%20Rica_2.png?alt=media&token=f4c643f2-d032-45ff-8d94-092e0956e735', '2', 'Costa Rica', 'nickel', 'BU', '100 columns', '1974', '5.24', '78');
// INSERT INTO `final_project`.`coins` (`title`, `short_desc`, `description`, `image`, `image2`, `category_id`, `issuing_country`, `composition`, `quality`, `denomination`, `year`, `weight`, `price`) VALUES ('Year of the children', 'Costa is an African coin depicting three chicks in a nest. Costa Rican coin of 100 columns. It has been produced since 1979.', 'On one side of the coin are 3 chicks in a nest, symbolizing the International Year of Children.', 'https://firebasestorage.googleapis.com/v0/b/lahiye5.appspot.com/o/Year%20of%20the%20children_1.png?alt=media&token=78161850-ac99-4fb4-be54-4a8454e67edf', 'https://firebasestorage.googleapis.com/v0/b/lahiye5.appspot.com/o/Year%20of%20the%20children_2.png?alt=media&token=409e4197-a6e6-44bf-a5ce-e27d4417ed31', '2', 'Costa Rica', 'nickel', 'BU', '100 columns', '1979', '5.24', '72');
// INSERT INTO `final_project`.`coins` (`title`, `short_desc`, `description`, `image`, `image2`, `category_id`, `issuing_country`, `composition`, `quality`, `denomination`, `year`, `weight`, `price`) VALUES ('Sailboat', 'Portuguese silver coin with the image of a sailing ship. ', 'Portuguese silver coin in 5 five escudos. It has been produced since 1933.', 'https://firebasestorage.googleapis.com/v0/b/lahiye5.appspot.com/o/Sailboat_1.png?alt=media&token=ca1b1d36-f6c9-4eed-ac25-5ef0f6eb9d2a', 'https://firebasestorage.googleapis.com/v0/b/lahiye5.appspot.com/o/Sailboat_2.png?alt=media&token=270ecc5b-2cce-4c37-81d1-fdbb38f654f8', '2', 'Portugal', 'silver', 'BU', '5 escudos', '1933', '4.4', '134');


// INSERT INTO `final_project`.`coins` (`title`, `short_desc`, `description`, `image`, `image2`, `category_id`, `issuing_country`, `composition`, `quality`, `denomination`, `year`, `weight`, `price`) VALUES ('South Vietnamese Dong', 'Currency of the Republic of Vietnam in 1955-1975 Coin with the image of wheat.', 'Currency of the Republic of Vietnam in 1955-1975.', 'https://firebasestorage.googleapis.com/v0/b/lahiye5.appspot.com/o/South%20Vietnamese%20Dong_1.png?alt=media&token=66db7a6e-bafd-406c-aaad-0eebb1bcab1e', 'https://firebasestorage.googleapis.com/v0/b/lahiye5.appspot.com/o/South%20Vietnamese%20Dong_2.png?alt=media&token=869e95bd-b271-48c6-a8ab-5ed74b22404c', '1', 'the Republic of Vietnam', 'nickel', 'BU', '1 dong', '1955', '5.05', '56');
// INSERT INTO `final_project`.`coins` (`title`, `short_desc`, `description`, `image`, `image2`, `category_id`, `issuing_country`, `composition`, `quality`, `denomination`, `year`, `weight`, `price`) VALUES ('The British Antelope', 'Unique coin depicting an antelope. British South African gold coin with a face value of 1/2 pound. It has been produced since 1952.', 'On one side of the coin is the head of King George VI, turned to the left. Also at the top in a semicircle is the inscription GEORGIVS SEXTVS REX.', 'https://firebasestorage.googleapis.com/v0/b/lahiye5.appspot.com/o/The%20British%20Antelope_1.png?alt=media&token=164e996c-2373-43c1-922b-27dfa5c7efcd', 'https://firebasestorage.googleapis.com/v0/b/lahiye5.appspot.com/o/The%20British%20Antelope_2.png?alt=media&token=ad29307a-a5b0-4f85-90dc-230c5f5fa855', '1', 'British South Africa', 'gold', 'BU', '1/2 pound', '1952', ' 6.3', '78');
// INSERT INTO `final_project`.`coins` (`title`, `short_desc`, `description`, `image`, `image2`, `category_id`, `issuing_country`, `composition`, `quality`, `denomination`, `year`, `weight`, `price`) VALUES ('Cron', 'A unique coin depicting a Knorr Viking ship at sea.', 'Coin 1 crown was issued from August 1, 1934 to March 25, 1941, during the first period of Estonia’s independence.', 'https://firebasestorage.googleapis.com/v0/b/lahiye5.appspot.com/o/Cron_1.png?alt=media&token=642d61fb-df58-4f72-a61a-55bae5671b34', 'https://firebasestorage.googleapis.com/v0/b/lahiye5.appspot.com/o/Cron_2.png?alt=media&token=3ee4a3ca-756e-44c1-8c08-f771f304856b', '1', 'Estonia', 'gold', 'BU', '1/2 pound', '1934', '5.67', '79');
// INSERT INTO `final_project`.`coins` (`title`, `short_desc`, `description`, `image`, `image2`, `category_id`, `issuing_country`, `composition`, `quality`, `denomination`, `year`, `weight`, `price`) VALUES ('Franc', 'Unique coin with the image of a walking elephant. \"Frank\" of the Belgian Congo.', 'On the reverse of the coin in its central part there is an inscription in French: \"2 francs\" - 2 francs, framed by a five-pointed star. Along the edge from left to right there is an inscription in French and Dutch in two lines: “BANQUE DU CONGO BELGE”, “BANQUE VAN BELGISCH CONGO” - Bank of the Belgian Congo. The edge of the coin is decorated with decorative teeth.', 'https://firebasestorage.googleapis.com/v0/b/lahiye5.appspot.com/o/Franc_1.png?alt=media&token=0b35681c-7ec5-49f3-af60-90cd91132f81', 'https://firebasestorage.googleapis.com/v0/b/lahiye5.appspot.com/o/Franc_2.png?alt=media&token=33a8ed76-f6cf-401c-8b91-cba71e1e6c6f', '1', 'the Belgian Congo', 'gold', 'BU', '2 francs', '1947', '5.45', '68');
// INSERT INTO `final_project`.`coins` (`title`, `short_desc`, `description`, `image`, `image2`, `category_id`, `issuing_country`, `composition`, `quality`, `denomination`, `year`, `weight`, `price`) VALUES ('Stork', 'Unique coin with the image of a flying stork. French coin at 2 two francs 1997.', 'Two francs by Georges Gynemer - a commemorative coin of two French francs, issued in 1997 in honor of the famous pilot of the First World War, Georges Gynemer, on the occasion of the 80th anniversary of the officer cross of the Legion of Honor and his death: shot down in flight by a German plane.', 'https://firebasestorage.googleapis.com/v0/b/lahiye5.appspot.com/o/Stork_1.png?alt=media&token=1cc7a9a0-89e8-476c-b747-48605401300c', 'https://firebasestorage.googleapis.com/v0/b/lahiye5.appspot.com/o/Stork_2.png?alt=media&token=9d984f6b-df76-473b-aaad-7f72a291f3c9', '1', 'France', 'steel', 'BU', '2 francs', '1997', ' 6.57', '54');
// INSERT INTO `final_project`.`coins` (`title`, `short_desc`, `description`, `image`, `image2`, `category_id`, `issuing_country`, `composition`, `quality`, `denomination`, `year`, `weight`, `price`) VALUES ('Gyeonggi', '\"Gyeonggi\". Coin with the image of five kangaroos - symbols of Australia.', 'The first Australian coin with a nominal value of 1 dollar was introduced on May 13, 1984 to replace a one-dollar banknote.', 'https://firebasestorage.googleapis.com/v0/b/lahiye5.appspot.com/o/Gyeonggi_1.png?alt=media&token=1122968f-4dba-4581-838e-a1c2e5b93049', 'https://firebasestorage.googleapis.com/v0/b/lahiye5.appspot.com/o/Gyeonggi_2.png?alt=media&token=29e49400-db28-4e5e-bbee-b595c8373e2b', '1', ' Australia', 'gold', 'BU', '1 dollar', '1984', '4.76', '97');
// INSERT INTO `final_project`.`coins` (`title`, `short_desc`, `description`, `image`, `image2`, `category_id`, `issuing_country`, `composition`, `quality`, `denomination`, `year`, `weight`, `price`) VALUES ('Bolivian Peso', 'Boliviano Coin with the image of Bolivia.', 'By 1987, the Bolivian peso had completely depreciated and was replaced by a new boliviano during another monetary reform.', 'https://firebasestorage.googleapis.com/v0/b/lahiye5.appspot.com/o/Bolivian%20Peso_1.png?alt=media&token=57f3fc8f-433e-4194-b91e-cb57dacf9e42', 'https://firebasestorage.googleapis.com/v0/b/lahiye5.appspot.com/o/Bolivian%20Peso_2.png?alt=media&token=5d3b9d97-eac5-4751-b02c-fb7c76f48ea0', '1', ' Bolivia', 'steel', 'BU', '1 PESO', '1988', '3.62', '54');
// INSERT INTO `final_project`.`coins` (`title`, `short_desc`, `description`, `image`, `image2`, `category_id`, `issuing_country`, `composition`, `quality`, `denomination`, `year`, `weight`, `price`) VALUES ('Botswana', '\"Botswana\". Coin with the image of a bird.', 'Translated from Botswana, its name means “let it rain”', 'https://firebasestorage.googleapis.com/v0/b/lahiye5.appspot.com/o/Botswana_1.png?alt=media&token=b77dbf1d-14e8-4c9b-932e-99ff2f0b99f1', 'https://firebasestorage.googleapis.com/v0/b/lahiye5.appspot.com/o/Botswana_2.png?alt=media&token=df256b4d-c528-48ff-aef8-f4b5b2bfd516', '1', 'Botswana', 'steel', 'BU', '1 thebe', '1976', '4.28', '62');
// INSERT INTO `final_project`.`coins` (`title`, `short_desc`, `description`, `image`, `image2`, `category_id`, `issuing_country`, `composition`, `quality`, `denomination`, `year`, `weight`, `price`) VALUES ('Virginia', 'Virginia Coin with the image of a seahorse. Coin created during the reign of Elizabeth II', 'The obverse depicts Her Majesty Queen Elizabeth II. At the top of the coin is the inscription British Virgin Islands Queen Elizabeth II 2014.', 'https://firebasestorage.googleapis.com/v0/b/lahiye5.appspot.com/o/Virginia_1.png?alt=media&token=8af81899-d2b1-4262-bad2-1cb21e11cea7', 'https://firebasestorage.googleapis.com/v0/b/lahiye5.appspot.com/o/Virginia_2.png?alt=media&token=27dbc553-05a1-4f55-b9ab-3872e1a7b702', '1', 'British Virgin Islands', 'nickel', 'BU', '5 dollars', '2014', '6.98', '108');
// INSERT INTO `final_project`.`coins` (`title`, `short_desc`, `description`, `image`, `image2`, `category_id`, `issuing_country`, `composition`, `quality`, `denomination`, `year`, `weight`, `price`) VALUES ('Theobroma Cocoa', 'Coin with a lion in the center of the shield. Ghana coin, published in 1967.', 'The reverse depicts a runaway lion in the center of a shield divided into four parts, separating the date and the face value. The inscription at the top of the coin is TWENTY', 'https://firebasestorage.googleapis.com/v0/b/lahiye5.appspot.com/o/Theobroma%20Cocoa_1.png?alt=media&token=f245a6e0-881f-4904-a808-9ad2640391fc', 'https://firebasestorage.googleapis.com/v0/b/lahiye5.appspot.com/o/Theobroma%20Cocoa_2.png?alt=media&token=99c9a3b1-c458-4638-a3af-6371bd2015d3', '1', 'Ghana', 'steel', 'BU', '20 pesewas', '1962', '4.76', '54');
// INSERT INTO `final_project`.`coins` (`title`, `short_desc`, `description`, `image`, `image2`, `category_id`, `issuing_country`, `composition`, `quality`, `denomination`, `year`, `weight`, `price`) VALUES ('Coin of the Weimar Republic', 'The Hindenburg Coin with the coat of arms of the Weimar Republic.', 'On the obverse, in the center of the coin, at the top is the coat of arms of the Weimar Republic. In the center below is the coat of arms of the Hindenburg family. This is a shield divided into 4 fields - in the upper left and lower right corners there is a head of a bull.', 'https://firebasestorage.googleapis.com/v0/b/lahiye5.appspot.com/o/Coin%20of%20the%20Weimar%20Republic_1.png?alt=media&token=ee0a8804-0a90-49bc-bca0-ffced1551d0a', 'https://firebasestorage.googleapis.com/v0/b/lahiye5.appspot.com/o/Coin%20of%20the%20Weimar%20Republic_2.png?alt=media&token=5719ccd0-db03-492c-8c87-e95a09e42709', '1', 'the Weimar Republic', 'silver', 'BU', '5 Mark', '1927', '4.76', '142');
// INSERT INTO `final_project`.`coins` (`title`, `short_desc`, `description`, `image`, `image2`, `category_id`, `issuing_country`, `composition`, `quality`, `denomination`, `year`, `weight`, `price`) VALUES ('Scientist', 'Silver Egyptian coin with the image of the god Thoth. Silver Egyptian coin.', 'Face value one pound. It has been produced since 1981.', 'https://firebasestorage.googleapis.com/v0/b/lahiye5.appspot.com/o/Scientist_1.png?alt=media&token=75e1e4d1-5308-49cd-bc10-335c9f07f478', 'https://firebasestorage.googleapis.com/v0/b/lahiye5.appspot.com/o/Scientist_2.png?alt=media&token=cb55d5ac-d651-4b23-bcb8-fd1597669bc6', '1', 'Egypt', ' silver', 'BU', '1 pound', '1981', '3.95', '112');



// CREATE TABLE `final_project`.`text` (
//     `id` INT NOT NULL AUTO_INCREMENT,
//     `text_id` INT NOT NULL,
//     `context` TEXT(500) NULL,
//     PRIMARY KEY (`id`),
//     INDEX `text_id_idx` (`text_id` ASC) VISIBLE,
//     CONSTRAINT `text_id`
//       FOREIGN KEY (`text_id`)
//       REFERENCES `final_project`.`coins` (`id`)
//       ON DELETE NO ACTION
//       ON UPDATE NO ACTION);
  









// [[],[]]





// INSERT INTO `final_project`.`text` (`text_id`, `context`) VALUES ('1', 'In the center of the obverse is a portrait of Queen Elizabeth II, the profile is directed to the right. The inscription on the left semicircle (English) ELIZABETH II, on the right semicircle D · G · REGINA (ELIZABETH II QUEEN by the Grace of GOD) with dots. Below is a mint mark.');
// INSERT INTO `final_project`.`text` (`text_id`, `context`) VALUES ('1', 'In the center of the coin reverse is a Canadian beaver on a rock sticking out of the water. At the top is a semicircle with the inscription \"5 cents\" between two maple leaves. At the bottom in two lines is the inscription CANADA (CANADA) and the year of minting.');
// INSERT INTO `final_project`.`text` (`text_id`, `context`) VALUES ('2', 'The reverse of the coin depicts a black goat - a symbol of Canada and an inscription divided into the lower and upper semicircle \"Canadian dollar\".');
// INSERT INTO `final_project`.`text` (`text_id`, `context`) VALUES ('2', 'The obverse depicts Queen Elizabeth II. The inscription on the left semicircle (English) ELIZABETH II, on the right semicircle D · G · REGINA (ELIZABETH II QUEEN by the Grace of GOD) with dots. Below is the year of coinage.');
// INSERT INTO `final_project`.`text` (`text_id`, `context`) VALUES ('3', 'The obverse of the coin depicts a bust of the 3rd American president, Thomas Jefferson. The inscription on the right semicircle \"IN GOD WE TRUST\". Below is the inscription “FREEDOM” and the year of minting. Under the image of Jefferson was a monogram of an engraver. The initials of the engraver FS first appeared on coins in 1966.');
// INSERT INTO `final_project`.`text` (`text_id`, `context`) VALUES ('3', 'The reverse side shows the Jefferson Monticello estate, as well as the inscription: on the top - the motto “E PLURIBUS UNUM”, on the bottom - the inscriptions “MONTICELLO”, “FIVE CENTS” and “UNITED STATES OF AMERICA”.');
// INSERT INTO `final_project`.`text` (`text_id`, `context`) VALUES ('4', 'On November 22, 1963, in connection with the assassination of the 35th President John F. Kennedy in Dallas (Texas), it was decided to perpetuate the memory of President Kennedy on a coin.');
// INSERT INTO `final_project`.`text` (`text_id`, `context`) VALUES ('4', 'On the obverse to the right is a portrait of the 35th President of the United States, John F. Kennedy. Captions: FREEDOM / IN GOD WE TRUST / 1993.');
// INSERT INTO `final_project`.`text` (`text_id`, `context`) VALUES ('4', 'The reverse depicts the US state emblem (bald eagle with a shield) in the ring of stars. Captions: UNITED STATES OF AMERICA / E PLURIBUS UNUM / HALF DOLLAR.');
// INSERT INTO `final_project`.`text` (`text_id`, `context`) VALUES ('5', 'On May 3, 2012, the Department of the Treasury of Canada announced the cessation of production of a 1 cent coin. The latest issues of the famous 1-cent maple leaf were minted in 2012.');
// INSERT INTO `final_project`.`text` (`text_id`, `context`) VALUES ('5', 'On the reverse, in the center of the coin are two maple leaves (the symbol of Canada), the year of issue is 2012 on the left. The upper part of the coin shows the denomination: 1 cent (1 cent), in the lower part of the inscription in a semicircle: CANADA.');
// INSERT INTO `final_project`.`text` (`text_id`, `context`) VALUES ('5', 'On the obverse in the center of the coin on the right is a portrait of Queen Elizabeth II. Along the edge of the coin there is an inscription: Elizabeth II D G REGINA.');
// INSERT INTO `final_project`.`text` (`text_id`, `context`) VALUES ('6', 'Minted from 1793 to the present day.');
// INSERT INTO `final_project`.`text` (`text_id`, `context`) VALUES ('6', 'In 1959, on the 150th anniversary of the birth of Lincoln, the reverse design was changed. Instead of wheat spikelets, the image of the Lincoln Memorial was depicted on the coin. On the surviving copies you can see the image of the statue of the 16th American president between the columns. Coins of this type were minted in multi-billion copies until 2008.');
// INSERT INTO `final_project`.`text` (`text_id`, `context`) VALUES ('6', 'Another round date (200 years since the birth) was marked by the minting of 4 coins, which symbolized the periods of life of Abraham Lincoln.');
// INSERT INTO `final_project`.`text` (`text_id`, `context`) VALUES ('6', 'In 2010, the design of the coin was changed - the reverse depicts a shield with 13 vertical stripes, symbolizing the state and national unity.');
// INSERT INTO `final_project`.`text` (`text_id`, `context`) VALUES ('7', 'The obverse depicts Queen Elizabeth II. The caribou (reindeer) is depicted on the reverse.');
// INSERT INTO `final_project`.`text` (`text_id`, `context`) VALUES ('7', 'A modern design (with a deer) has been used since the time of King George VI, when the design of other Canadian coins also changed.');
// INSERT INTO `final_project`.`text` (`text_id`, `context`) VALUES ('7', 'Under previous kings, a different design was used for coins from 5 to 50 cents. On the reverse side was the name of the coin in small letters, framed by maple leaves, with a crown at the top.');
// INSERT INTO `final_project`.`text` (`text_id`, `context`) VALUES ('7', 'Ordinary quarters are minted with a caribou on the back.');
// INSERT INTO `final_project`.`text` (`text_id`, `context`) VALUES ('7', 'In 2004, Memorial Day was released. The reverse shows a poppy flower.');
// INSERT INTO `final_project`.`text` (`text_id`, `context`) VALUES ('8', 'The obverse of the coin depicts a portrait of the 32nd President of the United States, Franklin D. Roosevelt, and the reverse depicts a torch, oak and olive branches above the motto “E pluribus unum” - “Out of many.”');
// INSERT INTO `final_project`.`text` (`text_id`, `context`) VALUES ('8', 'After the death of Franklin Roosevelt in 1945, it was decided to put his image on a coin to perpetuate his memory. The choice of a coin denomination of 10 cents was due to the fact that in 1938 Roosevelt made a lot of efforts to create the National Fund Fund, which is half joking, and since 1979 it has been officially called the “March of ten cents”.');
// INSERT INTO `final_project`.`text` (`text_id`, `context`) VALUES ('9', 'Currency of the Republic of Vietnam in 1955-1975.');
// INSERT INTO `final_project`.`text` (`text_id`, `context`) VALUES ('9', 'On the front side, we see wheat, and on the back, a unit symbolizing money.');
// INSERT INTO `final_project`.`text` (`text_id`, `context`) VALUES ('9', 'The monetary unit of South Vietnam was originally the Indochinese piastre, issued by the Institute of Emissions of the States of Cambodia, Laos and Vietnam. Banknotes of the graduating institute were issued in three types: Cambodian, Lao and Vietnamese. The inscriptions on the banknotes of all samples were made in four languages: French, Khmer, Lao and Vietnamese. Vietnamese-style banknotes depicted a pattern, as well as the inscription “VIÊN PHÁT-HÀNH”. Piastres previously issued by the French Bank of Indochina were also in circulation.');
// INSERT INTO `final_project`.`text` (`text_id`, `context`) VALUES ('10', 'On one side of the coin is the head of King George VI, turned to the left. Also at the top in a semicircle is the inscription GEORGIVS SEXTVS REX.');
// INSERT INTO `final_project`.`text` (`text_id`, `context`) VALUES ('10', 'On the other side of the coin is an Antelope. Around it is the inscription SOUTH AFRICA 1952 SUID AFRICA, dotted with dots. Below is the nominal value.');
// INSERT INTO `final_project`.`text` (`text_id`, `context`) VALUES ('11', 'Coin 1 crown was issued from August 1, 1934 to March 25, 1941, during the first period of Estonia’s independence.');
// INSERT INTO `final_project`.`text` (`text_id`, `context`) VALUES ('11', 'On the obverse of the coin in the center is a large state seal, the emblem of Estonia, crowned with an arched text with the inscription “Eesti Vabariik”, and on the lower edge - the year of issue “1934”.');
// INSERT INTO `final_project`.`text` (`text_id`, `context`) VALUES ('11', 'The reverse depicts a Viking ship Knarr in the sea, under which appears the inscription 1 crown.');
// INSERT INTO `final_project`.`text` (`text_id`, `context`) VALUES ('11', 'In 2012, a single crown coin.');
// INSERT INTO `final_project`.`text` (`text_id`, `context`) VALUES ('11', '1934 was recognized as \"the most beautiful coin ever circulated in Estonia.\"');
// INSERT INTO `final_project`.`text` (`text_id`, `context`) VALUES ('12', 'On the reverse of the coin in its central part there is an inscription in French: \"2 francs\" - 2 francs, framed by a five-pointed star. Along the edge from left to right there is an inscription in French and Dutch in two lines: “BANQUE DU CONGO BELGE”, “BANQUE VAN BELGISCH CONGO” - Bank of the Belgian Congo. The edge of the coin is decorated with decorative teeth.');
// INSERT INTO `final_project`.`text` (`text_id`, `context`) VALUES ('12', 'On the reverse of the coin in the central part is a walking elephant. The year of minting is located under it: 1947. The edge is uneven.');
// INSERT INTO `final_project`.`text` (`text_id`, `context`) VALUES ('13', 'Two francs by Georges Gynemer - a commemorative coin of two French francs, issued in 1997 in honor of the famous pilot of the First World War, Georges Gynemer, on the occasion of the 80th anniversary of the officer cross of the Legion of Honor and his death: shot down in flight by a German plane.');
// INSERT INTO `final_project`.`text` (`text_id`, `context`) VALUES ('13', 'They are painted by engravers of the workshop of coins and medals under the direction of the general engraver of coins Pierre Rodier 4.');
// INSERT INTO `final_project`.`text` (`text_id`, `context`) VALUES ('13', 'The obverse depicts a portrait of Georges Gainemer in a flight suit and pilot\'s glasses, raised to his forehead. The inscription GEORGES GUYNEMER 1894-1917 in a semicircle at the top of the coin. And also the year of release below.');
// INSERT INTO `final_project`.`text` (`text_id`, `context`) VALUES ('13', 'The reverse shows a flying stork. Also below the arc is the inscription LIBERTÉ ÉGALITÉ FRATERNITÉ, separated by dots. And the face value at the top of the coin.');
// INSERT INTO `final_project`.`text` (`text_id`, `context`) VALUES ('14', 'The first Australian coin with a nominal value of 1 dollar was introduced on May 13, 1984 to replace a one-dollar banknote.');
// INSERT INTO `final_project`.`text` (`text_id`, `context`) VALUES ('14', 'The portraits of Elizabeth II on the obverse of the 1984, 1985 and 1988 coins were made by Arnold Machin, and on the 1999 coins by Ian Rank-Broadley.');
// INSERT INTO `final_project`.`text` (`text_id`, `context`) VALUES ('14', 'The reverse of the coin depicts five kangaroos symbolizing Australia. The drawing was designed by Stuart Devlin in 1966.');
// INSERT INTO `final_project`.`text` (`text_id`, `context`) VALUES ('14', 'The first Australian $ 1 coin was introduced on May 13, 1984 to replace a one-dollar bill.');
// INSERT INTO `final_project`.`text` (`text_id`, `context`) VALUES ('14', 'This is currently the most common coin denomination in Australia.');
// INSERT INTO `final_project`.`text` (`text_id`, `context`) VALUES ('15', 'By 1987, the Bolivian peso had completely depreciated and was replaced by a new boliviano during another monetary reform.');
// INSERT INTO `final_project`.`text` (`text_id`, `context`) VALUES ('15', 'Old banknotes were printed and used as a \"bargaining chip.\" And in 1988, they began to mint a real coin.');
// INSERT INTO `final_project`.`text` (`text_id`, `context`) VALUES ('15', 'This currency is still in circulation.');
// INSERT INTO `final_project`.`text` (`text_id`, `context`) VALUES ('15', 'At the top of one of the sides of the coin in a semicircle is the inscription REPUBLICADE BOLIVIA. At the bottom of the coin, an arc depicts 10 stars.');
// INSERT INTO `final_project`.`text` (`text_id`, `context`) VALUES ('15', 'Above, on the other side of the coin, the inscription PESO BOLIVIANO is located in an arc. In the middle is an image of face value. At the bottom of the year, framed on both sides by branches.');
// INSERT INTO `final_project`.`text` (`text_id`, `context`) VALUES ('16', 'Coin of state of Botswana 1976.');
// INSERT INTO `final_project`.`text` (`text_id`, `context`) VALUES ('16', 'Translated from Botswana, its name means “let it rain”');
// INSERT INTO `final_project`.`text` (`text_id`, `context`) VALUES ('16', 'After gaining independence from the United Kingdom in 1966, Botswana was a member of currency unions.');
// INSERT INTO `final_project`.`text` (`text_id`, `context`) VALUES ('16', 'In 2005, as a result of inflation, the currency fell by 12%, but it still remains one of the “strong” currencies on the African continent.');
// INSERT INTO `final_project`.`text` (`text_id`, `context`) VALUES ('17', 'The obverse depicts Her Majesty Queen Elizabeth II. At the top of the coin is the inscription British Virgin Islands Queen Elizabeth II 2014.');
// INSERT INTO `final_project`.`text` (`text_id`, `context`) VALUES ('17', 'The reverse depicts a beautiful seahorse with a tail wrapped around a coral.');
// INSERT INTO `final_project`.`text` (`text_id`, `context`) VALUES ('17', 'The choice of seahorse reflects the marine heritage of the British Virgin Islands. The British Virgin Islands, located in the Caribbean Sea and consisting of more than 60 islands, are known for their coral reefs, which are home to a wide variety of animal species, including seahorses.');
// INSERT INTO `final_project`.`text` (`text_id`, `context`) VALUES ('17', 'Seahorse is the name given to 54 species of marine fish in the genus Hippocampus, which comes from the ancient Greek hippos, which means “horse”, and Campos - “sea monster”.');
// INSERT INTO `final_project`.`text` (`text_id`, `context`) VALUES ('18', 'The reverse depicts a runaway lion in the center of a shield divided into four parts, separating the date and the face value. The inscription at the top of the coin is TWENTY');
// INSERT INTO `final_project`.`text` (`text_id`, `context`) VALUES ('18', 'As for the images inside the coat of arms:');
// INSERT INTO `final_project`.`text` (`text_id`, `context`) VALUES ('18', 'The Golden Lion and George intersect in the center (a permanent connection between Ghana and the Commonwealth of Nations).');
// INSERT INTO `final_project`.`text` (`text_id`, `context`) VALUES ('19', 'On the obverse, in the center of the coin, at the top is the coat of arms of the Weimar Republic. In the center below is the coat of arms of the Hindenburg family. This is a shield divided into 4 fields - in the upper left and lower right corners there is a head of a bull.');
// INSERT INTO `final_project`.`text` (`text_id`, `context`) VALUES ('19', 'On the reverse side is a portrait of Paul von Hindenburg (1847–1934), Field Marshal, President of the Weimar Republic in 1925–1934 (right). Along the edge of the coin is a semicircle of date: 1847-1927 and the inscription: * * REICHSPRASIDENT * VON * HINDENBURG •. At the bottom left of the portrait is a letter denoting a German mint.');
// INSERT INTO `final_project`.`text` (`text_id`, `context`) VALUES ('20', 'Face value one pound. It has been produced since 1981.');
// INSERT INTO `final_project`.`text` (`text_id`, `context`) VALUES ('20', 'The coin shows the name of the country and its meaning in Arabic. Also depicted is the Egyptian god Thoth.');
// INSERT INTO `final_project`.`text` (`text_id`, `context`) VALUES ('20', 'On the other side is a travel plate left by a radiant sun gear and splatter.');
// INSERT INTO `final_project`.`text` (`text_id`, `context`) VALUES ('20', 'The Egyptian pound is often shortened as LE or L. E., which means livre égyptienne (French for Egyptian pound).');
// INSERT INTO `final_project`.`text` (`text_id`, `context`) VALUES ('21', 'It depicts the lion Ashok on his pedestal. It is surrounded by the inscription of the name of the country in two languages, meaning and date, surrounded by stylized stalks of grain.');
// INSERT INTO `final_project`.`text` (`text_id`, `context`) VALUES ('21', 'The rupee (from Sanskrit silver) is an Indian historical silver coin, put into circulation in the 15th century, as well as the monetary unit of a number of countries in South Asia.');
// INSERT INTO `final_project`.`text` (`text_id`, `context`) VALUES ('21', 'After the British conquest of Burma in 1852, the Indian rupee became its currency.');
// INSERT INTO `final_project`.`text` (`text_id`, `context`) VALUES ('21', 'In 1938, Burma became an independent British colony.');
// INSERT INTO `final_project`.`text` (`text_id`, `context`) VALUES ('21', 'A year earlier, the release of the Burmese rupee, which lasted until 1952, began.');
// INSERT INTO `final_project`.`text` (`text_id`, `context`) VALUES ('21', 'In 1952, the Burmese rupee was replaced by a kyat.');
// INSERT INTO `final_project`.`text` (`text_id`, `context`) VALUES ('21', 'The rupee remained the currency of Portuguese possessions in India until 1959, when it was replaced by the escudos of Portuguese India.');
// INSERT INTO `final_project`.`text` (`text_id`, `context`) VALUES ('22', 'It depicts a bust of Reza Shah, whose head is turned to the right.');
// INSERT INTO `final_project`.`text` (`text_id`, `context`) VALUES ('22', 'On the other side is a lion with a saber in front of the radiant sun. Above it is a crown.');
// INSERT INTO `final_project`.`text` (`text_id`, `context`) VALUES ('22', 'Before the monetary reform of 1932, the currency of Iran was fog. (1 fog = 10 clicks, 1 crane = 1000 dinars.)');
// INSERT INTO `final_project`.`text` (`text_id`, `context`) VALUES ('22', 'Currently, the name \"fog\" is used to denote the amount of 10 reais.');
// INSERT INTO `final_project`.`text` (`text_id`, `context`) VALUES ('23', 'Initially, the krone consisted of 100 Eire (ISL. EYRIR, MN. CH. ISL. Aurar), but since January 1, 1995 Eire has not been used in monetary circulation.');
// INSERT INTO `final_project`.`text` (`text_id`, `context`) VALUES ('23', 'From January 1, 1999, in accordance with Law No. 36 of April 27, 1998, amounts must be rounded to 50 Eire.');
// INSERT INTO `final_project`.`text` (`text_id`, `context`) VALUES ('23', 'Coin minting in Krona began in 1925.');
// INSERT INTO `final_project`.`text` (`text_id`, `context`) VALUES ('23', 'Initially, all coins had a monogram of King Christian X.');
// INSERT INTO `final_project`.`text` (`text_id`, `context`) VALUES ('23', 'Iceland was declared a Republic in 1944, and in 1946 it began to mint coins without royal symbols.');
// INSERT INTO `final_project`.`text` (`text_id`, `context`) VALUES ('23', 'Icelandic coins were minted by the Royal Mint of Denmark, the Royal Mint of Great Britain and a private mint in Birmingham.');
// INSERT INTO `final_project`.`text` (`text_id`, `context`) VALUES ('24', 'An octagonal star with dots is depicted on one side of the coin.');
// INSERT INTO `final_project`.`text` (`text_id`, `context`) VALUES ('24', 'On the other side, a sailboat divides bills into English and Arabic.');
// INSERT INTO `final_project`.`text` (`text_id`, `context`) VALUES ('24', 'Until 1951, Indian rupee and East African shilling traded in the British colony of Aden.');
// INSERT INTO `final_project`.`text` (`text_id`, `context`) VALUES ('24', 'In 1951, East African shilling was declared the only legal tender in Aden.');
// INSERT INTO `final_project`.`text` (`text_id`, `context`) VALUES ('24', 'In 1959, the Federation of the United Arab Emirates of the South was formed, which was transformed into the Federation of South Arabia in 1962.');
// INSERT INTO `final_project`.`text` (`text_id`, `context`) VALUES ('24', 'Aden joined the Federation in 1963.');
// INSERT INTO `final_project`.`text` (`text_id`, `context`) VALUES ('24', 'In April 1965, the South Arabian Dinar was issued and published by the South Arabian Monetary Authority.');
// INSERT INTO `final_project`.`text` (`text_id`, `context`) VALUES ('24', 'East African shillings were exchanged for dinars until July 1, 1965 at a ratio of 20 shillings = 1 dinar.');
// INSERT INTO `final_project`.`text` (`text_id`, `context`) VALUES ('24', 'Dinar was equated to pound.');
// INSERT INTO `final_project`.`text` (`text_id`, `context`) VALUES ('25', 'On one side of the coin is a woman sitting on a stone. Doves fly around her');
// INSERT INTO `final_project`.`text` (`text_id`, `context`) VALUES ('25', 'On the other side is a Chinese weapon with stars.');
// INSERT INTO `final_project`.`text` (`text_id`, `context`) VALUES ('25', 'Today, the term \"yuan\" usually refers to the main unit of account of the renminbi (renminbi), the currency of the People’s Republic of China.');
// INSERT INTO `final_project`.`text` (`text_id`, `context`) VALUES ('25', 'Yuan banknotes start at one yuan and go up to 100 yuan.');
// INSERT INTO `final_project`.`text` (`text_id`, `context`) VALUES ('25', 'The yuan symbol is also used in Chinese to denote the monetary units of Japan (yen) and Korea (won) and is used to convert the currency to the dollar, as well as to some other currencies; for example, the US dollar is called in Chinese meiyuan.');
// INSERT INTO `final_project`.`text` (`text_id`, `context`) VALUES ('26', 'It depicts a Chinese alligator on the banks of the river.');
// INSERT INTO `final_project`.`text` (`text_id`, `context`) VALUES ('26', 'On the other side is a Chinese weapon with stars. It is surrounded by hieroglyphs and a coin release date.');
// INSERT INTO `final_project`.`text` (`text_id`, `context`) VALUES ('27', 'On one side of the coin are two pandas. At the top of the coin are Chinese characters in an arc.');
// INSERT INTO `final_project`.`text` (`text_id`, `context`) VALUES ('27', 'On the other side is a Chinese weapon with stars, surrounded by hieroglyphs. Below is written the year of release.');
// INSERT INTO `final_project`.`text` (`text_id`, `context`) VALUES ('27', 'Chinese Golden Panda, launched in 1982.');
// INSERT INTO `final_project`.`text` (`text_id`, `context`) VALUES ('27', 'Coins (front side) remain unchanged since 1992');
// INSERT INTO `final_project`.`text` (`text_id`, `context`) VALUES ('27', 'There is also a Silver Panda investment coin series, made in a similar design.');
// INSERT INTO `final_project`.`text` (`text_id`, `context`) VALUES ('28', 'On one side of the coin is a shield with a sailing ship in front of the mountains. Below is the release date of the coin.');
// INSERT INTO `final_project`.`text` (`text_id`, `context`) VALUES ('28', 'On the other side of the coin is a manatee among algae.');
// INSERT INTO `final_project`.`text` (`text_id`, `context`) VALUES ('28', 'The Costa Rican coin is the monetary unit of Costa Rica.');
// INSERT INTO `final_project`.`text` (`text_id`, `context`) VALUES ('28', 'Until 2017, the All-Russian classifier of currencies is the \"Costa Rican Colony\".');
// INSERT INTO `final_project`.`text` (`text_id`, `context`) VALUES ('29', 'On one side of the coin are 3 chicks in a nest, symbolizing the International Year of Children.');
// INSERT INTO `final_project`.`text` (`text_id`, `context`) VALUES ('29', 'On the other side is a shield with a sailing ship in front of the mountains, the shining sun behind the mountains.');
// INSERT INTO `final_project`.`text` (`text_id`, `context`) VALUES ('29', 'In circulation are banknotes: 1000 columns of series A and B (red, polymer), 2000 columns (blue with a shark of Mauro Fernandez on one side and a bull shark on the back), 5000 columns of series A and B (yellow with Alfredo González Flores) with one side and capuchin monkeys on the back), 10,000 columns (green), 20,000 columns and 50,000 columns.');
// INSERT INTO `final_project`.`text` (`text_id`, `context`) VALUES ('29', 'In the monetary circulation of the country are coins in denominations of 500, 100, 50, 25, 20, 10, 5 and 1 column.');
// INSERT INTO `final_project`.`text` (`text_id`, `context`) VALUES ('30', 'Portuguese silver coin in 5 five escudos. It has been produced since 1933.');






// CREATE TABLE `final_project`.`users` (
//     `iduser` INT NOT NULL AUTO_INCREMENT,
//     `role` VARCHAR(255) NULL,
//     `email` VARCHAR(255) NULL,
//     `password` VARCHAR(255) NULL,
//     PRIMARY KEY (`iduser`));


// INSERT INTO `final_project`.`users` (`role`, `email`, `password`) VALUES ('admin', 'admin@mail.ru', 'admin');

  