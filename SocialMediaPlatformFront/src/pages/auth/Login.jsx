import { Button, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import PasswordInput from "../../components/ui/PasswordInput";
import { useTheme } from "../../ThemeContext";
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../store/actions/authActions';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const { theme } = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors, isValid },
  } = useForm({
    mode: "onTouched",
  });

  useEffect(() => {
    if (auth.user) {
      navigate('/home');
      localStorage.setItem('token', auth.user.token);
    }
  }, [auth.user, navigate]);

  async function submitForm(data) {
    try {
      dispatch(loginUser(data));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container>
      <Row
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <Col md={5}>
          <Form
            onSubmit={handleSubmit(submitForm)}
            noValidate
            validated={isValid}
            className="border p-5 rounded"
            style={{ backgroundColor: "var(--bs-light)" }}
          >
            <h2 className="mb-4 display-4 fw-semibold text-center">Log In</h2>
            <p className="text-muted">
              <span
                className={`pe-1 text-${theme === "light" ? "dark" : "light"}`}
              >
                Don't have an account?
              </span>
              <Link to="/register">Click here to register</Link>
            </p>
            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                {...register("username", {
                  required: "Username is required",
                })}
                isInvalid={!!errors.username}
              />
              <Form.Control.Feedback type="invalid">
                {errors.username?.message}
              </Form.Control.Feedback>
            </Form.Group>

            <PasswordInput register={register} errors={errors} />

            <div className="d-grid">
              <Button
                disabled={!isValid || isSubmitting}
                className="form-btn"
                size="lg"
                type="submit"
              >
                {isSubmitting || auth.loading ? (
                  <>
                    Log In
                    <Spinner
                      as="span"
                      animation="border"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                      className="ms-2"
                    />
                  </>
                ) : (
                  "Log In"
                )}
              </Button>
            </div>
            {auth.error && <div className="text-danger mt-3">{auth.error}</div>}
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;



