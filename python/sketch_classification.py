import os
import random

import keras.losses as losses
import keras.metrics as metrics
import numpy
from keras.callbacks import ModelCheckpoint, Callback
from keras.layers import Conv2D, MaxPool2D, Flatten, Dense, Dropout, ZeroPadding2D
from keras.models import Sequential
from keras.optimizers import SGD

from python import utils

CLASSES = [
    "circle",
    "square",
    "line",
    "baseball",
    "apple",
    "door",
    "book",
    "triangle",
    "hexagon",
    "octagon",
    "laptop",
    "pizza",
    "envelope",
    "clock",
    "camera",
    "face",
    "car",
    "bicycle",
    "hamburger",
    "steak",
    "bowtie",
    "truck"
]

DATA_DIR = os.path.join(utils.DATA_DIR, "sketch")
MODEL_W_NAME = "sketch_class.hdf5"

x_train = []
y_train = []
x_val = []
y_val = []


def get_model():
    m = Sequential()
    m.add(ZeroPadding2D(input_shape=(32, 32, 1)))
    m.add(Conv2D(32, (3, 3), activation='relu'))
    m.add(ZeroPadding2D())
    m.add(Conv2D(32, (3, 3), activation='relu'))
    m.add(ZeroPadding2D())
    m.add(Conv2D(32, (3, 3), activation='relu'))
    m.add(MaxPool2D())
    m.add(Dropout(0.1))
    m.add(ZeroPadding2D())
    m.add(Conv2D(64, (3, 3), activation='relu'))
    m.add(ZeroPadding2D())
    m.add(Conv2D(64, (3, 3), activation='relu'))
    m.add(ZeroPadding2D())
    m.add(Conv2D(64, (3, 3), activation='relu'))
    m.add(MaxPool2D())
    m.add(Dropout(0.1))
    m.add(ZeroPadding2D())
    m.add(Conv2D(128, (3, 3), activation='relu'))
    m.add(ZeroPadding2D())
    m.add(Conv2D(128, (3, 3), activation='relu'))
    m.add(ZeroPadding2D())
    m.add(Conv2D(128, (3, 3), activation='relu'))
    m.add(MaxPool2D())
    m.add(Dropout(0.1))
    m.add(Flatten())
    m.add(Dense(512, activation='relu'))
    m.add(Dense(512, activation='relu'))
    m.add(Dense(len(CLASSES), activation='softmax'))

    m.summary()

    return m


def load_data():
    if not os.path.exists(DATA_DIR):
        os.mkdir(DATA_DIR)

    x = []
    y = []
    for clazz in CLASSES:
        utils.maybe_download(clazz + ".npy", DATA_DIR,
                            "https://storage.googleapis.com/quickdraw_dataset/full/numpy_bitmap/{}.npy".format(clazz))
        x_data = numpy.load(os.path.join(DATA_DIR, clazz + ".npy"))
        # only use 5% of the 100k samples
        numpy.random.shuffle(x_data)
        x_data = x_data[:int(0.05 * len(x_data))]
        y_data = numpy.zeros((len(x_data), len(CLASSES)))
        for i in range(0, len(y_data)):
            y_data[i][CLASSES.index(clazz)] = 1
        x.extend(x_data)
        y.extend(y_data)

    randomize = numpy.arange(len(x))
    numpy.random.shuffle(randomize)
    x = numpy.asarray(x)
    y = numpy.asarray(y)
    x = x[randomize]
    y = y[randomize]
    x = x.reshape((len(x), 28, 28))
    x_image = []
    for j in x:
        x_image.append(utils.resize_image(j, "L", 32))

    split = int(0.8 * len(x))
    global x_train, x_val, y_train, y_val
    # reset datatypes
    x_train = []
    x_val = []

    # split up data into train and validation
    x_train_i = x_image[:split]

    # augment train data
    for j in range(0, len(x_train_i)-1):
        if random.random() < 0.5:
            x_train_i[j] = utils.augment_image(x_train_i[j])

    for j in x_train_i:
        tmp = numpy.array(j)
        tmp = tmp.reshape((32, 32, 1))
        x_train.append(tmp * 1.0 / 255.0)
    x_train = numpy.asarray(x_train)

    y_train = y[:split]
    x_val_i = x_image[split:]
    # reshape and normalize
    for j in x_val_i:
        tmp = numpy.array(j)
        tmp = tmp.reshape((32, 32, 1))
        x_val.append(tmp * 1.0 / 255.0)
    x_val = numpy.asarray(x_val)
    y_val = y[split:]

    print("Data loaded: {} train samples, {} validation samples".format(len(x_train), len(x_val)))


def train():
    m = get_model()

    if not os.path.exists(utils.MODEL_DIR):
        os.mkdir(utils.MODEL_DIR)

    weights_path = os.path.join(utils.MODEL_DIR, MODEL_W_NAME)
    if os.path.exists(weights_path):
        m.load_weights(weights_path)

    m.compile(loss=losses.categorical_crossentropy, metrics=[metrics.categorical_accuracy, 'acc'],
              optimizer=SGD(0.005, decay=1e-6))

    checkpoint_cb = ModelCheckpoint(weights_path, save_weights_only=True)
    reload_data_cb = ReloadDataCallback()

    m.fit(x_train, y_train, callbacks=[checkpoint_cb, reload_data_cb], batch_size=200, validation_data=(x_val, y_val),
          epochs=50)


class ReloadDataCallback(Callback):
    def on_epoch_end(self, epoch, logs=None):
        print("Reloading data...")
        load_data()


if __name__ == "__main__":
    load_data()
    train()
