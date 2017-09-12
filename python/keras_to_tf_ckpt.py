import os

import tensorflow as tf
from keras import backend as K

from python import sketch_classification
from python import utils
from python import dump_ckpt_vars


def keras_to_tf_cktp(keras_model, keras_weights, name):
    keras_model.load_weights(keras_weights)
    tf_session = K.get_session()
    saver = tf.train.Saver()
    if not os.path.exists(os.path.join(utils.MODEL_DIR, name)):
        os.mkdir(os.path.join(utils.MODEL_DIR, name))
    return saver.save(tf_session, os.path.join(utils.MODEL_DIR, name))


path = keras_to_tf_cktp(sketch_classification.get_model(),
                        os.path.join(utils.MODEL_DIR, sketch_classification.MODEL_W_NAME),
                        "sketch_classification_ckpt/ckpt")
print("Saved to: {}".format(path))

dump_ckpt_vars.main(path, "../deeplearn_data/sketch_classification")