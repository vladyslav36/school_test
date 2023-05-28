const connectDb = require("./config/db")
const Food = require("./models/foodModel")
const Shop = require("./models/shopModel")
const dotenv = require("dotenv")

dotenv.config({ path: "./config/.env" })
connectDb()

const foods = [
  {
    name: "Суп с лапшой соба, шпинатом и копчёной форелью",
    image:
      "/images/1680964706_sup-s-lapshoj-soba-shpinatom-i-kopchenoj-forelyu.jpg",
    price: "123.00",
    shop: "U Tarasa",
  },
  {
    name: "Грибной бульон с говяжьим стейком",
    image: "/images/1680954621_gribnoj-bulon-s-govyazhim-stejkom.jpg",
    price: "97.00",
    shop: "U Tarasa",
  },
  {
    name: "Мексиканский куриный суп с кукурузой",
    image:
      "/images/1663162383_prosto-dobav-vody-meksikanskij-kurinyj-sup-s-kukuruzoj.jpg",
    price: "102.00",
    shop: "U Tarasa",
  },
  {
    name: "Дьявольские яйца (фаршированные яйца)",
    image: "/images/1539962375_dyavolskie_yajca_farshirovannye_yajca.jpg",
    price: "150.00",
    shop: "U Tarasa",
  },
  {
    name: "Гуакамоле",
    image: "/images/1539962388_guakamole.jpg",
    price: "176.00",
    shop: "U Tarasa",
  },
  {
    name: "Брускетта",
    image: "/images/1539962363_brusketta.jpg",
    price: "145.00",
    shop: "U Tarasa",
  },
  {
    name: "Сальса",
    image: "/images/1539962363_brusketta.jpg",
    price: "128.00",
    shop: "U Tarasa",
  },
  {
    name: "Хашпаппи",
    image: "/images/1539962378_xashpappi.jpg",
    price: "220.00",
    shop: "Home foods",
  },
  {
    name: "Куриные крылышки, запеченные в сливовой глазури",
    image:
      "/images/1539962339_kurinye_krylyshki_zapechennye_v_slivovoj_glazuri.jpg",
    price: "250.oo",
    shop: "Home foods",
  },
  {
    name: "Запеченные цуккини в панировке с пармезаном",
    image:
      "/images/1539962345_zapechennye_cukkini_v_panirovke_s_parmezanom.jpg",
    price: "130.oo",
    shop: "Home foods",
  },
  {
    name: "Салат «Цезарь» с пастой из анчоусов в хлебных корзинках",
    image:
      "/images/1539962396_salat_cezar_s_pastoj_iz_anchousov_v_xlebnyx_korzinkax.jpg",
    price: "190.00",
    shop: "Home foods",
  },
  {
    name: "Цуккини в сырной панировке, жареные во фритюре",
    image:
      "/images/1539962348_cukkini_v_syrnoj_panirovke_zharenye_vo_frityure.jpg",
    price: "200.00",
    shop: "Home foods",
  },
  {
    name: "Спринг-роллы с курицей и арахисовым дипом",
    image: "/images/1539962316_spring-rolly_s_kuricej_i_araxisovym_dipom.jpg",
    price: "167.00",
    shop: "Home foods",
  },
  {
    name: "Креветки завернутые в бекон, в глазури барбекю",
    image:
      "/images/1539962375_krevetki_zavernutye_v_bekon_v_glazuri_barbekyu.jpg",
    price: "300.00",
    shop: "Home foods",
  },
  {
    name: "Коблер с черникой и нектаринами",
    image: "/images/1541441275_1-kobler-s-chernikoj-i-nektarinami.jpg",
    price: "80.00",
    shop: "Sweet Dreams",
  },
  {
    name: "Лимонная плитка с меренгой",
    image: "/images/1541441293_2-limonnaya-plitka-s-merengoj.jpg",
    price: "76.00",
    shop: "Sweet Dreams",
  },
  {
    name: "Творожно-шоколадный торт без муки",
    image: "/images/1541441219_3-tvorozhno-shokoladnyj-tort-bez-muki.jpg",
    price: "96.00",
    shop: "Sweet Dreams",
  },
  {
    name: "Пирожные с шоколадом, арахисом и соломкой без выпечки",
    image:
      "/images/1541441205_4-pirozhnye-s-shokoladom-arahisom-i-solomkoj-bez-vypechki.jpg",
    price: "78.00",
    shop: "Sweet Dreams",
  },
  {
    name: "Торт из капкейков «Школа рыбок»",
    image: "/images/1541441269_5-tort-iz-kapkejkov-shkola-rybok.jpg",
    price: "59.00",
    shop: "Sweet Dreams",
  },
  {
    name: "Чернично-лимонное бисквитное печенье «Вупи пай» ",
    image:
      "/images/1541441268_6-chernichno-limonnoe-biskvitnoe-pechene-vupi-paj.jpg",
    price: "48.00",
    shop: "Sweet Dreams",
  },
  {
    name: "Арахисовые пирожные с маршмеллоу «Смор»",
    image: "/images/1541441258_7-arahisovye-pirozhnye-s-marshmellou-smor.jpg",
    price: "84.00",
    shop: "Sweet Dreams",
  },
  {
    name: "Десерт из жареного на гриле ананаса с Нутеллой",
    image:
      "/images/1541441199_8-desert-iz-zharenogo-na-grile-ananasa-s-nutelloj.jpg",
    price: "77.00",
    shop: "Sweet Dreams",
  },
]

const shops = [
  {
    name: "Sweet Dreams",
  },
  {
    name: "Home foods",
  },
  {
    name: "U Tarasa",
  },
]

const migrateToDb = async () => {
  await Food.deleteMany()
  await Shop.deleteMany()
  await Promise.all(
    foods.map(async (item) => {
      const { name, image, price, shop } = item
      await Food.create({
        name,
        image,
        price,
        shop,
      })
    })
  )
  await Promise.all(
    shops.map(async (item) => {
      const { name } = item
      await Shop.create({ name })
    
      console.log("ok")
      process.exit(0)
    }))
}

migrateToDb()
