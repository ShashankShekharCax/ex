import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {

  productDetils = [
    {
      id: 1,
      title: "Indian Spices",
      details:[
        {
          name: "Cardamom",
          description: "The smell of the Cardamom is medicinal and has a hint of pine smoke. The flavor is almost peppery & eucalyptus like and very familiar to Grains of Paradise. We put forth our Cardamom which is used as taste enhancer in food dishes. We offer this cardamom in different sizes of packets at affordable price.",
          imageUrl: "https://example.com/cardamom.jpg"
        },
        {
          name: "Chillie",
          description: "This is also called chilli pepper and belongs to the family of solanaceae. Chili pepper is native to country Mexico. Chilies contain certain amount of vitamin c and carotene. Research says that humans consuming this spicy chilli regularly are less likely to die of lifestyle disorder known as diabetes. We are doing servicing for Indian spices exporters in and from India.",
          imageUrl: "https://example.com/chillie.jpg"
        },
        {
          name: "Pepper",
          description: "This belongs to the family of Piperaceae. Usually, it is dried and used as a spice. Pepper is native to South India. It has got antibacterial properties. It is a source of manganese, vitamin-C and dietary fiber. Black pepper is a good anti-inflammatory agent.",
          imageUrl: "https://example.com/pepper.jpg"
        },
        {
          name: "Ginger",
          description: "Ginger fruit or ginger is used as spice. This is almost used as a folk medicine. An oral use of this spice is used to treat nausea. This is one of the flowering plants. It is one of the best ingredients in Indian society. It is to be said that young ginger rhizomes are more fleshy.",
          imageUrl: "https://example.com/ginger.jpg"
        },
        {
          name: "Turmeric",
          description: "This perennial plant belongs to ginger family. Normally, it is used in included in Indian cuisine for healthy benefits. It is widely used in cooking. Turmeric makes poor fabric dye. In the concept of Ayurveda, it is used to treat disorders like throat infection and common cold.",
          imageUrl: "https://example.com/turmeric.jpg"
        },
        {
          name: "Coriander",
          description: "It is an annual herb. This is one of the plants in the earth with complete edible parts. This is native to south western Asia. Coriander leaves are used widely in cooking. The leaves of coriander seeds are rich in Vitamin A. Roasted coriander seeds are eaten as a snack.",
          imageUrl: "https://example.com/coriander.jpg"
        },
        {
          name: "Bishops weed",
          description: "This belongs to the family Apiaceae. Bishop's weed has been used in Ayurvedic medicine as an antiseptic and a preservative, as well as for respiratory ailments. It is used in the Unani system of medicine as an enhancer of the body's resistance.",
          imageUrl: "https://example.com/bishops_weed.jpg"
        },
        {
          name: "Cinnamon",
          description: "It is a spice from inner bark of tree species from genus cinnamomum. It can be used in both sweet and savory food. It is known commonly as cinnamon. Global production of cinnamon is 35,000 tons. Sri Lanka, Vietnam and India are major producers of this plant.",
          imageUrl: "https://example.com/cinnamon.jpg"
        },
        {
          name: "Celery",
          description: "It is a marshland plant. Celery belongs to the family Apiaceae. This plant’s extracts is used in medicinal industry. It is consumed around the world as vegetable. Celery seeds are used as spice in India. Celery salt is available in most of the countries. It is used in weight loss diets.",
          imageUrl: "https://example.com/celery.jpg"
        },
        {
          name: "Mint",
          description: "It is known as mentha. It is aromatic in nature. Leaves are warm and used in tea, beverages and in ice creams. Do you know one thing? Mint is an essential ingredient in touareg tea. This tea is popular in African and Arab nations. Mint essential oil is used in breath fresheners.",
          imageUrl: "https://example.com/mint.jpg"
        },
        {
          name: "Garlic",
          description: "This is commonly known as Alliumsativum. It is mostly included in traditional medicine. Garlic originated from China. Garlic is used in food for its pungent flavor. The cloves of garlic are used for medicinal purposes. The entire parts of garlic plant are edible.",
          imageUrl: "https://example.com/garlic.jpg"
        },
        {
          name: "Mace",
          description: "“Nutmeg” is one of the two spices- the other being mace- derived from species of tree in the genus Myristica. The most important commercial species is Myristicafragrans, an evergreen tree indigenous to the Banda Islands in the Moluccas of Indonesia.",
          imageUrl: "https://example.com/mace.jpg"
        },
        {
          name: "Curry leaves",
          description: "Curry leaves tree is a tropical tree in the family Rutaceae. This tree is native to India. Its leaves are edible and included in food. Curry leaves are used in rituals and pujas. This leaf is used in process of soap making and body lotions. Curry leaves tree grows up to 31 feet. Curry leaves are mostly used in Ayurvedic medicine.",
          imageUrl: "https://example.com/curry_leaves.jpg"
        },
        {
          name: "Star anise",
          description: "Star anise is the star-shaped fruit of an evergreen plant known scientifically as Illicium verum. Originating in China, star anise has a licorice or anise-like flavor, although it is not related to the true anise plants native to the Mediterranean basin and Middle East. Star anise is primary source of shikimic acid.",
          imageUrl: "https://example.com/star_anise.jpg"
        },
        {
          name: "Saffron",
          description: "It is a spice from the flower crocus sativus. It grows up to 30 cm. It contains a carotenoid pigment called crocin. Dried saffron is composed of 12% water, 65% carbohydrates, 6% fat and 11% protein. Saffron is described as reminiscent of honey. Its taste has been noted as sweet. Saffron has got a good taste.",
          imageUrl: "https://example.com/saffron.jpg"
        },
        {
          name: "Vanilla",
          description: "Four commercial preparations of vanilla are whole pod, powder, extract and vanilla sugar. Vanilla is widely used in the ice cream flavor. True vanilla is much expensive. It is the second most expensive spice after saffron. Overall, it is widely used in commercial, domestic and aromatherapy.",
          imageUrl: "https://example.com/vanilla.jpg"
        },
        {
          name: "Asafoetida",
          description: "The key element of the plant is the resin that makes a volatile oil. Asafoetida is an herbal plant which is an expectorant allowed in treatment for headaches, an antidote, and in many varied uses including aid for digestion. Asafoetida is proves to be utilized in treating some mental disorders.",
          imageUrl: "https://example.com/asafoetida.jpg"
        },
        {
          name: "Nutmeg",
          description: "Nutmeg is a popular spice that has a long list of associated health benefits, including its ability to relieve pain, soothe indigestion, strengthen cognitive function, detoxify the body, boost skin health, alleviate oral conditions, reduce insomnia and increase immune system function.",
          imageUrl: "https://example.com/nutmeg.jpg"
        },
        {
          name: "Tamarind",
          description: "The health benefits of tamarind have been well-established and include the ability to reduce inflammation throughout the body, improve eye health, boost respiratory health, heal skin conditions, improve the digestive system, relieve pain, increase the strength of the immune system and reduce fever.",
          imageUrl: "https://example.com/tamarind.jpg"
        },
        {
          name: "Clove",
          description: "Cloves offer health benefits which include providing aid in digestion, fighting against cancer, protecting the liver, boosting the immune system, control diabetes, preserving bone quality and containing anti-mutagenic properties, as well as fighting against oral diseases and headaches, while displaying aphrodisiac properties as well.",
          imageUrl: "https://example.com/clove.jpg"
        },
        {
          name: "Pepper long",
          description: "It has been called as Indian long pepper. It belongs to the family of Piperaceae. Fruits of this plant are confused with chili peppers. Long pepper is a common ingredient in European and Indian cuisine. It is one of the main ingredients in national dish of Pakistan.",
          imageUrl: "https://example.com/pepper_long.jpg"
        }
      ]
    },
    {
      id:2,
      title:'Indian Herbs',
      details:[
        {
          name: "Aloe Vera",
          description: "Aloe Vera is one of the most famous plants in the world, and it has been used frequently in history for its medicinal properties. The Aloe Vera plant is easy to grow even in cold climates and many people grow it as a house plant. Aloe Vera extracts can be converted as a juice, applied as a topical lotion or taken in dried extract capsules.",
          imageUrl: "https://example.com/pepper_long.jpg"
        },
        {
          name: "Amla",
          description: "The Indian gooseberry, known locally as Amla, is a tree that is famous for its nutrient rich fruits. It has been a common ingredient in the ancient Indian medicinal practice of Ayurveda. It is a potent source of Vitamin C and also contains iron and calcium.",
          imageUrl: "https://example.com/pepper_long.jpg"
        },
        {
          name: "Holy basil",
          description: "Holy basil is considered an adaptogen. An adaptogen is natural substance that helps your body adapt to stress and promotes mental balance. The concept of an adaptogen lies in holistic approach. But scientific research shows that holy basil has pharmacological properties to help your mind cope with many types of stress.",
          imageUrl: "https://example.com/pepper_long.jpg"
        },
        {
          name: "Lemongrass",
          description: "Lemongrass, also called fever grass, is a perennial plant with thin, long leaves that is indigenous to many Asian countries. As the name implies, lemongrass smells like lemon, but it tastes milder and sweeter. This herb is used in various Asian cuisines as a flavoring agent due to its strong flavor.",
          imageUrl: "https://example.com/pepper_long.jpg"
        },
      ]
    },
    {
      id:3,
      title:'Dry Fruits',
      details:[
        {
          name: "Figs",
          description: "Figs are the fruit of the ficus tree, which is part of the mulberry family. Figs have a unique, sweet taste, soft and chewy texture and are littered with slightly crunchy, edible seeds. Fresh figs are delicate and perishable, so are often dried to preserve. This produces a sweet and nutritious dried fruit that can be enjoyed around the year. Dry Fruit Importer and Exporter must carry out the quality of all products.",
          imageUrl: "https://example.com/pepper_long.jpg"
        },
        {
          name: "Dates",
          description: "The benefits of dates include relief from constipation, intestinal disorders, heart problems, anemia, diarrhea, abdominal cancer and many other conditions. Dates are good for gaining weight also. Dates are rich in several vitamins, minerals and fiber too.",
          imageUrl: "https://example.com/pepper_long.jpg"
        },
        {
          name: "Raisins",
          description: "The health benefits of raisins include relief from constipation, acidosis, anemia, fever, and sexual dysfunction. Raisins have also been known to help in attempts to gain weight in a healthy way, as well as its positive impact on eye health, dental care, and bone quality.",
          imageUrl: "https://example.com/pepper_long.jpg"
        },
        {
          name: "Apricots",
          description: "Apricots are those beautifully orange colored fruits full of beta-carotene and fiber that are one of the first signs of summer. Although dried and canned apricots are available year-round, fresh apricots with a plentiful supply of vitamin C are found in North America from May through August.",
          imageUrl: "https://example.com/pepper_long.jpg"
        },
        {
          name: "Dry woodapple",
          description: "The taste of the fruit, regrettably, leaves something to be preferred, just like numerous plants with recovery qualities, yet all the parts of the tree are utilized in a number of purposes, which includes fragrances, soap, and also home furniture manufacturing. In India, Wood apple pulp is used in Ayurveda medicine as a tonic for the liver and the heart.",
          imageUrl: "https://example.com/pepper_long.jpg"
        },
        {
          name: "Dry lime rind",
          description: "Lime rind is just the outer yellow skin. It is obtained by removing only the color area and not the white flesh just beneath the skin, using a fine zester. It has a nice refreshing aroma due to the presence of lime oil, being volatile while removing the rind. The bitter white portion is not taken in the rind; hence the taste is sour to tangy.",
          imageUrl: "https://example.com/pepper_long.jpg"
        },
      ]
    },
    {
      id:4,
      title:'Nuts-Nut Products',
      details:[
        {
          name: "Cashew nuts",
          description: "Cashews are high in calories. 100 g of nuts provide 553 calories. They are packed with soluble dietary fiber, vitamins, minerals and numerous health-promoting phytochemical that help protect from diseases and cancers. Cashew nuts are a good source of essential minerals.",
          imageUrl: "https://example.com/pepper_long.jpg"
        },
        {
          name: "Walnuts",
          description: "Benefits of walnuts include a reduction of bad cholesterol in the body, an improvement in metabolism, and control of diabetes. Other important health benefits of walnuts stem from the fact that these nuts possess anti-inflammatory properties, aid in weight management, and help as a mood booster.",
          imageUrl: "https://example.com/pepper_long.jpg"
        },
        {
          name: "Pistachios",
          description: "The health benefits of pistachios include a healthy heart, weight management, protection against diabetes and hypertension, and improved digestion. The vitamins, minerals and protein found in pistachio are all very good for health.",
          imageUrl: "https://example.com/pepper_long.jpg"
        },
        {
          name: "Almonds",
          description: "The health benefits of almonds are extensive, and they are frequently used as a healthy solution for relief from constipation, respiratory disorders, cough, heart disorders, anemia, and diabetes. It also helps in maintenance of healthy hair, skin care and dental care.",
          imageUrl: "https://example.com/pepper_long.jpg"
        },
        {
          name: "Sunflower seeds",
          description: "Sunflower seeds are abest source of vitamin E, the body's primary fat-soluble antioxidant. Vitamin E travels throughout the body neutralizing free radicals that would otherwise damage fat-containing structures and molecules, such as cell membranes, brain cells, and cholesterol.",
          imageUrl: "https://example.com/pepper_long.jpg"
        },
        {
          name: "Watermelon seeds",
          description: "Watermelon seeds are full of nutrients like protein, essential fatty acids, vitamins and minerals. Some of the important surprising benefits of eating watermelon seeds are described as the following. Seeds are loaded with calorie and fatty acid. It is proved that watermelon seeds are good for the heart.",
          imageUrl: "https://example.com/pepper_long.jpg"
        },
        {
          name: "Pumpkin seeds",
          description: "Delicious pumpkin seeds are high in calories; about 559 calories per 100 g. In addition, they are packed with fiber, vitamins, minerals, and numerous health promoting antioxidants. Pumpkin seeds contain necessary minerals. Some of the minerals are copper and potassium.",
          imageUrl: "https://example.com/pepper_long.jpg"
        },
      ]
    },
    {
      id:5,
      title:'Nuts-Nut Products',
      details:[
        {
          name: "Cashew nuts",
          description: "Cashews are high in calories. 100 g of nuts provide 553 calories. They are packed with soluble dietary fiber, vitamins, minerals and numerous health-promoting phytochemical that help protect from diseases and cancers. Cashew nuts are a good source of essential minerals.",
          imageUrl: "https://example.com/pepper_long.jpg"
        },
        {
          name: "Walnuts",
          description: "Benefits of walnuts include a reduction of bad cholesterol in the body, an improvement in metabolism, and control of diabetes. Other important health benefits of walnuts stem from the fact that these nuts possess anti-inflammatory properties, aid in weight management, and help as a mood booster.",
          imageUrl: "https://example.com/pepper_long.jpg"
        },
        {
          name: "Pistachios",
          description: "The health benefits of pistachios include a healthy heart, weight management, protection against diabetes and hypertension, and improved digestion. The vitamins, minerals and protein found in pistachio are all very good for health.",
          imageUrl: "https://example.com/pepper_long.jpg"
        },
        {
          name: "Almonds",
          description: "The health benefits of almonds are extensive, and they are frequently used as a healthy solution for relief from constipation, respiratory disorders, cough, heart disorders, anemia, and diabetes. It also helps in maintenance of healthy hair, skin care and dental care.",
          imageUrl: "https://example.com/pepper_long.jpg"
        },
        {
          name: "Sunflower seeds",
          description: "Sunflower seeds are abest source of vitamin E, the body's primary fat-soluble antioxidant. Vitamin E travels throughout the body neutralizing free radicals that would otherwise damage fat-containing structures and molecules, such as cell membranes, brain cells, and cholesterol.",
          imageUrl: "https://example.com/pepper_long.jpg"
        },
        {
          name: "Watermelon seeds",
          description: "Watermelon seeds are full of nutrients like protein, essential fatty acids, vitamins and minerals. Some of the important surprising benefits of eating watermelon seeds are described as the following. Seeds are loaded with calorie and fatty acid. It is proved that watermelon seeds are good for the heart.",
          imageUrl: "https://example.com/pepper_long.jpg"
        },
        {
          name: "Pumpkin seeds",
          description: "Delicious pumpkin seeds are high in calories; about 559 calories per 100 g. In addition, they are packed with fiber, vitamins, minerals, and numerous health promoting antioxidants. Pumpkin seeds contain necessary minerals. Some of the minerals are copper and potassium.",
          imageUrl: "https://example.com/pepper_long.jpg"
        },
      ]
    }
  ]
  constructor(private route: ActivatedRoute) { }
  id:any = 0;
  selectedProduct:any = null;
  selectedItem:any = null;

  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      console.log(this.id);
      this.selectedProduct = this.productDetils.filter(item => item.id==this.id);
      console.log(this.selectedProduct);
      this.selectedItem = this.selectedProduct[0];
    });
  }

  selectItem = (index:any) => {
    this.selectedItem = this.selectedProduct[index];
  }
}
