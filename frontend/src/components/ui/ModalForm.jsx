import { Formik, Field, Form, ErrorMessage } from 'formik';
import { FormControl, Button, Modal } from 'react-bootstrap';

import FocusLock from 'react-focus-lock';

const ModalForm = ({
  t,
  channelNames,
  show,
  onClose,
  schema,
  title,
  buttonConfirm,
  buttonCancel,
  onSubmit,
  placeholder,
  initialValues,
  labelText,
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
            } catch (error) {
              setErrors({ name: error.message || t('modal.form.netError') });
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
                <div className="mb-3" aria-label={labelText}>
                  <Field
                    as={FormControl}
                    name="name"
                    type="text"
                    placeholder={placeholder}
                    data-autofocus="true"
                  />
                  <ErrorMessage name="name" component="div" className="text-danger" />
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={onClose} aria-label="Close modal">
                  {buttonCancel}
                </Button>
                <Button
                  type="submit"
                  variant="primary"
                  disabled={isSubmitting}
                  aria-label={buttonConfirm}
                >
                  {buttonConfirm}
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
