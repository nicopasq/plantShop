# Plant Shop
## Project Description
For the phase-2 React project I decided to make a mock e-commerce website that uses a seller's point of view. The main navigable components are AddPlant, Flowers, and Cart.
When viewing the website the links for these components are, "Add a New Plant", "Shop", and "Cart" respectively. In order to use the "Add a New Plant" link the "Editor Mode" needs to be switched on.
## Description of Components
### App

        App is at the top most level, it's job is to update and determine what data needs to be displayed on AddPlant, Flowers, and Cart. App also holds the Switch and Route components for navigation. 
### PlantCard

        This component is used by Flowers and AddPlant, it creates a Grid item that holds a Card component for each plant object that is passed to it as a prop. The Grid item xs is a dynamic value, and is set with props. When a PlantCard component is clicked, it will send the user to the FlowerDetails page for that specific plant.
### Header

        Returns the blue header where "The Garden" logo is.
### NavBar

        Returns a MUI Drawer component that has links to Shop (Flowers), Cart, and Add a New Plant, there is also a switch labeled "Editor Mode". When "Editor Mode" is switched on, the link to Add a New Plant and a MUI SpeedDial component become useable.
### Flowers
### FlowerDetails
### UpdatePlantForm 
### AddPlant

        AddPlant consists of a form, and a grid that contains newly created products. The grid is populated with the objects from the "addedHistory" resource. When a submit event happens the "handleSubmit()" function is called, it will get a new plant object from state ([plantObj, setPlantObj]) and persist the object to the "flowerList" and "addedHistory" resources. 
### Cart
### CartPlantCard
### Checkout
## Sources
### Images
• https://cdn.britannica.com/41/93441-050-F58F8EF1/Gardeners-rhododendrons-flowers.jpg

• https://upload.wikimedia.org/wikipedia/commons/9/9c/Tibouchina_semidecandra.jpg?20050507130046

• https://viverogarden.com/wp-content/uploads/2022/06/white-with-red-star.jpg

• https://images.immediate.co.uk/production/volatile/sites/10/2019/07/2048x1365-Plectranthus-fruticosus-LI3917943-5433d9d.jpg?quality=90&resize=960%2C640

• https://cdn.shopify.com/s/files/1/0012/9689/2016/products/Jacks2_1024x1024@2x.jpg?v=1646599582

• https://upload.wikimedia.org/wikipedia/commons/f/f8/Starr_030418-0058_Bougainvillea_spectabilis.jpg

• https://h2.commercev3.net/cdn.springhillnursery.com/images/800/09337A.jpg

• https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Rosa_Iceberg_1.jpg/1200px-Rosa_Iceberg_1.jpg

• https://i.etsystatic.com/17057214/r/il/3fb9ff/2570987170/il_fullxfull.2570987170_5a2x.jpg

• https://ncfarmsinc.com/products_images/Calibrachoa-Noa-Mega-Pink.jpg

• https://live.staticflickr.com/8774/17074137641_fddf69d1fb_z.jpg

• https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Brassica_oleracea_var._laciniata_flower.jpg/768px-Brassica_oleracea_var._laciniata_flower.jpg

• https://mullerseeds.de/app/uploads/2021/04/viola_cornuta_penny_orange_jump_up51.jpg

• https://www.anniesannuals.com/signs/b%20-%20c/images/cotula_lineariloba_habit_wide.jpg

• phttps://www.gardenia.net/storage/app/public/uploads/images/detail/Pelargonium%20peltatum.webp

• https://www.babikow.com/_ccLib/image/plants/DETA-1710.jpg

• https://cdn.shopify.com/s/files/1/0257/4565/3811/products/Yellow-Blotch-Pansy-Bonnieplants.com.jpg?v=1642630183

• https://millefioriflorist.com/wp-content/uploads/2021/03/7C5DF741-B57F-4F22-B6D3-FB1C73904FE5-rotated.jpeg

• https://littleprinceplants.com/wp-content/uploads/2019/06/Dianthus-x-Spotty-April-scaled.jpg

• https://www.lucasgreenhouses.com/_ccLib/image/plants/DETA-1530.jpg

• https://takaonursery.com/wp-content/uploads/2017/01/armeria_alliacea.jpg

• https://s3.amazonaws.com/eit-planttoolbox-prod/media/images/Salvia-splendens--Dinesh-Valke--CC-BY-NC-ND.jpg

• https://d2j6dbq0eux0bg.cloudfront.net/images/26177256/1564395046.jpg

• https://theoriginalgarden.com/Argazkiak/Fotos/20221213164825.jpg

• https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/516e13UNVZS._AC_UF894,1000_QL80_.jpg

• https://s3.amazonaws.com/eit-planttoolbox-prod/media/images/Senecio-cineraria-bloom--Jon-Sullivan--CC-BY-NC.jpg

• https://cdn11.bigcommerce.com/s-nqbbuyl3/images/stencil/600w/products/617/1524/grafted_red_large__12502.1435900150.JPG?c=3

• https://gardenerspath.com/wp-content/uploads/2022/10/Bright-Orange-Flowers-of-Aloe.jpg

• https://s3.amazonaws.com/eit-planttoolbox-prod/media/images/Schlumbergera-truncata--Maja-Dumat--CC-BY.jpg

• https://i.ebayimg.com/images/g/WBcAAOSw68FiJqkg/s-l500.jpg

### Flower Data
https://gist.github.com/sandeepcmsm/2e1f5762fa5ca351d8f129e73c730071

sandeepcmsm/flowers.json
### Logo Generated From
https://looka.com/editor/121315682