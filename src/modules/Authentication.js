import auth from '../modules/auth';

const Authentication = {
  async signUp(name, email, password, password_confirmation){
    try {
      const { data } = await auth.signUp({
        name: name,
        email: email,
        password: password,
        password_confirmation: password_confirmation
      });
      return data;
    } catch (error) {
      return error;
    }
  }

}

export default Authentication;
