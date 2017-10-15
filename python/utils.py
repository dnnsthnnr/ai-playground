from __future__ import absolute_import
from __future__ import division
from __future__ import print_function

import os
import random

import numpy as np
import re
import wget as wget
from PIL import Image as pil_image
from keras import backend as K
import tensorflow as tf
from keras.engine import Layer

from python import dump_ckpt_vars
import sys
from datetime import datetime

DATA_DIR = "../data"
MODEL_DIR = "../model"
TF_BOARD_DIR = "../tf-logs"


def character_encode_sequence(sequence, alphabet="abcdefghijklmnopqrstuvwxyz ", ):
    sequence = sequence.lower()
    sequence = re.sub("[^" + alphabet + "]", "", sequence)
    split = list(sequence)
    vectorized_seq = np.zeros((len(split), 1))
    i = 0
    while i < len(split):
        al_idx = alphabet.find(split[i])
        # set specific index at char position of sequence to true/1
        vectorized_seq[i][0] = al_idx + 1
        i = i + 1

    # normalize
    vectorized_seq = vectorized_seq / len(alphabet)
    return vectorized_seq


def hot_encoded_seq(sequence, maxlength, alphabet):
    sequence = sequence.lower()
    sequence = re.sub("[^" + alphabet + "]", "", sequence)
    sequence = sequence.replace("  ", " ")  # replace double space with single
    split = list(sequence)
    if len(split) > maxlength:
        split = split[-maxlength:]  # use only last sub-sequence
    vectorized_seq = np.zeros((maxlength, len(alphabet), 1))
    for i in range(len(split)):
        c_idx = alphabet.find(split[i])
        vectorized_seq[i][c_idx][0] = 1

    return vectorized_seq


def load_square_rgb_image(image, target_size, normalize=True):
    img = pil_image.open(image)
    img = img.convert('RGB')

    if target_size:
        img = crop_to_square(img)
        img = img.resize((target_size, target_size))

    img_a = image_to_array(img, normalize)

    img_a = maybe_transform_image_matrix_to_3_channels(img_a)

    return img_a


def crop_to_square(img):
    width, height = img.size  # Get dimensions
    min_size = min(width, height)

    left = (width - min_size) / 2
    top = (height - min_size) / 2
    right = (width + min_size) / 2
    bottom = (height + min_size) / 2

    return img.crop((left, top, right, bottom))


def maybe_download(filename, working_directory, url):
    filepath = os.path.join(working_directory, filename)

    if not os.path.exists(filepath):
        print("Downloading {} to {}".format(url, filepath))
        wget.download(url, out=filepath, bar=progress_bar)
    else:
        print("Not downloading, file already found: " + filepath)
    return filepath


def resize_image(data, mode, target_size):
    img = pil_image.fromarray(data, mode=mode)
    img = img.resize((target_size, target_size))
    return img


def augment_image(img):
    r = random.random()
    # rotate image
    if r < 0.5:
        img = img.rotate(random.random() * 360)

    # translate image
    if r >= 0.5:
        y = random.randint(-10, 10)
        x = random.randint(-10, 10)
        img = img.transform(img.size, pil_image.AFFINE, (1, 0, x, 0, 1, y))

    return img


def image_to_array(img, normalize=True):
    img = np.asarray(img).astype(K.floatx())
    if normalize:
        img = img / 255
    return img


def maybe_transform_image_matrix_to_3_channels(m):
    if len(m.shape) < 3:
        # m = m.reshape((m.shape[0], m.shape[1], 1))
        # if m.shape[2] == 1:
        m = np.stack((m,) * 3, axis=-1)

    return m


def l1_loss(y_true, y_pred):
    return K.sum(K.abs(y_pred - y_true), axis=-1)


def export_keras_for_deeplearn(name):
    tf_session = K.get_session()
    saver = tf.train.Saver()
    if not os.path.exists(os.path.join(MODEL_DIR, name)):
        os.mkdir(os.path.join(MODEL_DIR, name))
    ckpt_path = saver.save(tf_session, os.path.join(MODEL_DIR, name + "/cktp"))

    dump_ckpt_vars.main(ckpt_path, "../ai-playground/src/assets/deeplearn/" + name)


def pad_image_to_square(img, mode=None, fill="white"):
    w, h = img.size
    max_side = max(w, h)
    if mode is None:
        mode = img.mode
    pad_image = pil_image.new(mode, (max_side, max_side), fill)
    # print(w, h, (int((max_side - w) / 2), int((max_side - h) / 2)))
    pad_image.paste(img, (int((max_side - w) / 2), int((max_side - h) / 2)))
    # pad_image.show()
    return pad_image


def array_to_img(arr, denormalize=True):
    if denormalize:
        arr = arr * 255
    arr = arr.astype('uint8')

    if arr.shape[2] == 1:
        arr = arr.reshape((arr.shape[0], arr.shape[1]))

    return pil_image.fromarray(arr)


def progress_bar(current, total, width=None):
    print("\r{0}%".format(round(current * 100 / total, 2)), end="")
    if current == total:
        # get new line
        print()


class Denormalize(Layer):
    '''
    Custom layer to denormalize the final Convolution layer activations (tanh)
    Since tanh scales the output to the range (-1, 1), we add 1 to bring it to the
    range (0, 2). We then multiply it by 127.5 to scale the values to the range (0, 255)
    '''

    def __init__(self, **kwargs):
        super(Denormalize, self).__init__(**kwargs)

    def build(self, input_shape):
        pass

    def call(self, x, mask=None):
        '''
        Scales the tanh output activations from previous layer (-1, 1) to the
        range (0, 255)
        '''

        return (x + 1) * 127.5

    def compute_output_shape(self, input_shape):
        return input_shape


class ImageNormalize(Layer):
    def __init__(self, **kwargs):
        super(ImageNormalize, self).__init__(**kwargs)

    def build(self, input_shape):
        pass

    def compute_output_shape(self, input_shape):
        return input_shape

    def call(self, x, mask=None):
        # x = (x - 127.5)/ 127.5
        return x / 255.
