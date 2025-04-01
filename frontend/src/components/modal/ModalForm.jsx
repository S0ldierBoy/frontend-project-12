import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { FormControl, Button, Modal } from 'react-bootstrap';

import FocusLock from 'react-focus-lock';

const ModalForm = ({
  channelNames,
  show,
  onClose,
  schema,
  title,
  buttonName,
  onSubmit,
  placeholder,
  initialValues,
}) => {
  return (
    <Modal show={show} onHide={onClose} data-bs-theme="dark">
      <FocusLock>
        <Formik
          initialValues={initialValues}
          validationSchema={schema(channelNames)}
          validateOnChange={false}
          validateOnBlur={false}
          onSubmit={async (values, { setSubmitting, setErrors }) => {
            try {
              await onSubmit(values);
              onClose();
            } catch (error) {
              setErrors({ name: error.message || 'Network error. Try again.' });
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form noValidate>
              <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="mb-3">
                  <Field
                    as={FormControl}
                    name="name"
                    type="text"
                    placeholder={placeholder}
                    data-autofocus
                  />
                  <ErrorMessage name="name" component="div" className="text-danger" />
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={onClose} aria-label="Close modal">
                  Close
                </Button>
                <Button
                  type="submit"
                  variant="primary"
                  disabled={isSubmitting}
                  aria-label={buttonName}
                >
                  {buttonName}
                </Button>
              </Modal.Footer>
            </Form>
          )}
        </Formik>
      </FocusLock>
    </Modal>
  );
};

export default ModalForm;
