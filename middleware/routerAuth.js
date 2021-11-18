export default function ({ route,redirect }) {
  const loginStatus = parseInt(sessionStorage.getItem('loginStatus'));
  if(loginStatus === 1  && route.path.indexOf('login') > -1){
    return redirect('/');
  }else if(!loginStatus  && route.path.indexOf('login') === -1){
    return redirect('/login/');
  }else if(!loginStatus  && route.path.indexOf('login') > -1){
    return;
  }
}
