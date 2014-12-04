Business.create!([
  {name: "The Leaky Cauldron", location: "London, England", rating: 3, description: "Step inside the famous Diagon Alley™ pub and fill up on traditional British food including cottage pie, fish and chips, and bangers and mash. And of course, you can enjoy a frothy Butterbeer™.", category: "Food", neighborhood: "Diagon Alley", img_url: "http://vignette4.wikia.nocookie.net/harrypotter/images/9/90/Leakycauldron.jpg/revision/latest?cb=20070322230842", latitude: 51.5, longitude: 0.128},
  {name: "Gringotts", location: "London, England", rating: 2, description: "Gringotts Wizarding Bank is the only bank of the wizarding world, and is owned and operated by goblins. It was created by a goblin called Gringott, in 1474. Its main offices are located in the North Side of Diagon Alley in London, England. In addition to storing money and valuables for wizards and witches, one can go there to exchange Muggle money for wizarding money. The currency exchanged by Muggles is later returned to circulation in the Muggle world by goblins.[1] According to Rubeus Hagrid, other than Hogwarts School of Witchcraft and Wizardry, Gringotts is the safest place in the wizarding world.", category: "Banks", neighborhood: "Diagon Alley", img_url: "http://www.insidethemagic.net/wp-content/uploads/2014/05/Gringotts-Wizarding-Bank.jpg", latitude: 51.5, longitude: 0.128},
  {name: "Ollivanders", location: "London, England", rating: 4, description: "Visit Ollivanders™, Makers of Fine Wands since 382 B.C. Step into the small dusty shop and gaze up at countless wand boxes stacked to the ceiling. Here, in a unique interactive experience, you can see a wand choose a wizard. You can purchase your own Ollivanders wand, or choose from a selection including Harry Potter film character wand replicas, Collectible wand sets and more.", category: "shops", neighborhood: "Diagon Alley", img_url: "http://www.parkaholic.com/wp-content/uploads/2014/05/ollivanders-diagon-2.jpg", latitude: 51.5, longitude: 0.128},
  {name: "Weasley's Wizard Wheezes", location: "London, England", rating: 5, description: "Weasleys' Wizard Wheezes, also known as Weasley and Weasley[1] is a joke shop located at Number 93 Diagon Alley founded by Fred and George Weasley.
The shop contains practical joke objects, such as; Extendable Ears, a Reusable Hangman, Skiving Snackboxes, and Fred and George's special WonderWitch products, such as; Love Potions, Ten-Second Pimple Vanishers, and  Pygmy Puffs. There is also a section of Muggle Magic Tricks, which are said to do steady business, despite not being big sellers. The shop also sells a number of defensive magical objects.", category: "shops", neighborhood: "Diagon Alley", img_url: "http://img3.wikia.nocookie.net/__cb20090702101723/harrypotter/images/d/dd/Exterior_of_Weasleys_Wizards_Wheezes_shop.JPG", latitude: 51.5, longitude: 0.128},
  {name: "Flourish and Blotts", location: "London, England", rating: 3, description: "Flourish and Blotts Bookseller is a bookshop in North Side, Diagon Alley. Established in 1454, it is where most Hogwarts students purchase their schoolbooks. The shop has had a few problems with certain books, such as The Invisible Book of Invisibility which cost them a great deal of money though they never found them, and The Monster Book of Monsters which tore each other up as well as biting the manager when he tried to get one out. Flourish and Blotts also runs a service, which enables purchasers to buy books via owl delivery.[2] They also take advance orders for book that are in high demand, such as The Life and Lies of Albus Dumbledore.", category: "shops", neighborhood: "Diagon Alley", img_url: "http://img3.wikia.nocookie.net/__cb20091122081601/harrypotter/images/5/50/Flourish_and_Blotts_(interior).jpg", latitude: 51.5, longitude: 0.128},
  {name: "Eeylops Owl Emporium", location: "London, England", rating: 4, description: "The London store was located at 521 Diagon Alley,[2] on the North Side of Diagon Alley. It was described as being relatively small, and dark inside, probably because owls are nocturnal creatures. On the outside of the shop, many different colours and species of owls hung in cages, watching all of the passersby.
", category: "shops", neighborhood: "Diagon Alley", img_url: "http://vignette2.wikia.nocookie.net/harrypotter/images/7/7c/Diagon_Alley_-_Eeylops_Owl_Emporium.jpg/revision/latest/scale-to-width/250?cb=20090226093127", latitude: 51.5, longitude: 0.128},
  {name: "Sugarplum Sweet Shop", location: "London, England", rating: 5, description: "Sugarplum's Sweet Shop is a sweetshop in Diagon Alley. It sells magical sweets like Cauldron Cakes, Liquorice Wands, and Pumpkin Pasties.", category: "Food", neighborhood: "Diagon Alley", img_url: "http://img3.wikia.nocookie.net/__cb20090607004755/harrypotter/images/d/d2/Sugarplum'sSweetShop.jpg", latitude: 51.5, longitude: 0.128},
  {name: "Three Broomsticks Inn", location: "Dufftown, Scotland", rating: 3, description: "The inn is often warm, crowded, and a bit smoky, but clean and welcoming. A mirror behind the bar reflects the cosy atmosphere, and drinks such as Butterbeer and Firewhiskey are served in glasses and in foaming pewter tankards, as well as gillywater, mulled mead, red currant rum, and even cherry syrup and soda with ice and an umbrella. The Three Broomsticks is owned and operated by Madam Rosmerta.", category: "Food", neighborhood: "Hogsmeade", img_url: "http://coolspotters.com/files/photos/748548/the-three-broomsticks-profile.jpg?1357431288", latitude: 57.45, longitude: -3.13},
  {name: "Honeydukes", location: "Dufftown, Scotland", rating: 3, description: "A must-stop for visitors to Hogsmeade™, at Honeydukes™ the shelves are lined with all manner of colorful sweets, including Acid Pops, exploding bonbons, Cauldron Cakes, treacle fudge, Fizzing Whizzbees, and Chocolate Frogs, which contain a wizard trading card in each box. Inside the shop you can fill up a bag of Bertie Bott’s Every-Flavour Beans™… who knows what tasty (or not so tasty) flavors you’ll discover! The shop also offers other classic favorites such as chocolates and fudge.", category: "Food", neighborhood: "Hogsmeade", img_url: "http://img2.wikia.nocookie.net/__cb20121221185031/megarp/images/a/a5/Honeydukes.jpg", latitude: 57.51, longitude: -3.08}
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
