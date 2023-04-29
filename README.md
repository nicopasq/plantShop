# Plant Shop
## Project Description
For the phase-2 React project I decided to make a mock e-commerce website that uses a seller's point of view. The main navigable components are AddPlant, Flowers, and Cart.
When viewing the website the links for these components are, "Add a New Plant", "Shop", and "Cart" respectively. In order to use the "Add a New Plant" link, "Editor Mode" needs to be switched on.

---
## How to Use 
Interact with the links, cards, inputs, and buttons that are integrated into this app. 
### installation
To install ...
1. Fork and clone this repository.
2. Open the console, type npm install, then press Enter key.
3. type json-server --watch db.json, then press Enter key.
4. type npm start, then press Enter key.
---
## Description of Components
### App

        App is at the top most level, it's job is to update and determine what data needs to be displayed on AddPlant, Flowers, and Cart. App also holds the Switch and Route components for navigation. 
### PlantCard

        This component is used by Flowers and AddPlant, it creates a Grid item that holds a Card component for each plant object that is passed to it as a prop. The Grid item xs is a dynamic value, and is set with props. When a PlantCard component is clicked, it will send the user to the FlowerDetails page for that specific plant.
### Header

        Returns the blue header where "The Garden" logo is.
### NavBar

        Returns a MUI Drawer component that has links to Shop (Flowers), Cart, and Add a New Plant, there is also a switch labeled "Editor Mode". When "Editor Mode" is switched on, the link to Add a New Plant and a MUI SpeedDial component that is in FlowerDetails become useable.
### Flowers

        This component displays the plants on the "Shop" page. App sends a prop called plantList - which is an array of plants from the "flowers" resource in db.json - to Flowers, which will create a plantCard component for each plant in the list and then display it in a Grid. 
### FlowerDetails

        This is the page that is displayed when a PlantCard component is clicked. It displays information about a plant such as the image, name, price, category, and instructions for care of the plant. FlowerDetails also has buttons to add the plant to Cart, delete the plant, and update the plant. To delete and update the plant, Editor Mode needs to be switched on, then a SpeedDial will appear; this is where the buttons to delete and update are located. When "delete plant" is clicked the plant is removed from all pages that it's displayed on, and the delete is persisted, "Edit Plant" opens the UpdatePlantForm component. When add to cart is clicked, FlowerDetails will send data to App which adds it to a list of items that go to Cart in the form of props.
### UpdatePlantForm 

        Displays a form with inputs to change anything about a specific plant. All of the inputs need to be filled out before submission, to delete a section just add a space into the input. The plant will be updated on all pages it appears on, and the new data will be persisted. 
### AddPlant

        AddPlant consists of a form, and a grid that contains newly created products. The grid is populated with the objects from the "addedHistory" resource. When a submit event happens the "handleSubmit()" function is called, it will get a new plant object from state ([plantObj, setPlantObj]) and persist the object to the "flowerList" and "addedHistory" resources. 
### Cart

        Returns a list of items that have been added to the cart, and a Checkout component. The data for each cart item comes from the props that were passed down from App. When a plant's quantity is changed, cart updates the quantity that is showing and also updates the total. The cart items can be clicked on to go to the FlowerDetails, they can be removed from the cart only, also if a plant gets permanently deleted it is removed from cart. When the checkout button is clicked, the Checkout component becomes visible. There is also a continue shopping button that will take the user back to the "Shop" page.
### CartPlantCard

        Returns an MUI Card component for any plant that is passed to it via props. Each card has the removeItem function which has also been passed down via props from App, this function is called whenever the trash can emoji is clicked. The removeItem function will send the id of the plant that needs to be removed up to App, which uses the deleteFromCart function to filter the cartData array to return any plant that does not have the clicked plant's id.
### Checkout

        This is the form that is displayed when the chekcout button is clicked in Cart. It is a mock payment form and no information needs to be entered for it to work, just click pay now and an alert will pop up, after it is closed the user is redirected back to the "Shop" page.
