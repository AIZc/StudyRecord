import numpy as np
import h5py
from skimage import transform, data
import imageio
import pickle


def sigmoid(Z):

    A = 1/(1+np.exp(-Z))
    cache = Z
    return A, cache

def relu(Z):

    A = np.maximum(0,Z)
    assert(A.shape == Z.shape)
    cache = Z 
    return A, cache

def linear_forward(A, W, b):

    Z = np.dot(W, A) + b
    assert(Z.shape == (W.shape[0], A.shape[1]))
    cache = (A, W, b)

    return Z, cache


def linear_activation_forward(A_prev, W, b, activation):


    if activation == "sigmoid":
        Z, linear_cache = linear_forward(A_prev, W, b)
        A, activation_cache = sigmoid(Z)
    elif activation == "relu":
        Z, linear_cache = linear_forward(A_prev, W, b)
        A, activation_cache = relu(Z)

    assert(A.shape == (W.shape[0], A_prev.shape[1]))
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
    assert(AL.shape == (1, X.shape[1]))
    return AL, caches


def predict(X, parameters):

    probas, caches = L_model_forward(X, parameters)
    print(probas[0][0])
    print('{:.5f}'.format(probas[0][0]))
    if probas[0][0]>0.5:
        p=1
    else:
        p=0
    return p

with open('W_parameters.pkl', 'rb') as f:
    parameters = pickle.load(f)


my_image = "15.png"
fname = "/home/li/test/"+my_image
image = np.array(imageio.imread(fname))
my_image = transform.resize(image, (64, 64)).reshape((64*64*3, 1))
#print(my_image.shape)
my_predicted_image = predict(my_image, parameters)
print(my_predicted_image)
