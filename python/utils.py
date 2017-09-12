from __future__ import absolute_import
from __future__ import division
from __future__ import print_function

import os
import random

import numpy as np
import wget as wget
from PIL import Image as pil_image
from keras import backend as K

DATA_DIR = "../data"
MODEL_DIR = "../model"
TF_BOARD_DIR = "../tf-logs"


def character_encode_sequence(sequence, seq_len, alphabet="abcdefghijklmnopqrstuvwxyz ", ):
    vectorized_seq = np.zeros((seq_len, len(alphabet), 1))
    sequence = sequence.lower()
    split = list(sequence)
    i = 0
    for c in split:
        al_idx = alphabet.find(c)
        if al_idx != -1:
            # set specific index at char position of sequence to true/1
            vectorized_seq[i][al_idx][0] = 1
            i = i + 1

    return vectorized_seq


def load_image_square(image, target_size, normalize=True):
    img = pil_image.open(image)
    img = img.convert('RGB')

    if target_size:
        img = crop_to_square(img)
        img = img.resize((target_size, target_size))

    img_a = np.asarray(img, dtype=K.floatx())
    del img

    if K.image_data_format() == "channels_first":
        img_a = np.rollaxis(img_a, 2, 0)

    if normalize:
        img_a = img_a * 1. / 255

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


def progress_bar(current, total, width):
    print("\r{0}%".format(round(current * 100 / total, 2)), end="")
    if current == total:
        # get new line
        print()
