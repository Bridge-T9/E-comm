from django.urls import path
from . import views

urlpatterns = [
    path('', views.homepage, name='home'),
    path('cart/', views.cart, name='cart'),
    path('store/', views.store, name='store'),
    path('checkout/', views.checkout, name='checkout'),
    path('update_item/', views.update_item, name='update_item'),
    path('process_order/', views.processOrder, name='process_order')
]
