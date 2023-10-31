import Balance from "react-wrap-balancer";

export default function DeliveryPage() {
  return (
    <div className="bg-white px-6 pt-8 pb-16 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
        Доставка
        </h1>
        <div className="mt-10 max-w-2xl">
          <p className="text-sm sm:text-base">
          Как сделать заказ? Это легко! Просто выберите ваши любимые блюда из нашего меню, оформите заказ онлайн или позвоните нам по указанному номеру. Наша команда готова принять ваш заказ и доставить его вам в удобное время.Как сделать заказ
          </p>
          <h2 className="mt-16 text-2xl font-semibold tracking-tight text-gray-900">
            Heading 1
          </h2>
          <p className="mt-6 text-sm sm:text-base">
            <Balance>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quas et quisquam harum id assumenda pariatur omnis provident exercitationem molestiae alias voluptas sequi, nostrum illum quaerat itaque, repellendus sunt numquam.
            </Balance>
          </p>
        </div>
        <div className="mt-16 max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
          Heading 2
          </h2>
          <p className="mt-6 text-sm sm:text-base">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet rem corporis eius unde eligendi illum nihil alias dolorem facilis ipsam eos nam ducimus consequuntur inventore, repellat atque quia porro vero? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis repellat pariatur qui et atque dolor aut voluptatibus consequatur numquam voluptates repudiandae illo blanditiis quae, doloribus dolorum quisquam. Amet, dicta ab?
          </p>
        </div>
      </div>
    </div>
  );
}