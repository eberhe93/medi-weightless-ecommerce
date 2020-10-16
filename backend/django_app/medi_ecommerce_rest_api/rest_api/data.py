from medi_ecommerce_rest_api.models import Products, ProductDetails, OrderCreate
from django.shortcuts import get_object_or_404, get_list_or_404

def createProducts():
    p = [{
      "name": "Clean Eating: 1 Meal Per Day",
      "code": 1,
      "cost": 99.00,
      "description": "Enjoy our balanced approach to clean eating with whole grains, lean proteins, and veggies – without any added preservatives or artificial ingredients. Perfect for a wide variety of diets, clean meals are free from dairy, gluten, and soy and low in sodium.",
      "inventory_on_hand": 2
        },
        {
      "name": "Clean Eating: 3 Meal Per Day",
      "code": 2,
      "cost": 324.00,
      "description": "Enjoy our balanced approach to clean eating with whole grains, lean proteins, and veggies – without any added preservatives or artificial ingredients. Perfect for a wide variety of diets, clean meals are free from dairy, gluten, and soy and low in sodium.",
      "inventory_on_hand": 0
        },
        {
      "name": "Keto Eating: 1 Meal Per Day",
      "code": 3,
      "cost": 108.00,
      "description": "Keep your appetite in check with our lowest carb meal plan. The keto diet promotes weight loss with satiating healthy fats, grass-fed meats, and wild-caught seafood.",
      "inventory_on_hand": 12
        },
        {
      "name": "Keto Eating: 3 Meal Per Day",
      "code": 4,
      "cost": 304.00,
      "description": "Keep your appetite in check with our lowest carb meal plan. The keto diet promotes weight loss with satiating healthy fats, grass-fed meats, and wild-caught seafood.",
      "inventory_on_hand": 5
        },
        {
      "name": "Paleo Eating: 1 Meal Per Day",
      "code": 5,
      "cost": 111.00,
      "description": "Simplify your diet with high-protein paleo meals. Each nutritious meal includes organic seasonal veggies, lean proteins, and healthy fats. These low-calorie and high protein meals support weight loss without sacrificing good nutrition.",
      "inventory_on_hand": 12
        },
        {
      "name": "Paleo Eating: 3 Meal Per Day",
      "code": 6,
      "cost": 304.00,
      "description": "Simplify your diet with high-protein paleo meals. Each nutritious meal includes organic seasonal veggies, lean proteins, and healthy fats. These low-calorie and high protein meals support weight loss without sacrificing good nutrition.",
      "inventory_on_hand": 20
        }]
    for item in p:
        Products.objects.create(**item)
def createProductsDetail():
    pd = [{
      "name": "Clean Eating: 1 Meal Per Day",
      "code": 1,
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
    },
    {
      "name": "Clean Eating: 3 Meal Per Day",
      "code": 2,
      "product_type": {
        "type_name": "Service",
        "type": "Food Service"
      },
      "cost": 324.00,
      "description": "Enjoy our balanced approach to clean eating with whole grains, lean proteins, and veggies – without any added preservatives or artificial ingredients. Perfect for a wide variety of diets, clean meals are free from dairy, gluten, and soy and low in sodium.",
      "pushed_product": False,
      "callback": "magna sed",
      "category": {
        "name": "categ 1",
        "type": "nostrud non veniam"
      }
    },
    {
      "name": "Keto Eating: 1 Meal Per Day",
      "code": 3,
      "product_type": {
        "type_name": "Service",
        "type": "Food Service"
      },
      "cost": 108.00,
      "description": "Keep your appetite in check with our lowest carb meal plan. The keto diet promotes weight loss with satiating healthy fats, grass-fed meats, and wild-caught seafood.",
      "pushed_product": False,
      "callback": "magna sed",
      "category": {
        "name": "categ 1",
        "type": "nostrud non veniam"
      }
    },
    {
      "name": "Keto Eating: 3 Meal Per Day",
      "code": 4,
      "product_type": {
        "type_name": "Service",
        "type": "Food Service"
      },
      "cost": 304.00,
      "description": "Keep your appetite in check with our lowest carb meal plan. The keto diet promotes weight loss with satiating healthy fats, grass-fed meats, and wild-caught seafood.",
      "pushed_product": False,
      "callback": "magna sed",
      "category": {
        "name": "categ 1",
        "type": "nostrud non veniam"
      }
    },
    {
      "name": "Paleo Eating: 1 Meal Per Day",
      "code": 5,
      "product_type": {
        "type_name": "Service",
        "type": "Food Service"
      },
      "cost": 111.00,
      "description": "Simplify your diet with high-protein paleo meals. Each nutritious meal includes organic seasonal veggies, lean proteins, and healthy fats. These low-calorie and high protein meals support weight loss without sacrificing good nutrition.",
      "pushed_product": False,
      "callback": "magna sed",
      "category": {
        "name": "categ 1",
        "type": "nostrud non veniam"
      }
    },
    {
        "name": "Paleo Eating: 3 Meal Per Day",
        "code": 6,
      "product_type": {
        "type_name": "Service",
        "type": "Food Service"
      },
        "cost": 304.00,
        "description": "Simplify your diet with high-protein paleo meals. Each nutritious meal includes organic seasonal veggies, lean proteins, and healthy fats. These low-calorie and high protein meals support weight loss without sacrificing good nutrition.",
        "pushed_product": True,
        "callback": "magna sed",
        "category": {
            "name": "[object Object]",
            "type": "nostrud non veniam"
        }
    }]

    for item in pd:
        product = get_object_or_404(Products, pk=item['code'])
        ProductDetails.objects.create(product=product, product_type=item['product_type'], category=item['category'], pushed_product=item['pushed_product'])