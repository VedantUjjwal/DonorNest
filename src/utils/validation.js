export function validateForm(data, isLogin) {
    const errors = {};

    if (!isLogin && !data.name) {
        errors.name = 'Name is required';
    }

    if (!data.email) {
        errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
        errors.email = 'Invalid email format';
    }

    if (!data.password) {
        errors.password = 'Password is required';
    } else if (data.password.length < 6) {
        errors.password = 'Password must be at least 6 characters';
    }

    if (!isLogin && data.password !== data.confirmPassword) {
        errors.confirmPassword = 'Passwords do not match';
    }

    return errors;
}