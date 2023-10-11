import { NextResponse } from "next/server";
import { Resend } from "resend";
import EmailTemplate from "@/components/EmailTemplate";
const resend = new Resend("re_EaohYFXZ_3AqC6nPQoBcYXTqm9ZgN9yCa");

export async function POST(request) {
  const { name, addressDetails, phone, email, address, products, total } =
    await request.json();
  try {
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["prettysunshine468@gmail.com"],
      subject: `Новый заказ от  ${email}`,
      react: EmailTemplate({
        total: total,
        phone: phone,
        address,
        addressDetails,
        name,
        email,
        products,
      }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
