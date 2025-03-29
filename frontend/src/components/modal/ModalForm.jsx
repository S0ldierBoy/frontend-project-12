import React, { useContext } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { FormControl, Button, Modal } from 'react-bootstrap';
import { ChatInputFocusContext } from '../../context/ChatInputFocusContext.jsx';

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
  const { setFocus } = useContext(ChatInputFocusContext);
  return (
    <Modal show={show} onHide={onClose} data-bs-theme="dark">
      <Formik
        initialValues={initialValues}
        validationSchema={schema(channelNames)}
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={async (values, { setSubmitting, setErrors }) => {
          try {
            await onSubmit(values);
            onClose();
            setTimeout(() => setFocus(), 10);
          } catch (error) {
            setErrors({ name: 'Network error. Try again.' });
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
                  autoFocus
                />
                <ErrorMessage name="name" component="div" className="text-danger" />
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={onClose}>
                Close
              </Button>
              <Button type="submit" variant="primary" disabled={isSubmitting}>
                {buttonName}
              </Button>
            </Modal.Footer>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default ModalForm;
