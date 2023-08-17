export default function HowToOrder() {
  return (
    <div className="bg-white px-6 pt-8 pb-16 lg:px-8">
      <div className="mx-auto max-w-screen-md text-base leading-7 text-gray-700">
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
          Доставка и оплата
        </h1>
        <div className="mt-10 max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
            Оплата
          </h2>
          <p className="mt-6 text-sm sm:text-base">
            <span className="font-semibold">Оплата товара производится</span>{" "}
            путём перечисления денежных средств на расчетный счет компании.
            Только после этого происходит отгрузка товара. В течении 1-2 рабочих
            дней. Отправка <span className="font-semibold">оптовых</span>{" "}
            заказов осуществляется транспортными компаниями Карго.
          </p>
        </div>
        <div className="mt-16 max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
            Доставка
          </h2>
          <p className="mt-6 text-sm sm:text-base">
            Доставка до{" "}
            <span className="font-semibold">транспортной компании</span>{" "}
            осуществляется <span className="font-semibold">бесплатно</span>.
            Отправка товара осуществляется в течении 1-2 рабочих дней{" "}
            <span className="font-semibold">
              с момента поступления денежных средств на счет компании
            </span>
            . Оплата услуг транспортной компании производится покупателем
            самостоятельно по правилам перевозчика. Сроки и стоимость доставки
            до вашего города вы можете уточнить на официальных сайтах
            транспортных компаний.
          </p>
        </div>
      </div>
    </div>
  );
}
