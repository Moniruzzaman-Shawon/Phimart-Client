import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    console.log("Form Submitted ✅", data);
    // Example: simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    alert("Registration successful!");
  };

  const password = watch("password");

  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-12 bg-base-200">
      <div className="card w-full max-w-md bg-base-100 shadow-xl">
        <div className="card-body">
          {/* Heading */}
          <h2 className="card-title text-2xl font-bold">Sign Up</h2>
          <p className="text-base-content/70">Create an account to get started</p>

          {/* Form */}
          <form className="space-y-4 mt-4" onSubmit={handleSubmit(onSubmit)}>
            {/* First Name */}
            <div className="form-control">
              <label className="label" htmlFor="first_name">
                <span className="label-text">First Name</span>
              </label>
              <input
                id="first_name"
                type="text"
                placeholder="John"
                className="input input-bordered w-full"
                {...register("first_name", { required: "First Name is required" })}
              />
              {errors.first_name && (
                <span className="text-error text-sm">{errors.first_name.message}</span>
              )}
            </div>

            {/* Last Name */}
            <div className="form-control">
              <label className="label" htmlFor="last_name">
                <span className="label-text">Last Name</span>
              </label>
              <input
                id="last_name"
                type="text"
                placeholder="Doe"
                className="input input-bordered w-full"
                {...register("last_name", { required: "Last Name is required" })}
              />
              {errors.last_name && (
                <span className="text-error text-sm">{errors.last_name.message}</span>
              )}
            </div>

            {/* Email */}
            <div className="form-control">
              <label className="label" htmlFor="email">
                <span className="label-text">Email</span>
              </label>
              <input
                id="email"
                type="email"
                placeholder="name@example.com"
                className="input input-bordered w-full"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <span className="text-error text-sm">{errors.email.message}</span>
              )}
            </div>

            {/* Address */}
            <div className="form-control">
              <label className="label" htmlFor="address">
                <span className="label-text">Address</span>
              </label>
              <input
                id="address"
                type="text"
                placeholder="7/A Dhanmondi, Dhaka"
                className="input input-bordered w-full"
                {...register("address")}
              />
            </div>

            {/* Phone Number */}
            <div className="form-control">
              <label className="label" htmlFor="phone_number">
                <span className="label-text">Phone Number</span>
              </label>
              <input
                id="phone_number"
                type="text"
                placeholder="0123456789"
                className="input input-bordered w-full"
                {...register("phone_number")}
              />
            </div>

            {/* Password */}
            <div className="form-control">
              <label className="label" htmlFor="password">
                <span className="label-text">Password</span>
              </label>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                className="input input-bordered w-full"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                })}
              />
              {errors.password && (
                <span className="text-error text-sm">{errors.password.message}</span>
              )}
            </div>

            {/* Confirm Password */}
            <div className="form-control">
              <label className="label" htmlFor="confirmPassword">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                id="confirmPassword"
                type="password"
                placeholder="••••••••"
                className="input input-bordered w-full"
                {...register("confirm_password", {
                  required: "Confirm Password is required",
                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
              />
              {errors.confirm_password && (
                <span className="text-error text-sm">
                  {errors.confirm_password.message}
                </span>
              )}
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn btn-primary w-full" disabled={isSubmitting}>
              {isSubmitting ? (
                <span className="loading loading-spinner loading-sm"></span>
              ) : (
                "Register"
              )}
            </button>
          </form>

          {/* Footer link */}
          <div className="text-center mt-4">
            <p className="text-base-content/70">
              Already have an account?{" "}
              <a href="/login" className="link link-primary">
                Sign in
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
