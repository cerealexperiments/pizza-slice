type InvoiceProductType = {
  title: string;
  quantity: number;
  size?: string;
};
type InvoiceType = {
  name: string;
  phone: string;
  email: string;
  address: string;
  addressDetails: string;
  total: number;
  products: InvoiceProductType[];
};
export default function EmailTemplate({
  email,
  address,
  addressDetails,
  products,
  name,
  phone,
  total,
}: InvoiceType) {
  return (
    <div>
      <p>Имя: {name}</p>
      <p>Номер: {phone}</p>
      <p>Email: {email}</p>
      <p>
        Адрес: {address}, {addressDetails}
      </p>
      <p>Итого: {total} сом</p>
      <p>Заказ:</p>
      {products.map((item) => {
        return (
          <div className="space-y-4" key={item.title}>
            {item.title}, {item.size ? item.size : ""}. Количество:{" "}
            {item.quantity}
          </div>
        );
      })}
    </div>
  );
}
