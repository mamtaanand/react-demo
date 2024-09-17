import {useCookies} from 'react-cookie'

const Cookie = () => {

    function MyComponent() {
      const [cookies, setCookie, removeCookie] = useCookies(['user']);
    
      // Set a cookie
      setCookie('user', 'John Doe', { path: '/' });
    
      // Get a cookie
      const user = cookies.user;
      console.log(user); // 'John Doe'
    
      // Remove a cookie
      removeCookie('user');
      
      return <div>User: {user}</div>;
    }
    
}
export default Cookie;