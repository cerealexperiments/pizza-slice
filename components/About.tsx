import Balance from "react-wrap-balancer";
export default function About() {
  return (
    <div className="pt-24 overflow-hidden max-w-screen-xl mx-auto">
      <div className="mx-auto max-w-7xl lg:flex lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 px-8 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
          <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              О нас
            </h2>
            <p className="mt-6 text-base sm:text-xl leading-8 text-gray-600">
              <Balance>
                Quasi est quaerat. Sit molestiae et. Provident ad dolorem
                occaecati eos iste. Soluta rerum quidem minus ut molestiae velit
                error quod. Excepturi quidem expedita molestias quas.
              </Balance>
            </p>
            <p className="mt-6 text-base leading-7 text-gray-600">
              <Balance>
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat. Quasi aperiam sit non sit neque reprehenderit.
              </Balance>
            </p>
          </div>
          <div className="flex items-start max-w-[37rem] w-content justify-center">
            <img
              src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&h=842&q=80"
              alt=""
              className="aspect-[7/5] rounded-2xl bg-gray-50 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
