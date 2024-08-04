import { useEffect } from "react";
import { Button, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import PasswordInput from "../../components/ui/PasswordInput";
import { useTheme } from "../../ThemeContext";
import { registerUser } from "../../store/actions/authActions";

function Register() {
  const { theme } = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, user } = useSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors, isValid },
  } = useForm({
    mode: "onTouched",
  });

  async function submitForm(data) {
    dispatch(registerUser({ ...data, id: "1" }));
  }

  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  }, [user, navigate]);

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
            <h2 className="mb-4 display-4 fw-semibold text-center">Register</h2>
            <p className="text-muted">
              <span
                className={`pe-1 text-${theme === "light" ? "dark" : "light"}`}
              >
                Already have an account?
              </span>
              <Link to="/login">Click here to login</Link>
            </p>
            {error && <p className="text-danger">{error}</p>}

            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                {...register("userName", {
                  required: "Username is required",
                  minLength: {
                    value: 3,
                    message: "Username must be at least 3 characters long",
                  },
                })}
                isInvalid={!!errors.userName}
              />
              <Form.Control.Feedback type="invalid">
                {errors.userName?.message}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter first name"
                {...register("firstName", {
                  required: "First name is required",
                })}
                isInvalid={!!errors.firstName}
              />
              <Form.Control.Feedback type="invalid">
                {errors.firstName?.message}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter last name"
                {...register("lastName", {
                  required: "Last name is required",
                })}
                isInvalid={!!errors.lastName}
              />
              <Form.Control.Feedback type="invalid">
                {errors.lastName?.message}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\w+[\w-.]*@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/,
                    message: "Not a valid email address",
                  },
                })}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email?.message}
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
                {loading ? (
                  <>
                    Register
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
                  "Register"
                )}
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Register;
