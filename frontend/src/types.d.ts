interface Good {
  category?: string,
  name?: string,
  price?: string,
}

interface Order {
  name: string,
  number: string,
  order: Good,
}