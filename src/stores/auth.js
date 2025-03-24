import { ref } from 'vue';

const isAuthenticated = ref(false);
const userInfo = ref(null);

export const useAuthStore = () => {


  const setAuthenticated = (status, user = null) => {
    console.log('Setting authenticated:', status);
    isAuthenticated.value = status;
    userInfo.value = user.username;
    console.log('user:', userInfo);
  };
//   isAuthenticated.value = true;
  console.log('isAuthenticated2:', isAuthenticated.value);

  return {
    isAuthenticated,
    userInfo,
    setAuthenticated,
  };
}; 