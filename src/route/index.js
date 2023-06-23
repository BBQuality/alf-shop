// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {
    layout: 'main',
    title: "Alforov Shop - Офіційний Online-магазин",
    lang: "uk-UA",
    translate: "yes",
    tagline: "Alf’orov Shop",
    description: "Одяг для справжніх любителів історії",
    author: "Олександр Алфьоров",
    buy: "Додати в кошик",
  })
  //                  ↑↑ сюди вводимо JSON дані
})


// ================================================================

// Підключаємо роутер до бек-енду
module.exports = router