---
## Sources
### **Images**
[Azalea](https://cdn.britannica.com/41/93441-050-F58F8EF1/Gardeners-rhododendrons-flowers.jpg)

[Tibouchina Semidecandra](https://upload.wikimedia.org/wikipedia/commons/9/9c/Tibouchina_semidecandra.jpg?20050507130046)

[Hibiscus](https://viverogarden.com/wp-content/uploads/2022/06/white-with-red-star.jpg)

[Plectranthus](https://images.immediate.co.uk/production/volatile/sites/10/2019/07/2048x1365-Plectranthus-fruticosus-LI3917943-5433d9d.jpg?quality=90&resize=960%2C640)

[Camellia Japonica](https://cdn.shopify.com/s/files/1/0012/9689/2016/products/Jacks2_1024x1024@2x.jpg?v=1646599582)

[Bougainvillea Spectabilis](https://upload.wikimedia.org/wikipedia/commons/f/f8/Starr_030418-0058_Bougainvillea_spectabilis.jpg)

[Rosa Burgundy](https://h2.commercev3.net/cdn.springhillnursery.com/images/800/09337A.jpg)

[Rosa Iceberg](https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Rosa_Iceberg_1.jpg/1200px-Rosa_Iceberg_1.jpg)

[Bonsai Tree](https://i.etsystatic.com/17057214/r/il/3fb9ff/2570987170/il_fullxfull.2570987170_5a2x.jpg)

[Calibrachoa Noa](https://ncfarmsinc.com/products_images/Calibrachoa-Noa-Mega-Pink.jpg)

[Cymbidium Aestivum](https://live.staticflickr.com/8774/17074137641_fddf69d1fb_z.jpg)

[Brassica Oleracea](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Brassica_oleracea_var._laciniata_flower.jpg/768px-Brassica_oleracea_var._laciniata_flower.jpg)

[ Viola Penny Orange Jump Up](https://mullerseeds.de/app/uploads/2021/04/viola_cornuta_penny_orange_jump_up51.jpg)

[Cotula](https://www.anniesannuals.com/signs/b%20-%20c/images/cotula_lineariloba_habit_wide.jpg)

[Pelargonium Peltatum](https://www.gardenia.net/storage/app/public/uploads/images/detail/Pelargonium%20peltatum.webp)

[Pansy Blue Shades](https://www.babikow.com/_ccLib/image/plants/DETA-1710.jpg)

[Pansy Yellow with Blotch](https://cdn.shopify.com/s/files/1/0257/4565/3811/products/Yellow-Blotch-Pansy-Bonnieplants.com.jpg?v=1642630183)

[Phalaenopsis Purple](https://millefioriflorist.com/wp-content/uploads/2021/03/7C5DF741-B57F-4F22-B6D3-FB1C73904FE5-rotated.jpeg)

[Dianthus](https://littleprinceplants.com/wp-content/uploads/2019/06/Dianthus-x-Spotty-April-scaled.jpg)

[Chrysanthemum](https://www.lucasgreenhouses.com/_ccLib/image/plants/DETA-1530.jpg)

[Armeria Alliacea](https://takaonursery.com/wp-content/uploads/2017/01/armeria_alliacea.jpg)

[Salvia Splendens](https://s3.amazonaws.com/eit-planttoolbox-prod/media/images/Salvia-splendens--Dinesh-Valke--CC-BY-NC-ND.jpg)

[Agapanthus](https://d2j6dbq0eux0bg.cloudfront.net/images/26177256/1564395046.jpg)

[Iris Sibirica](https://theoriginalgarden.com/Argazkiak/Fotos/20221213164825.jpg)

[Chrysanthemum](https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/516e13UNVZS._AC_UF894,1000_QL80_.jpg)

[Senecio Cineraria](https://s3.amazonaws.com/eit-planttoolbox-prod/media/images/Senecio-cineraria-bloom--Jon-Sullivan--CC-BY-NC.jpg)

[Red Cactus](https://cdn11.bigcommerce.com/s-nqbbuyl3/images/stencil/600w/products/617/1524/grafted_red_large__12502.1435900150.JPG?c=3)

[Aloe Vera](https://gardenerspath.com/wp-content/uploads/2022/10/Bright-Orange-Flowers-of-Aloe.jpg)

[Schlumbergera](https://s3.amazonaws.com/eit-planttoolbox-prod/media/images/Schlumbergera-truncata--Maja-Dumat--CC-BY.jpg)

[Senecio Rowleyanus](https://i.ebayimg.com/images/g/WBcAAOSw68FiJqkg/s-l500.jpg)

[Blue Lily](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR96pZmCaUrt5eV1Q6L36NtmxPYNAIz-enmCrSiodrQKSaanaPJoKyPqDeblt5kxZbogCk&usqp=CAU)

### **Flower Data**
[Flower Data](https://gist.github.com/sandeepcmsm/2e1f5762fa5ca351d8f129e73c730071)

### **Logo Generated From**
[logo](https://looka.com/editor/121315682)