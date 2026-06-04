import React, { useState } from 'react';
import { ShoppingBag, Plus, Minus, Search, User, X } from 'lucide-react';

const DB_DATA = {
  "categories": [
    { "id": "burgers", "name": "Burgerlar" },
    { "id": "lavash", "name": "Lavashlar" },
    { "id": "shaurma", "name": "Shaurma va Donerlar" },
    { "id": "sendvich", "name": "Sendvichlar" },
    { "id": "chicken", "name": "Gazaklar" },
    { "id": "desserts", "name": "Shirinliklar" },
    { "id": "cold-drinks", "name": "Yaxna Ichimliklar" },
    { "id": "hot-drinks", "name": "Iliq Ichimliklar" },
    { "id": "sauces", "name": "Souslar" }
  ],
  "products": [

    { "id": 2, "name": "Chisburger", "price": 32000, "category": "burgers", "description": "Mol go'shtidan kotlet, erigan pishloq, tuzlangan bodring va ketchup.", "image": "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2Fd075d76f-4a2f-45b6-95d1-8b32f364b913&w=640&q=75" },
    { "id": 3, "name": "Gamburger", "price": 28000, "category": "burgers", "description": "Klassik burger: barra sabzavotlar, go'shtli kotlet va yumshoq bulochka.", "image": "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F227c167f-8eea-4e4e-9327-f14602a53b6f&w=640&q=75" },
    { "id": 5, "name": "Tovuqli Burger (Chicken Burger)", "price": 26000, "category": "burgers", "description": "Qarsilloq tovuq filesi, yangi salat bargi va mayonezli sous.", "image": "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F686c644f-7955-43dc-b7c7-661785f4f215&w=640&q=75" },
    { "id": 10, "name": "Lavash Standart (Mol go'shtli)", "price": 28000, "category": "lavash", "description": "Mol go'shti, pof-pof kartoshka, pomidor va maxsus oq sous.", "image": "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F137a5e3d-9d92-482a-8cf2-fde212610697&w=640&q=75" },
    { "id": 11, "name": "Lavash Big (Mol go'shtli)", "price": 34000, "category": "lavash", "description": "Katta o'lchamdagi mol go'shtli to'yimli an'anaviy lavash.", "image": "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F9a9e55b2-9a01-482d-be5e-323ca4d6b4e5&w=640&q=75" },
    { "id": 12, "name": "Lavash Pishloqli (Sirovoy)", "price": 33000, "category": "lavash", "description": "Standart lavash ichiga erigan pishloq (sir) qatlami qo'shilgan.", "image": "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F0d8340d4-68df-4915-a82e-a9970311e777&w=640&q=75" },
    { "id": 13, "name": "Lavash Big Pishloqli", "price": 39000, "category": "lavash", "description": "Katta o'lchamdagi lavashga qo'shimcha cheddar pishlog'i qo'shilgan.", "image": "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F1db271cd-aae9-40e0-999f-7d67caefcc85&w=640&q=75" },
    { "id": 14, "name": "Tovuqli Lavash Standart", "price": 26000, "category": "lavash", "description": "Yumshoq tovuq go'shti, fri kartoshkasi va pomidorli engil lavash.", "image": "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F174ded8b-61f0-4e75-91fb-e9639332b80a&w=640&q=75" },
    { "id": 15, "name": "Tovuqli Lavash Big", "price": 31000, "category": "lavash", "description": "Katta porsiyadagi tovuq go'shtli va oq sousli lavash.", "image": "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F1db271cd-aae9-40e0-999f-7d67caefcc85&w=640&q=75" },
    { "id": 16, "name": "Achiq Lavash (Spicy)", "price": 29000, "category": "lavash", "description": "Mol go'shti va jalapeno qalampiri qo'shilgan achchiqona ta'm.", "image": "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F7e3606d1-2b11-4c85-89b5-5143432f7898&w=640&q=75" },
    { "id": 17, "name": "Tovuqli Achiq Lavash", "price": 27000, "category": "lavash", "description": "Tovuq go'shti va achchiq chili sousi qo'shilgan lavash.", "image": "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F16f04863-7c42-467d-bf78-2c53db5385f0&w=640&q=75" },
    { "id": 18, "name": "Mini Lavash", "price": 20000, "category": "lavash", "description": "Bolajonlar va engil tamaddi qilishni xohlovchilar uchun kichik lavash.", "image": "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F03451644-d21e-4e3d-b415-1d3740994394&w=640&q=75" },
    { "id": 19, "name": "Shaurma Mol Go'shtli", "price": 26000, "category": "shaurma", "description": "Maxsus pishgan non ichida mol go'shti, bodring va pomidor.", "image": "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F28f42fda-4441-4d04-a22d-48f912bb7af3&w=640&q=75" },
    { "id": 20, "name": "Shaurma Tovuqli", "price": 24000, "category": "shaurma", "description": "Tandirda pishgan tovuq bo'lakchalari va shirin sousli shaurma.", "image": "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2Fa7406a59-c55c-4445-8fb5-12b8755bf26c&w=640&q=75" },
    { "id": 21, "name": "Shaurma Mini", "price": 20000, "category": "shaurma", "description": "Kichikroq porsiyadagi tez va mazali shaurma.", "image": "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F4c8e58e7-59e9-4f3e-970a-38aa3c8fc51d&w=640&q=75" },
    { "id": 22, "name": "Shaurma Pishloqli", "price": 30000, "category": "shaurma", "description": "Mo'l-ko'l motsarella pishlog'i bilan to'ldirilgan mol go'shtli shaurma.", "image": "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F16bfc397-3318-4cbc-b105-f0e3a432aa6c&w=640&q=75" },
    { "id": 23, "name": "Doner Mol Go'shtli", "price": 28000, "category": "shaurma", "description": "Turkcha uslubdagi dumaloq nonda mol go'shtli doner.", "image": "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F4fcc7497-286f-4a86-bb88-5ff33bba0e2f&w=640&q=75" },
    { "id": 24, "name": "Doner Tovuqli", "price": 25000, "category": "shaurma", "description": "Turkcha nonda tovuq go'shti va salatlar bilan to'ldirilgan doner.", "image": "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2Fc03441d9-769c-4634-9c77-4feaf917e2a2&w=640&q=75" },
    { "id": 26, "name": "Club Sendvich", "price": 30000, "category": "sendvich", "description": "Toster nondagi tovuq go'shti, tuxum, pishloq va yangi sabzavotlar.", "image": "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F3b9a8332-34f0-4a8d-be87-0e818ffc682e&w=640&q=75" },
    { "id": 27, "name": "Klassik Sendvich", "price": 24000, "category": "sendvich", "description": "Sutli non, kolbasa, pishloq va yangi bodringli engil nonushta.", "image": "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F00a33541-de6e-49c9-8cbc-22de31172615&w=640&q=75" },
    { "id": 39, "name": "Tovuq Qanotchalari Spicy (6 dona)", "price": 16000, "category": "chicken", "description": "Achchiq va qarsildoq tovuq qanotchalari.", "image": "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F5c189e8c-6ea2-4206-b0bd-2b72838cec7b&w=640&q=75" },
    { "id": 40, "name": "Tovuq Qanotchalari Spicy (10 dona)", "price": 25000, "category": "chicken", "description": "O'rtacha porsiyadagi achchiq va mazali tovuq qanotlari.", "image": "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F5c189e8c-6ea2-4206-b0bd-2b72838cec7b&w=640&q=75" },
    { "id": 41, "name": "Tovuq Qanotchalari Spicy (18 dona)", "price": 38000, "category": "chicken", "description": "Kompaniya uchun issiqqina achchiq qanotchalar to'plami.", "image": "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F5c189e8c-6ea2-4206-b0bd-2b72838cec7b&w=640&q=75" },
    { "id": 42, "name": "Stripslar S", "price": 14000, "category": "chicken", "description": "Tovuq filesidan tayyorlangan yumshoq va qarsildoq chiziqlar.", "image": "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F8ba2915b-dccc-49b3-a8fb-5696f739c52c&w=640&q=75" },
    { "id": 43, "name": "Stripslar M", "price": 26000, "category": "chicken", "description": "Tovuq go'shtining eng lazzatli joyidan qarsildoq stripslar.", "image": "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F8ba2915b-dccc-49b3-a8fb-5696f739c52c&w=640&q=75" },
    { "id": 44, "name": "Kartoshka fri ", "price": 11000, "category": "chicken", "description": "Maxsus unli qorishmada pishirilgan tovuq boldiri.", "image": "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F0dcfa036-2bf4-4400-9138-0903ca8a0694&w=640&q=75" },
    { "id": 45, "name": "Po derevensky", "price": 21000, "category": "chicken", "description": "Ikkita issiqqina oltin rang tovuq boldirlari.", "image": "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F8d36668e-b53e-4281-a8ce-59a2563e7ae4&w=640&q=75" },
    { "id": 61, "name": "San-sebastiyan", "price": 25000, "category": "desserts", "description": "Mayin pishloqli krem va qumloq xamirdan klassik shirinlik.", "image": "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F3b521fde-821f-4098-8d53-bfea633c09f5&w=640&q=75" },
    { "id": 62, "name": "Uch shokolad", "price": 25000, "category": "desserts", "description": "Ichidan issiq shokolad oqib chiquvchi fransuzcha keks.", "image": "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F9ba2f53f-e814-4c90-bb4a-9df6b231f3c5&w=640&q=75" },
    { "id": 63, "name": "Donat karamel", "price": 14000, "category": "desserts", "description": "Tabiiy asal hidi kelib turadigan yumshoqqina tort bo'lagi.", "image": "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2Fca971cfc-89f3-4ded-afe4-3fe41c8f9233&w=640&q=75" },
    { "id": 64, "name": "Donat Yo'ng'oklik", "price": 14000, "category": "desserts", "description": "Shokoladli glasur bilan qoplangan rangli ponchik.", "image": "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2Faa4c01c1-5e63-4c84-ad42-915228a889e6&w=640&q=75" },
    { "id": 65, "name": "Donat Qulupnayli", "price": 14000, "category": "desserts", "description": "Pushti rangli qulupnay ta'mli va kremli ponchik.", "image": "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F068a528d-58b5-4f97-9338-05f022775bd1&w=640&q=75" },
    { "id": 66, "name": "Tiramisu", "price": 25000, "category": "desserts", "description": "Kofe ta'mi sezilib turadigan mashhur italyancha desert.", "image": "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2Fcb7b10e0-82c3-4a68-83d0-e3be588557e9&w=640&q=75" },
    { "id": 71, "name": "Coca-Cola 0.5L", "price": 8000, "category": "cold-drinks", "description": "Yaxna holdagi gazlangan alkogolsiz ichimlik.", "image": "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2Fa8720694-933c-4d4c-8d69-f410d2fbd712&w=640&q=75" },
    { "id": 72, "name": "Coca-Cola 1.5L", "price": 14000, "category": "cold-drinks", "description": "Katta hajmdagi Coca-Cola.", "image": "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F70df586e-15f7-4633-a58e-75ca2e87f009&w=640&q=75" },
    { "id": 73, "name": "Fanta 0.5L", "price": 8000, "category": "cold-drinks", "description": "Apelsin ta'mli quvnoq va gazlangan ichimlik.", "image": "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F69aa39cd-9389-46e2-b21f-3922b806a968&w=640&q=75" },
    { "id": 74, "name": "Quyma fanta 400 ml ", "price": 10000, "category": "cold-drinks", "description": "Apelsin ta'mli katta gazlangan ichimlik.", "image": "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F9c05d464-711f-40ae-9bf6-954b1210eea6&w=640&q=75" },
    { "id": 75, "name": "Sprite 0.5L", "price": 8000, "category": "cold-drinks", "description": "Laym va limon ta'miga ega tetiklashtiruvchi ichimlik.", "image": "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2Ff8dda5b8-9b46-4abe-8def-7607500bc32f&w=640&q=75" },
    { "id": 76, "name": "Quyma sprite 400 ml", "price": 10000, "category": "cold-drinks", "description": "Limonli yaxna ichimlikning katta oilaviy varianti.", "image": "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F8b8f7a65-e48b-40a5-afa3-48822b909c3d&w=640&q=75" },
    { "id": 77, "name": "FuseTea Ramashkali 0.5L", "price": 9000, "category": "cold-drinks", "description": "Limon ta'mli muzdek sovuq choy.", "image": "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2Ffeebe7e4-c753-4d34-81fb-0d5b752328e9&w=640&q=75" },
    { "id": 78, "name": "FuseTea Shaftoli 0.5L", "price": 9000, "category": "cold-drinks", "description": "Shaftoli ta'miga ega shirin yaxna qora choy.", "image": "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2Fb22e01b1-d4aa-4157-befa-88d1cbe855f6&w=640&q=75" },
    { "id": 80, "name": "Bonaqua Gazli 0.5L", "price": 4000, "category": "cold-drinks", "description": "Chanqoqni tez bosuvchi tabiiy gazlangan suv.", "image": "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2Fb22e01b1-d4aa-4157-befa-88d1cbe855f6&w=640&q=75" },
    { "id": 83, "name": "Moxito Klassik", "price": 16000, "category": "cold-drinks", "description": "Yalpiz, laym va muz bo'lakchalaridan tayyorlangan moxito.", "image": "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F626b5131-2488-4483-8f79-c6031f019e40&w=640&q=75" },
    { "id": 84, "name": "Moxito Qulupnayli", "price": 18000, "category": "cold-drinks", "description": "Qulupnay siropi va mevalari qo'shilgan yozgi kokteyl.", "image": "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2Fcc747912-f0e8-4cc0-8037-29f66c1db9a0&w=640&q=75" },
    { "id": 87, "name": "Americano", "price": 12000, "category": "hot-drinks", "description": "Yangi maydalangan kofe donalaridan tayyorlangan klassik qora kofe.", "image": "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2Ff7de2136-0d20-4da6-ae6e-b5413c53aeb0&w=640&q=75" },
    { "id": 88, "name": "Kapuchino", "price": 15000, "category": "hot-drinks", "description": "Sut ko'pigi bilan boyitilgan xushbo'y va mayin kofe.", "image": "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F9c1579f8-4877-4fa2-953a-760c4ca0d547&w=640&q=75" },
    { "id": 91, "name": "Ko'k Choy", "price": 5000, "category": "hot-drinks", "description": "Choynakda damlangan an'anaviy o'zbekona ko'k choy.", "image": "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2Ffbd71788-1460-4ac2-a29d-af7aec48bb44&w=640&q=75" },
    { "id": 92, "name": "Qora Choy", "price": 5000, "category": "hot-drinks", "description": "Xushbo'y va achchiq qora choy (choynakda).", "image": "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F8a1e6108-08e5-4cf4-bdec-d3ca4b5e470b&w=640&q=75" },
    { "id": 93, "name": "Limonli  Choy", "price": 8000, "category": "hot-drinks", "description": "Yangi limon bo'laklari va asal bilan damlangan choy.", "image": "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F391b6940-fb76-4da4-8ee1-82e64b48d8ca&w=640&q=75" },
    { "id": 95, "name": "Ketchup", "price": 3000, "category": "sauces", "description": "Klassik shirin pomidorli ketchup sousi.", "image": "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F337a8e1f-7a27-481b-a669-4e77e9ef2074&w=640&q=75" },
    { "id": 96, "name": "Pishloqli Sous", "price": 3000, "category": "sauces", "description": "Fri kartoshkalari uchun maxsus quyuq pishloqli sous.", "image": "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F16eb5412-2d6b-4053-87d8-ad1237044e7e&w=640&q=75" },
    { "id": 97, "name": "Sarimsoqli Oq Sous", "price": 3000, "category": "sauces", "description": "Lavash va shaurmalar uchun ishlatiladigan sarimsoqli maxsus mayonez.", "image": "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F6a2a2351-91b1-44db-a497-6dcc60a5876f&w=640&q=75" },
    { "id": 100, "name": "Mayonez", "price": 2500, "category": "sauces", "description": "Klassik yuqori yog'lilik darajasiga ega mayonez.", "image": "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F16eb5412-2d6b-4053-87d8-ad1237044e7e&w=640&q=75" },
    { "id": 102, "name": "Xalapeno", "price": 3500, "category": "sauces", "description": "Meksikancha uslubdagi achchiq.", "image": "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2Fd0aa684e-ca72-40c9-834b-6b4c022a65e6&w=640&q=75" }
  ]
};

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('Barchasi');
  const [searchQuery, setSearchQuery] = useState('');
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === productId);
      if (existingProduct.quantity === 1) {
        return prevCart.filter((item) => item.id !== productId);
      }
      return prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
      );
    });
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const filteredProducts = (DB_DATA.products || []).filter((product) => {
    if (!product || !product.name) return false;

    const matchesCategory = selectedCategory === 'Barchasi' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes((searchQuery || '').toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans relative">


      <header className="sticky top-0 z-40 bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
          <div className="text-2xl font-black text-purple-700 tracking-wider shrink-0">
            MAX<span className="text-yellow-500">WAY</span>
          </div>


          <div className="flex-1 max-w-md relative hidden sm:block">
            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Taomlarni qidirish..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-100 pl-10 pr-4 py-2 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all" />
          </div>

          <div className="flex items-center space-x-4 shrink-0">
            <button
              onClick={() => setIsRegisterOpen(true)}
              className="bg-purple-100 text-purple-700 hover:bg-purple-200 px-4 py-2 rounded-full font-semibold text-sm flex items-center gap-2 transition">
              <User size={16} />
              Kirish
            </button>
          </div>
        </div>

        <div className="px-4 pb-3 sm:hidden bg-white">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Taomlarni qidirish..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-100 pl-10 pr-4 py-2 rounded-xl text-sm focus:outline-none"
            />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-4 gap-8">


        <div className="lg:col-span-3">


          <div className="flex space-x-2 overflow-x-auto pb-4 scrollbar-none mt-6">
            <button
              onClick={() => setSelectedCategory('Barchasi')}
              className={`px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${selectedCategory === 'Barchasi'
                ? 'bg-purple-700 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}>
              Barchasi
            </button>
            {DB_DATA.categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${selectedCategory === cat.id
                  ? 'bg-purple-700 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                  }`}>
                {cat.name}
              </button>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mt-6 mb-4">
            {searchQuery ? `"${searchQuery}" bo'yicha natijalar` : "Menyu"}
          </h2>

          {filteredProducts.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              Hech qanday mahsulot topilmadi 😕
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition">
                  <img src={product.image} alt={product.name} className="w-full h-44 object-cover" />
                  <div className="p-4">
                    <h3 className="font-bold text-lg text-gray-800 line-clamp-1">{product.name}</h3>
                    <p className="text-gray-400 text-xs mt-1 line-clamp-2 h-8">{product.description}</p>
                    <div className="flex items-center justify-between mt-4">
                      <span className="font-extrabold text-gray-900">{product.price.toLocaleString()} UZS</span>
                      <button
                        onClick={() => addToCart(product)}
                        className="bg-purple-700 text-white p-2 rounded-xl hover:bg-purple-800 transition">
                        <Plus size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 sticky top-24">
            <div className="flex items-center space-x-2 border-b border-gray-100 pb-3 mb-4">
              <ShoppingBag className="text-purple-700" size={22} />
              <h2 className="text-lg font-bold text-gray-800">Savatcha</h2>
              <span className="bg-purple-100 text-purple-700 text-xs px-2 py-0.5 rounded-full font-bold">
                {cart.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            </div>

            {cart.length === 0 ? (
              <div className="text-center py-8 text-gray-400 text-sm">Savat bo'sh.</div>
            ) : (
              <>
                <div className="space-y-4 max-h-[350px] overflow-y-auto pr-1">
                  {cart.map((item) => (
                    <div key={item.id} className="flex items-center justify-between border-b border-gray-50 pb-3">
                      <div className="flex-1">
                        <h4 className="font-semibold text-sm text-gray-800">{item.name}</h4>
                        <span className="text-xs text-gray-500">{(item.price * item.quantity).toLocaleString()} UZS</span>
                      </div>
                      <div className="flex items-center space-x-2 bg-gray-100 p-1 rounded-lg">
                        <button onClick={() => removeFromCart(item.id)} className="p-1 hover:bg-white rounded text-gray-600">
                          <Minus size={14} />
                        </button>
                        <span className="text-sm font-bold text-gray-800 w-4 text-center">{item.quantity}</span>
                        <button onClick={() => addToCart(item)} className="p-1 hover:bg-white rounded text-gray-600">
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-100 pt-4 mt-4 space-y-2">
                  <div className="flex justify-between font-bold text-lg text-gray-800">
                    <span>Jami:</span>
                    <span>{totalPrice.toLocaleString()} UZS</span>
                  </div>
                  <button className="w-full bg-purple-700 text-white py-3 rounded-xl font-bold mt-2 hover:bg-purple-800 transition">
                    Buyurtma berish
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </main>


      {isRegisterOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 relative">
            <button
              onClick={() => setIsRegisterOpen(false)} className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 p-1 bg-gray-100 rounded-full">
              <X size={20} />
            </button>
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Ro'yxatdan o'tish</h3>
              <p className="text-gray-500 text-sm mt-1">MaxWay tizimiga kirish</p>
            </div>
            <form onSubmit={(e) => { e.preventDefault(); setIsRegisterOpen(false); alert("Muvaffaqiyatli kirdingiz!"); }} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">Ismingiz</label>
                <input type="text" required placeholder="Ali" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-purple-500" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">Telefon raqam</label>
                <div className="relative">
                  <span className="absolute left-4 top-3 text-sm text-gray-500 font-medium">+998</span>
                  <input type="tel" required maxLength="9" placeholder="901234567" className="w-full border border-gray-200 rounded-xl pl-16 pr-4 py-3 text-sm focus:outline-none focus:border-purple-500" />
                </div>
              </div>
              <button type="submit" className="w-full bg-purple-700 hover:bg-purple-800 text-white font-bold py-3 rounded-xl transition shadow-md">
                Kodni yuborish
              </button>
            </form>
          </div>
        </div>
      )}


    </div>
  );
}