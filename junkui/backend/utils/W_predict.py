import numpy as np
import h5py
from skimage import transform, data
import imageio
import pickle
import os
from config.settings import BASE_DIR
from PIL import Image
import random


def changefile(filname):
    if not filname.split('.')[-1] == 'png':
        return filname
    im = Image.open(os.path.join(BASE_DIR, 'media/' + filname))
    rgb_im = im.convert('RGB')
    rgb_im.save(os.path.join(BASE_DIR, f"media/{filname.split('.')[0]}.jpeg"))
    print(filname)
    return filname.split('.')[0] + '.jpeg'


def sigmoid(Z):
    A = 1 / (1 + np.exp(-Z))
    cache = Z
    return A, cache


def relu(Z):
    A = np.maximum(0, Z)
    assert (A.shape == Z.shape)
    cache = Z
    return A, cache


def linear_forward(A, W, b):
    Z = np.dot(W, A) + b
    assert (Z.shape == (W.shape[0], A.shape[1]))
    cache = (A, W, b)

    return Z, cache


def linear_activation_forward(A_prev, W, b, activation):
    if activation == "sigmoid":
        Z, linear_cache = linear_forward(A_prev, W, b)
        A, activation_cache = sigmoid(Z)
    elif activation == "relu":
        Z, linear_cache = linear_forward(A_prev, W, b)
        A, activation_cache = relu(Z)

    assert (A.shape == (W.shape[0], A_prev.shape[1]))
    cache = (linear_cache, activation_cache)
    return A, cache


def L_model_forward(X, parameters):
    caches = []
    A = X
    L = len(parameters) // 2
    for l in range(1, L):
        A_prev = A
        A, cache = linear_activation_forward(
            A_prev, parameters['W' + str(l)], parameters['b' + str(l)], "relu")
        caches.append(cache)

    AL, cache = linear_activation_forward(
        A, parameters['W' + str(L)], parameters['b' + str(L)], "sigmoid")
    caches.append(cache)
    assert (AL.shape == (1, X.shape[1]))
    return AL, caches


def predict(X, parameters):
    probas, caches = L_model_forward(X, parameters)
    p = probas[0][0]
    return p


def get_score(filename):
    pks_name = os.path.join(BASE_DIR, "utils/W_parameters.pkl")
    filename = changefile(filename)
    print('change is' + filename)
    with open(pks_name, 'rb') as f:
        parameters = pickle.load(f)

    filename = os.path.join(BASE_DIR, 'media/' + filename)
    print(filename)
    image = np.array(imageio.imread(filename))
    my_image = transform.resize(image, (64, 64)).reshape((64 * 64 * 3, 1))
    my_predicted_image = predict(my_image, parameters)

    return random.randint(60, 98) if my_predicted_image > 0.5 else random.randint(0, 40)
