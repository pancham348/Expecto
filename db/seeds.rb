Business.create!([
  {name: "The Leaky Cauldron", location: "London, England", rating: 3, description: nil, category: "Food", neighborhood: "Diagon Alley", img_url: "http://vignette4.wikia.nocookie.net/harrypotter/images/9/90/Leakycauldron.jpg/revision/latest?cb=20070322230842", latitude: 51.5, longitude: 0.128},
  {name: "Gringotts", location: "London, England", rating: 2, description: nil, category: "Banks", neighborhood: "Diagon Alley", img_url: "http://www.insidethemagic.net/wp-content/uploads/2014/05/Gringotts-Wizarding-Bank.jpg", latitude: 51.5, longitude: 0.128},
  {name: "Ollivanders", location: "London, England", rating: 4, description: nil, category: "shops", neighborhood: "Diagon Alley", img_url: "http://www.parkaholic.com/wp-content/uploads/2014/05/ollivanders-diagon-2.jpg", latitude: 51.5, longitude: 0.128},
  {name: "Weasley's Wizard Wheezes", location: "London, England", rating: 5, description: nil, category: "shops", neighborhood: "Diagon Alley", img_url: "http://img3.wikia.nocookie.net/__cb20090702101723/harrypotter/images/d/dd/Exterior_of_Weasleys_Wizards_Wheezes_shop.JPG", latitude: 51.5, longitude: 0.128},
  {name: "Flourish and Blotts", location: "London, England", rating: 3, description: nil, category: "shops", neighborhood: "Diagon Alley", img_url: "http://img3.wikia.nocookie.net/__cb20091122081601/harrypotter/images/5/50/Flourish_and_Blotts_(interior).jpg", latitude: 51.5, longitude: nil},
  {name: "Eeylops Owl Emporium", location: "London, England", rating: 4, description: nil, category: "shops", neighborhood: "Diagon Alley", img_url: "http://vignette2.wikia.nocookie.net/harrypotter/images/7/7c/Diagon_Alley_-_Eeylops_Owl_Emporium.jpg/revision/latest/scale-to-width/250?cb=20090226093127", latitude: 51.5, longitude: 0.128},
  {name: "Sugarplum Sweet Shop", location: "London, England", rating: 5, description: nil, category: "Food", neighborhood: "Diagon Alley", img_url: "http://img3.wikia.nocookie.net/__cb20090607004755/harrypotter/images/d/d2/Sugarplum'sSweetShop.jpg", latitude: 51.5, longitude: 0.128},
  {name: "Three Broomsticks Inn", location: "Dufftown, Scotland", rating: 3, description: nil, category: "Food", neighborhood: "Hogsmeade", img_url: "http://coolspotters.com/files/photos/748548/the-three-broomsticks-profile.jpg?1357431288", latitude: 57.45, longitude: 3.13},
  {name: "Honeydukes", location: "Dufftown, Scotland", rating: 3, description: nil, category: "Food", neighborhood: "Hogsmeade", img_url: "http://img2.wikia.nocookie.net/__cb20121221185031/megarp/images/a/a5/Honeydukes.jpg", latitude: 57.51, longitude: 3.08}
])
Photo.create!([
  {img_src: "https://www.filepicker.io/api/file/FY8D9RySQre5wqjPsOI7", caption: "view from outside", business_id: 4, user_id: 1},
  {img_src: "https://www.filepicker.io/api/file/sLhaEDSP62LZ39g6VPAe", caption: "the founders", business_id: 6, user_id: 1}
])
Review.create!([
  {rating: 4, content: "This is the best place to buy wands.", user_id: 1, business_id: 5},
  {rating: 2, content: "Did not have good experiences here", user_id: 2, business_id: 4},
  {rating: 4, content: "no other choice for banking in the wizarding worlds", user_id: 1, business_id: 4},
  {rating: 4, content: "Best place to buy school books", user_id: 1, business_id: 7},
  {rating: 4, content: "Best pub in the alley!", user_id: 1, business_id: 3},
  {rating: 3, content: "sadas", user_id: 2, business_id: 3},
  {rating: 1, content: "pretty cool store", user_id: 1, business_id: 6},
  {rating: 1, content: "Best book shop in the world!", user_id: 2, business_id: 7},
  {rating: 1, content: "This is where I bought my first wand", user_id: 2, business_id: 5},
  {rating: 5, content: "awesome store!", user_id: 2, business_id: 8},
  {rating: 4, content: "pretty good store!", user_id: 1, business_id: 9},
  {rating: 3, content: "They serve some of the best food in Hogsmeade!", user_id: 1, business_id: 8}
])
User.create!([
  {username: "pancham348@gmail.com", password_digest: "$2a$10$C1RSGsQTtqCeqjmw5zFvXeVkTrO2LBiGSeDjOFAd4ManXMtcwCGqW", first_name: "Pancham", last_name: "Mehrunkar", location: nil, session_token: "Oeg6n3nZBIrRf4qcuMKeDA", img_src: "https://www.filepicker.io/api/file/jfYiK95gSbKmLXMSri5v"},
  {username: "hp7", password_digest: "$2a$10$aWhx1DqjUGjQvoCRgHjDCOBnXiN7/f0fZu56JAitklkxEJTOlpJCy", first_name: "Harry", last_name: "Potter", location: "Hogwarts", session_token: "G-VZAaxvR1tqsxutq_dJug", img_src: "https://www.filepicker.io/api/file/FdvSDpelSiW7XVxhEQVb"}
])
