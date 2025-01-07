export type HouseDetailsType = {
  [key: string]: {
    title: string;
    description: string;
    images: string[];
    specs: {
      size: string;
      area: string;
      type: string;
      style: string;
      price: string;
    };
    planImage: string;
  };
};

const houseDetails: HouseDetailsType = {
  "kd-1350": {
    title: "ДФахверк с сауной для загородного проживания, 154 м²0",
    description:
      "КД-1350 – загородное жилье для любителей комфорта и лаконичной эстетики. Здание имеет прямоугольную форму и подойдет для вытянутого участка. Общая площадь дома составляет 154 квадратных метра. Удобная планировка позволит свободно разместиться семье из 3-5 человек.  Одно из преимуществ проекта – сауна. Здесь владельцы смогут отдохнуть после тяжелого дня, организовав расслабляющий спа-вечер. Еще один неоспоримый плюс – панорамное остекление двух фасадов дома с выходом на террасу. Благодаря им жильцы смогут проводить летние вечера на свежем воздухе и наслаждаться осенними и зимними пейзажами, находясь в тепле, уюте и комфорте дома.  Внутренняя планировка состоит из кухни-гостиной с место под столовую зону, трех спален, санузла, совмещенного с сауной, котельной и тамбура-прихожей. Расположение и форма помещений внутри дома продуманы таким образом, что будущий домовладелец может удобно переделать их под нужды семьи: в одной из спален оборудовать кабинет или комнату для занятий спортом, разделить помещение кухни-гостиной на 2 и даже 3 зоны барными стойками и легкими перегородками, вместо прихожей оборудовать гардеробную или кладовую.  Выбирайте комплектацию дома и вносите изменения в планировку! Корректировка чертежей производится бесплатно.  Стоимость строительства рассчитывается в зависимости от комплектации дома, индивидуальных предпочтений заказчика. Оплата возможна наличными, в ипотеку, с  рассрочкой платежей. Также в счет оплаты могут быть учтены средства материнского капитала",
    images: ["/h1.jpg", "/hh2.jpg", "/hh3.jpg", "/hh4.jpg"],
    specs: {
      size: "10.2X15.1 м",
      area: "154.02 м²",
      type: "Современный дом",
      style: "Фахверк",
      price: "от 60 000 руб./м²",
    },
    planImage: "/house223.jpg",
  },
  "kd-1250": {
    title: "Дом KD-1250",
    description: "Идеальное решение для небольшой семьи.",
    images: ["/house2.jpg", "/house2-detail1.jpg", "/house2-detail2.jpg"],
    specs: {
      size: "9.5X12.6 м",
      area: "120 м²",
      type: "Семейный дом",
      style: "Классический стиль",
      price: "от 45 000 руб./м²",
    },
    planImage: "/house223.jpg",
  },
};

export default houseDetails;