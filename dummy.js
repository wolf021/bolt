export const categories = [
    {
      id: 1,
      
      name: "Tops",
      image: require('./assets/mens.png'),
      icon: "mobile",
      color:"grey"
    },
    {
      id: 2,
      name: "Sweaters",
      image: require('./assets/jacket.png'),
      icon: "shirtsinbulk",
      color:"lightblue"
    },
    {
      id: 3,
      name: "Jeans",
      image: require('./assets/womans.png'),
      icon: "book",
      color:"brown"
    },
    {
      id: 4,
      name: "Pants",
      image: require('./assets/track.png'),
      icon: "warehouse",
      color:"#4D5855"
    },
    {
      id: 5,
      name: "Bags",
      image: require('./assets/shopping-bags.png'),
      icon: "warehouse",
      color:"#4D5855"
    },
  ];
  

   export const products= [
      {
        "name": "Women's Tank Top",
        "category": "Tops",
        "size": ["XS", "S", "M", "L", "XL"],
        "price": 15,
        "sale":10.22,
        "images": [
          "https://cdn.shopify.com/s/files/1/0082/3944/8160/products/190A6624_900x.jpg?v=1661432872",
          "https://cdn.shopify.com/s/files/1/0082/3944/8160/products/190A6624_900x.jpg?v=1661432872",
          
        ],
        "description": "A lightweight and comfortable tank top for women."
      },
      {
        "name": "Men's Button-Down Shirt",
        "category": "Tops",
        "size": ["S", "M", "L", "XL"],
        "price": 30,
        "sale": 25,
        "images": [
          "https://scene7.zumiez.com/is/image/zumiez/cat_max/Empyre-Rose-Thorns-Black-Woven-Short-Sleeve-Button-up-Shirt-_314860.jpg",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPlI3CprGYuIPaFhhkgZDA67-EaLiDHR7wpR_G4GeKi6iqvwAN2lvHW8IIUPXFsk120Bc&usqp=CAU"
        ],
        "description": "A classic men's button-down shirt made of high-quality cotton."
      },
      {
        "name": "Women's Blouse",
        "category": "Tops",
        "size": ["XS", "S", "M", "L", "XL"],
        "price": 25,
        "images": [
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsfi7lDZkTKYDb-lu2cWeSqNR6j61J6aUzL_hvb3_tEqhbs-4jSUD4v-YU6Qk9mXH5w0M&usqp=CAU",
          "https://n.nordstrommedia.com/id/sr3/580dbc54-5ef0-4eb1-aedf-86f1cc5b0610.jpeg?h=365&w=240&dpr=2"
        ],
        "description": "A stylish and versatile blouse for women."
      },
      {
        "name": "Men's T-Shirt",
        "category": "Tops",
        "size": ["S", "M", "L", "XL"],
        "price": 20,
        "images": [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_f8SezxaayfhGXgvMHsy5wkezhj-i-QI4mjfAfc3YzkwZwv9iDLuaL9w28gp1C6DJ5us&usqp=CAU",
          "https://m.media-amazon.com/images/I/51JncJXWtwL._AC_UL1068_.jpg",
        ],
        "description": "A comfortable and durable t-shirt for men."
      },
      {
        "name": "Men's T-Shirt",
        "category": "Tops",
        "size": ["S", "M", "L", "XL"],
        "price": 20,
        "sale": 10,
        "images": [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_f8SezxaayfhGXgvMHsy5wkezhj-i-QI4mjfAfc3YzkwZwv9iDLuaL9w28gp1C6DJ5us&usqp=CAU",
          "https://m.media-amazon.com/images/I/51JncJXWtwL._AC_UL1068_.jpg",
        ],
        "description": "A comfortable and durable t-shirt for men."
      },
      {
        "name": "Women's Cardigan",
        "category": "Sweaters",
        "size": ["S", "M", "L", "XL"],
        "price": 35,
        "images": [
          "https://m.media-amazon.com/images/I/614NIusWQtL._AC_UY679_.jpg",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0zUZ21Iq-BCoLBtENzf6GtwmgGeOlGKrVqUjYyR5HZp-oMzlsYvzBTvoRwnGu73Y6fSY&usqp=CAU"
        ],
        "description": "A cozy and warm cardigan for women."
      },
      {
        "name": "Men's Sweater",
        "category": "Sweaters",
        "size": ["S", "M", "L", "XL"],
        "price": 40,
        "images": [
          "https://cdn.shopify.com/s/files/1/0370/9586/6507/products/sweaterroyalblue.png?v=1669193032",
          "https://cdn.shopify.com/s/files/1/0370/9586/6507/products/sweaterroyalblue2_1512x.png?v=1669193032"
        ],
        "description": "A stylish and comfortable sweater for men."
      },
      {
        "name": "Women's Jeans",
        "category": "Jeans",
        "size": ["XS", "S", "M", "L", "XL"],
        "price": 50,
        "images": [
          "https://cdn.shopify.com/s/files/1/0268/9715/4090/products/3_7cfc37f0-024c-4537-b392-fe9ca7332560_1080x.webp?v=1677308976",
          "https://cdn.shopify.com/s/files/1/0268/9715/4090/products/2_4ca01648-6021-4bfa-8bf6-e5a9d46b5320_1080x.webp?v=1677308976",
          "https://cdn.shopify.com/s/files/1/0268/9715/4090/products/1_2bc5e8f0-7f33-4c1a-831f-30d4695942d9_1800x1800.webp?v=1677308973"
        ],
        "description": "A high-quality pair of jeans for women."
      },
      {
        "name": "Men's Pants",
        "category": "Pants",
        "size": ["S", "M", "L", "XL"],
        "price": 45,
        "sale":10.22,
        "description": "A high-quality pair of jeans for men.",
        "images":[
            "https://cdn.shopify.com/s/files/1/0268/9715/4090/products/DF2215-NVY_3_1080x.jpg?v=1669483005",
          "https://cdn.shopify.com/s/files/1/0268/9715/4090/products/DF2215-NVY_2_1080x.jpg?v=1669483005",
          "https://cdn.shopify.com/s/files/1/0268/9715/4090/products/DF2215-NVY_1_1080x.jpg?v=1669482982"
        ]
    },
      {
        "name": "Gucci Bag",
        "category": "Bags",
        "price": 45,
        "sale":10.22,
        "description": "A high-quality Bags.",
        "images":[
          "https://www.oldcobbler.ru/27720-large_default/gucci-ophidia-gg-small-shoulder-bag-brown-.jpg",
            "https://img.ssensemedia.com/images/221451F048058_1/gucci-beige-small-ophidia-gg-shoulder-bag.jpg",
          "https://media.gucci.com/style/DarkGray_Center_0_0_490x490/1564565408/598125_9IK3T_8745_003_080_0000_Light-Ophidia-GG-small-shoulder-bag.jpg"
        ]
    }
]
 