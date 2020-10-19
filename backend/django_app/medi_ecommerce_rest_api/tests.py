from django.test import TestCase

from medi_ecommerce_rest_api.models import Products, ProductDetails, OrderCreate, OrderConfirmation

product = {
      "name": "Clean Eating: 1 Meal Per Day",
      "code": 1,
      "cost": 99.00,
      "description": "Enjoy our balanced approach to clean eating with whole grains, lean proteins, and veggies – without any added preservatives or artificial ingredients. Perfect for a wide variety of diets, clean meals are free from dairy, gluten, and soy and low in sodium.",
      "inventory_on_hand": 2
}

product_detail = {
      "product_type": {
        "type_name": "Service",
        "type": "Food Service"
      },
      "cost": 99.00,
      "description": "Enjoy our balanced approach to clean eating with whole grains, lean proteins, and veggies – without any added preservatives or artificial ingredients. Perfect for a wide variety of diets, clean meals are free from dairy, gluten, and soy and low in sodium.",
      "pushed_product": False,
      "callback": "magna sed",
      "category": {
        "name": "categ 1",
        "type": "nostrud non veniam"
      }

}

create_order = {
    "customer_name": "John Doe",
    "customer_email": "johndoe@gmail.com",
    "customer_phone": "7120392839",
    "shipping_address": [{
"street": "Excepteur in id est irure",
"city": "sit anim sint tempor",
"state": "incididunt aliqua",
"zipcode": 96878743
}],
    "billing_address": [{
"street": "Excepteur in id est irure",
"city": "sit anim sint tempor",
"state": "incididunt aliqua",
"zipcode": 96878743
}],
    "purchase_products": product,
}

order_confirmation = {
    "customer_name": "John Doe",
    "customer_email": "johndoe@gmail.com",
    "customer_phone": "7120392839",
    "purchase_products": product,
    "order_total": 30,
}


class ProductTestCase(TestCase):
    def setUp(self):
        Products.objects.create(**product)

    def test_product_created_successfully(self):
        created_product = Products.objects.get(code=product["code"])
        self.assertEqual(created_product.name, product["name"])
        self.assertEqual(created_product.code, product["code"])
        self.assertEqual(created_product.cost, product["cost"])
        self.assertEqual(created_product.description, product["description"])
        self.assertEqual(created_product.inventory_on_hand, product["inventory_on_hand"])


class ProductDetailsTestCase(TestCase):
    def setUp(self):
        Products.objects.create(**product)
        self.created_product = Products.objects.get(code=product["code"])
        ProductDetails.objects.create(product=self.created_product, product_type=product_detail['product_type'],
                                      category=product_detail['category'],
                                      pushed_product=product_detail['pushed_product'])

    def test_product_detail_created_successfully(self):
        created_product_detail = ProductDetails.objects.get(product=self.created_product)
        self.assertEqual(created_product_detail.product_type, product_detail["product_type"])
        self.assertEqual(created_product_detail.category, product_detail["category"])
        self.assertEqual(created_product_detail.pushed_product, product_detail["pushed_product"])


class OrderCreateTestCase(TestCase):
    def setUp(self):
        self.order_create = OrderCreate.objects.create(**create_order)
        self.order_confirmation = OrderConfirmation.objects.create(order_create=self.order_create, **order_confirmation)

    def test_order_created_successfully(self):
        created_order = OrderCreate.objects.get(order_create_id=self.order_create.order_create_id)
        self.assertEqual(created_order.purchase_products, product)
        self.assertEqual(created_order.customer_name, create_order["customer_name"])
        self.assertEqual(created_order.customer_email, create_order["customer_email"])
        self.assertEqual(created_order.customer_phone, create_order["customer_phone"])
        self.assertEqual(created_order.shipping_address, create_order["shipping_address"])
        self.assertEqual(created_order.purchase_products, create_order["purchase_products"])

    def test_order_confirmation_created_successfully(self):
        created_order_confirmation = OrderConfirmation.objects.get(
            confirmation_code=self.order_confirmation.confirmation_code)
        self.assertEqual(created_order_confirmation.order_create, self.order_create)
        self.assertEqual(created_order_confirmation.customer_name, order_confirmation["customer_name"])
        self.assertEqual(created_order_confirmation.customer_email, order_confirmation["customer_email"])
        self.assertEqual(created_order_confirmation.customer_phone, order_confirmation["customer_phone"])
        self.assertEqual(created_order_confirmation.purchase_products, order_confirmation["purchase_products"])
        self.assertEqual(created_order_confirmation.order_total, order_confirmation["order_total"])
