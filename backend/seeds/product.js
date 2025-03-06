import { sql } from "../config/db.js";

const SAMPLE_PRODUCTS = [
    {
      name: "Kids Towel",
      price: 29.99,
      image:
        "https://images.unsplash.com/photo-1561567131-f7d83083aee0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFieXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "New Born Dress",
      price: 19.99,
      image:
        "https://plus.unsplash.com/premium_photo-1677664963667-24707030b6a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJhYnl8ZW58MHx8MHx8fDA%3D",
    },
    {
      name: "Kids Winder Jacket",
      price: 149.99,
      image:
        "https://images.unsplash.com/photo-1522771930-78848d9293e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJhYnl8ZW58MHx8MHx8fDA%3D",
    },
    {
      name: "New Born ",
      price: 39.99,
      image:
        "https://media.istockphoto.com/id/869139630/photo/cute-baby-boy-in-white-sunny-bedroom.webp?a=1&b=1&s=612x612&w=0&k=20&c=5niu63a1cpzXUbeKmU0yeh_b9-qtZtLUNGdvVVJt0lU=",
    },
    {
      name: "Cozy Knit Baby Blanket",
      price: 24.99,
      image:
        "https://images.unsplash.com/photo-1595407912265-891b3d174415?w=800&auto=format&fit=crop&q=60",
    },
    {
      name: "Girl Dress",
      price: 89.99,
      image:
        "https://media.istockphoto.com/id/896160952/photo/selective-focus-of-happy-6-month-indian-asian-little-kid-wearing-pink-dress-crawling-on-the.webp?a=1&b=1&s=612x612&w=0&k=20&c=cmvVer9DfgTx9KAwDsY99bv5NHZ2WflXrLfElpIBE-Q=",
    },
    {
      name: "Green Jacket",
      price: 129.99,
      image:
        "https://images.unsplash.com/photo-1554342321-0776d282ceac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGtpZHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Baby Jeans Jacket",
      price: 15.99,
      image:
        "https://images.unsplash.com/photo-1541043081679-e877f6b15b51?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGtpZHxlbnwwfHwwfHx8MA%3D%3D",
    },
  ];
  

async function seedDatabase() {
  try {
    // first, clear existing data
    await sql`TRUNCATE TABLE products RESTART IDENTITY`;

    // insert all products
    for (const product of SAMPLE_PRODUCTS) {
      await sql`
        INSERT INTO products (name, price, image)
        VALUES (${product.name}, ${product.price}, ${product.image})
      `;
    }

    console.log("Database seeded successfully");
    process.exit(0); // success code
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1); // failure code
  }
}

seedDatabase();