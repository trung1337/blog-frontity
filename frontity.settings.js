const settings = {
  "name": "my-first-frontity-project",
  "state": {
    "frontity": {
      "url": "https://blogfrontity.wordpress.com/",
      "title": "blog information in the world",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "football",
              "football"
            ],
            [
              "Animal",
              "/animals"
            ],
            [
              "Tree",
              "/category/travel/"
            ],
            [
              "Travel",
              "/tag/japan/"
            ],
            [
              "About Us",
              "/about-us/"
            ]
           
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://blogfrontity.wordpress.com/",
        }
      }
    },
   
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
