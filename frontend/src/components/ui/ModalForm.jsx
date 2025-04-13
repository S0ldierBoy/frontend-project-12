import { useRef, useEffect } from 'react';
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
  const inputRef = useRef(null);

  useEffect(() => {
    if (show) {
      setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.focus();
          inputRef.current.select();
        }
      }, 50);
    }
  }, [show]);

  return (
    <Modal show={show} onHide={onClose} autoFocus={false} data-bs-theme="dark">
      <FocusLock returnFocus>
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
                <div className="mb-3">
                  <label className="sr-only" htmlFor="channel-name">
                    {labelText}
                  </label>

                  <Field name="name">
                    {({ field }) => (
                      <FormControl
                        {...field}
                        id="channel-name"
                        type="text"
                        placeholder={placeholder}
                        ref={inputRef}
                        aria-label={labelText}
                      />
                    )}
                  </Field>

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
