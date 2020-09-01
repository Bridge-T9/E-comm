from django.shortcuts import render


def homepage(requests):
    return render(requests, 'store/home.html')

def cart(requests):
    return render(requests, 'store/cart.html')

def store(requests):
    return render(requests, 'store/store.html')

def checkout(requests):
    return render(requests, 'store/checkout.html')